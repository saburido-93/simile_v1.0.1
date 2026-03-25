import {
  buildFallbackPhrasePayload,
  buildFallbackWordPayload,
  getDirectWordResult,
  getFastPhraseResult,
  normalizeResponse
} from "../lib/utils.js";

const samples = [
  ["feliz", getDirectWordResult("feliz")],
  ["forninho", getDirectWordResult("forninho")],
  ["quero melhorar isso agora", getFastPhraseResult("quero melhorar isso agora")],
  ["palavra-inexistente", buildFallbackWordPayload("palavra-inexistente")],
  ["frase longa mas aceitavel", buildFallbackPhrasePayload("frase longa mas aceitavel")],
  ["normalize", normalizeResponse({ synonyms: ["de boa", "de boa", "contente"], expressions: ["com o astral lá em cima"], constructions: ["Hoje eu tô bem."] }, "word", "feliz")]
];

for (const [label, payload] of samples) {
  console.log(`\n## ${label}`);
  console.log(JSON.stringify(payload, null, 2));
}
