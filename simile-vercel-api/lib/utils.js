import { PHRASE_REPLACEMENTS, WORD_DATA, normalizeKey } from "./culturalData.js";

export function cleanQuery(value = "") {
  return String(value).trim().replace(/\s+/g, " ");
}

export function countWords(value = "") {
  return cleanQuery(value).split(/\s+/).filter(Boolean).length;
}

export function inferMode(query = "") {
  return countWords(query) > 1 ? "phrase" : "word";
}

export function clampList(items = [], max = 20) {
  const seen = new Set();
  const out = [];
  for (const item of items || []) {
    const cleaned = cleanQuery(item)
      .replace(/^[-•]\s*/, "")
      .replace(/[“”]/g, '"')
      .trim();
    if (!cleaned) continue;
    const key = normalizeKey(cleaned);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(cleaned);
    if (out.length >= max) break;
  }
  return out;
}

export function normalizeResponse(payload, mode, originalQuery = "") {
  if (mode === "phrase") {
    const synonyms = rankVariants(clampList(payload?.synonyms, 10), originalQuery).slice(0, 10);
    return {
      mode,
      synonyms,
      expressions: [],
      constructions: []
    };
  }

  const synonyms = rankWordOptions(clampList(payload?.synonyms, 30), originalQuery).slice(0, 30);
  const expressions = rankExpressions(clampList(payload?.expressions, 30), originalQuery).slice(0, 30);
  const constructions = clampList(payload?.constructions, 6);

  return { mode, synonyms, expressions, constructions };
}

export function getCulturalHints(query = "") {
  const key = normalizeKey(query);
  const direct = getWordEntry(key);
  if (direct) {
    return clampList([
      ...(direct.synonyms || []),
      ...(direct.expressions || [])
    ], 12);
  }

  const tokens = key.split(/\s+/).filter(Boolean);
  const merged = [];
  for (const token of tokens) {
    const entry = getWordEntry(token);
    if (entry) merged.push(...(entry.synonyms || []), ...(entry.expressions || []));
    if (PHRASE_REPLACEMENTS[token]) merged.push(...PHRASE_REPLACEMENTS[token]);
  }
  return clampList(merged, 12);
}

export function getDirectWordResult(query = "") {
  const key = normalizeKey(query);
  const entry = getWordEntry(key);
  if (!entry) return null;

  const synonyms = rankWordOptions(clampList(entry.synonyms, 20), key).slice(0, 20);
  const expressions = rankExpressions(clampList(entry.expressions, 20), key).slice(0, 20);
  const constructions = clampList(
    entry.constructions?.length ? entry.constructions : buildConstructions(key, [...synonyms, ...expressions].slice(0, 4)),
    4
  );

  return {
    mode: "word",
    synonyms,
    expressions,
    constructions
  };
}

export function getFastPhraseResult(query = "") {
  const clean = cleanQuery(query);
  const normalized = normalizeKey(clean);
  const tokens = clean.split(/\s+/).filter(Boolean);
  const normalizedTokens = normalized.split(/\s+/).filter(Boolean);
  if (tokens.length < 2 || tokens.length > 20) return null;

  const variants = new Set();

  for (let i = 0; i < tokens.length; i += 1) {
    const original = tokens[i];
    const token = normalizedTokens[i];
    const replacements = getTokenReplacements(token).slice(0, 4);

    for (const replacement of replacements) {
      const oneSwap = [...tokens];
      oneSwap[i] = preserveCase(original, replacement);
      variants.add(cleanQuery(oneSwap.join(" ")));
      if (variants.size >= 14) break;
    }
  }

  for (let i = 0; i < tokens.length; i += 1) {
    for (let j = i + 1; j < tokens.length; j += 1) {
      const firstReplacements = getTokenReplacements(normalizedTokens[i]).slice(0, 2);
      const secondReplacements = getTokenReplacements(normalizedTokens[j]).slice(0, 2);
      for (const a of firstReplacements) {
        for (const b of secondReplacements) {
          const copy = [...tokens];
          copy[i] = preserveCase(tokens[i], a);
          copy[j] = preserveCase(tokens[j], b);
          variants.add(cleanQuery(copy.join(" ")));
          if (variants.size >= 24) break;
        }
        if (variants.size >= 24) break;
      }
      if (variants.size >= 24) break;
    }
    if (variants.size >= 24) break;
  }

  const ranked = rankVariants(
    Array.from(variants).filter((item) => normalizeKey(item) !== normalized),
    clean
  ).slice(0, 10);

  if (!ranked.length) return null;

  return {
    mode: "phrase",
    synonyms: ranked,
    expressions: [],
    constructions: []
  };
}

