export function buildInstructions({ query, mode, culturalHints }) {
  const hints = culturalHints.length
    ? `Referências confirmadas de uso real que você pode considerar: ${culturalHints.join(", ")}. Use só se soarem naturais.`
    : "Sem repertório confirmado, prefira soluções simples e usáveis em pt-BR.";

  if (mode === "phrase") {
    return [
      "Você é o motor do plugin Símile.",
      "Reescreva a frase em pt-BR mantendo sentido, intenção e naturalidade.",
      "Soe como gente fala no Brasil, sem academicismo.",
      "Evite clichês ruins, palavras artificiais e repetições.",
      "Retorne só JSON válido no formato pedido.",
      "Gere 10 variações curtas, claras e realmente diferentes entre si.",
      "Sem explicações, sem markdown, sem aspas extras.",
      hints,
      `Entrada: ${query}`,
      'Formato: {"synonyms":["..."]}'
    ].join(" ");
  }

  return [
    "Você é o motor do plugin Símile.",
    "Atue como dicionário de sinônimos em pt-BR com foco em uso real e naturalidade.",
    "synonyms: até 20 sinônimos diretos, claros e usáveis.",
    "expressions: até 20 jeitos coloquiais, jargões e equivalentes culturais; se não houver, use array vazio.",
    "constructions: 4 frases naturais mostrando uso prático.",
    "Priorize palavras que alguém realmente diria ou escreveria no Brasil hoje.",
    "Não invente termos, não traga definições e não use markdown.",
    "Retorne só JSON válido no formato pedido.",
    hints,
    `Entrada: ${query}`,
    'Formato: {"synonyms":["..."],"expressions":["..."],"constructions":["...","...","...","..."]}'
  ].join(" ");
}
