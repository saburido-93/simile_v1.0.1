import OpenAI from "openai";
import { buildInstructions } from "../lib/prompt.js";
import {
  buildFallbackPhrasePayload,
  buildFallbackWordPayload,
  cleanQuery,
  countWords,
  getCulturalHints,
  getDirectWordResult,
  getFastPhraseResult,
  inferMode,
  normalizeResponse
} from "../lib/utils.js";

let openAIClient = null;

const MODEL = process.env.SIMILE_MODEL || "gpt-5.4-mini";
const REQUEST_TIMEOUT_MS = Number(process.env.SIMILE_TIMEOUT_MS || 6500);
const MEMORY_CACHE_TTL_MS = 1000 * 60 * 60 * 6;
const memoryCache = globalThis.__SIMILE_MEMORY_CACHE__ || new Map();
globalThis.__SIMILE_MEMORY_CACHE__ = memoryCache;

export default async function handler(req, res) {
  setCors(res);
  setCacheHeaders(res);

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const startedAt = Date.now();

  try {
    const query = cleanQuery(req.body?.query || "");
    if (!query) return res.status(400).json({ error: "query obrigatória" });

    const words = countWords(query);
    if (words > 20) return res.status(400).json({ error: "Use até 20 palavras." });

    const mode = inferMode(query);
    const cacheKey = `${mode}:${query.toLowerCase()}`;
    const cached = getMemoryCache(cacheKey);
    if (cached) return res.status(200).json(withMeta(cached, { startedAt, source: "memory_cache" }));

    if (mode === "word") {
      const direct = getDirectWordResult(query);
      if (direct) {
        setMemoryCache(cacheKey, direct);
        return res.status(200).json(withMeta(direct, { startedAt, source: "direct_dictionary" }));
      }
    }

    if (mode === "phrase") {
      const fastPhrase = getFastPhraseResult(query);
      if (fastPhrase && fastPhrase.synonyms.length >= 6) {
        setMemoryCache(cacheKey, fastPhrase);
        return res.status(200).json(withMeta(fastPhrase, { startedAt, source: "fast_phrase" }));
      }
    }

    if (!process.env.OPENAI_API_KEY) {
      const fallback = mode === "phrase" ? buildFallbackPhrasePayload(query) : buildFallbackWordPayload(query);
      setMemoryCache(cacheKey, fallback);
      return res.status(200).json(withMeta(fallback, { startedAt, source: "fallback_no_api_key" }));
    }

    const culturalHints = getCulturalHints(query);
    const instructions = buildInstructions({ query, mode, culturalHints });

    const client = getOpenAIClient();
    const response = await withTimeout(
      client.responses.create({
        model: MODEL,
        input: instructions,
        reasoning: { effort: "minimal" },
        max_output_tokens: mode === "phrase" ? 260 : 320,
        text: {
          format: {
            type: "json_schema",
            name: mode === "phrase" ? "simile_phrase" : "simile_word",
            strict: true,
            schema: getSchema(mode)
          },
          verbosity: "low"
        }
      }),
      REQUEST_TIMEOUT_MS,
      `Timeout após ${REQUEST_TIMEOUT_MS}ms`
    );

    const raw = safeJsonParse(response.output_text);
    const normalized = normalizeResponse(raw, mode, query);
    const finalPayload = hasUsableResult(normalized)
      ? normalized
      : mode === "phrase"
        ? buildFallbackPhrasePayload(query)
        : buildFallbackWordPayload(query);

    setMemoryCache(cacheKey, finalPayload);
    return res.status(200).json(withMeta(finalPayload, { startedAt, source: hasUsableResult(normalized) ? "openai" : "fallback_empty" }));
  } catch (error) {
    console.error("Símile API error:", error);

    const query = cleanQuery(req.body?.query || "");
    const mode = inferMode(query);
    const fallback = mode === "phrase" ? buildFallbackPhrasePayload(query) : buildFallbackWordPayload(query);
    return res.status(200).json(withMeta(fallback, { startedAt, source: "fallback_error", fallbackReason: error?.message || "Erro desconhecido" }));
  }
}

function getOpenAIClient() {
  if (openAIClient) return openAIClient;
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY não configurada");
  }
  openAIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  return openAIClient;
}

function getSchema(mode) {
  if (mode === "phrase") {
    return {
      type: "object",
      additionalProperties: false,
      properties: {
        synonyms: {
          type: "array",
          items: { type: "string" },
          minItems: 1,
          maxItems: 10
        }
      },
      required: ["synonyms"]
    };
  }

  return {
    type: "object",
    additionalProperties: false,
    properties: {
      synonyms: {
        type: "array",
        items: { type: "string" },
        minItems: 1,
        maxItems: 20
      },
      expressions: {
        type: "array",
        items: { type: "string" },
        maxItems: 20
      },
      constructions: {
        type: "array",
        items: { type: "string" },
        minItems: 1,
        maxItems: 4
      }
    },
    required: ["synonyms", "expressions", "constructions"]
  };
}

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function setCacheHeaders(res) {
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800");
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value || "{}");
  } catch {
    return {};
  }
}

function withTimeout(promise, timeoutMs, message) {
  let timer;
  return Promise.race([
    promise.finally(() => clearTimeout(timer)),
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), timeoutMs);
    })
  ]);
}

function hasUsableResult(payload) {
  return Boolean(payload?.synonyms?.length || payload?.expressions?.length || payload?.constructions?.length);
}

function withMeta(payload, { startedAt, source, fallbackReason } = {}) {
  return {
    ...payload,
    meta: {
      source,
      durationMs: Math.max(1, Date.now() - startedAt),
      ...(fallbackReason ? { fallbackReason } : {})
    }
  };
}

function getMemoryCache(key) {
  const hit = memoryCache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > MEMORY_CACHE_TTL_MS) {
    memoryCache.delete(key);
    return null;
  }
  return hit.data;
}

function setMemoryCache(key, data) {
  memoryCache.set(key, { ts: Date.now(), data });
}