export function buildFallbackWordPayload(query = "") {
  const direct = getDirectWordResult(query);
  if (direct) return direct;

  const hints = getCulturalHints(query);
  const rankedSynonyms = rankWordOptions(hints.filter((item) => !/\s/.test(item)).slice(0, 20), query).slice(0, 20);
  const rankedExpressions = rankExpressions(hints.filter((item) => /\s/.test(item)).slice(0, 20), query).slice(0, 20);
  const merged = clampList([...rankedSynonyms, ...rankedExpressions], 8);

  return {
    mode: "word",
    synonyms: rankedSynonyms,
    expressions: rankedExpressions,
    constructions: buildConstructions(cleanQuery(query).toLowerCase(), merged.slice(0, 4))
  };
}

export function buildFallbackPhrasePayload(query = "") {
  return getFastPhraseResult(query) || {
    mode: "phrase",
    synonyms: [query],
    expressions: [],
    constructions: []
  };
}

function buildConstructions(query, items = []) {
  const base = items.filter(Boolean).slice(0, 4);
  if (!base.length) {
    return [
      `Isso aqui tem a mesma vibe de ${query}.`,
      `No dia a dia, dá para trocar ${query} sem perder o sentido.`,
      `Se quiser soar mais natural, vale variar ${query}.`,
      `Dependendo do contexto, ${query} pode ganhar outra cara.`
    ];
  }

  const templates = [
    (item) => `Hoje eu iria de ${item}, soa mais natural.`,
    (item) => `No papo do dia a dia, ${item} funciona bem.`,
    (item) => `Se quiser variar, dá para trocar por ${item}.`,
    (item) => `Em contexto real, ${item} entra redondo.`
  ];

  return base.map((item, index) => templates[index](item));
}

function preserveCase(original, replacement) {
  if (original === original.toUpperCase()) return replacement.toUpperCase();
  if (original[0] === original[0]?.toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function getWordEntry(key = "") {
  return WORD_DATA[normalizeKey(key)] || null;
}

function getTokenReplacements(token = "") {
  const entry = getWordEntry(token);
  const fromDictionary = entry ? [...(entry.synonyms || []), ...(entry.expressions || [])] : [];
  const fromMap = PHRASE_REPLACEMENTS[token] || [];
  return clampList([...fromMap, ...fromDictionary], 6);
}

function rankWordOptions(items = [], originalQuery = "") {
  const queryKey = normalizeKey(originalQuery);
  return [...items].sort((a, b) => scoreWord(b, queryKey) - scoreWord(a, queryKey));
}

function rankExpressions(items = [], originalQuery = "") {
  const queryKey = normalizeKey(originalQuery);
  return [...items].sort((a, b) => scoreExpression(b, queryKey) - scoreExpression(a, queryKey));
}

function rankVariants(items = [], originalQuery = "") {
  const queryKey = normalizeKey(originalQuery);
  return [...items].sort((a, b) => scoreVariant(b, queryKey) - scoreVariant(a, queryKey));
}

function scoreWord(value = "", queryKey = "") {
  const normalized = normalizeKey(value);
  let score = 0;
  if (normalized === queryKey) score -= 50;
  if (!/\s/.test(value)) score += 14;
  if (value.length >= 4 && value.length <= 12) score += 8;
  if (/[a-zà-ÿ]/i.test(value)) score += 4;
  if (/^[a-zà-ÿ-]+$/i.test(value)) score += 4;
  if (/(íssimo|mente)$/.test(normalized)) score -= 2;
  if (/(de|com|pra|sem)/.test(normalized)) score -= 3;
  return score;
}

function scoreExpression(value = "", queryKey = "") {
  const normalized = normalizeKey(value);
  let score = 0;
  if (normalized.includes(queryKey)) score -= 4;
  if (/\s/.test(value)) score += 12;
  if (value.length >= 8 && value.length <= 26) score += 7;
  if (/(de boa|na bad|num pulo|na hora|trocar ideia|dar um tempo|mandar a real|pe no saco|de responsa|sem misterio)/.test(normalized)) score += 8;
  if (/[,.;:!?]/.test(value)) score -= 6;
  return score;
}

function scoreVariant(value = "", queryKey = "") {
  const normalized = normalizeKey(value);
  let score = 0;
  if (normalized === queryKey) score -= 100;
  const wordCount = cleanQuery(value).split(/\s+/).length;
  if (wordCount >= 2 && wordCount <= 14) score += 8;
  if (value.length <= 90) score += 6;
  if (/(de boa|na bad|num pulo|na hora|trocar ideia|dar um tempo|mandar a real|bem|demais|pra caramba|partiu)/.test(normalized)) score += 6;
  score += uniqueTokenDelta(normalized, queryKey) * 3;
  return score;
}

function uniqueTokenDelta(value = "", query = "") {
  const a = new Set(value.split(/\s+/).filter(Boolean));
  const b = new Set(query.split(/\s+/).filter(Boolean));
  let delta = 0;
  for (const token of a) {
    if (!b.has(token)) delta += 1;
  }
  return delta;
}
