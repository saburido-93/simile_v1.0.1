import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'Query is required' });

  const wordCount = query.trim().split(/\s+/).length;
  const isPhrase = wordCount > 1 && wordCount <= 20;

  // Prompt de sistema para garantir o output limpo e o tom de voz "como se fala"
  const systemPrompt = `Você é um dicionário de sinônimos moderno e cultural. 
  Responda estritamente em JSON. Use linguagem natural, urbana e fluida.`;

  const userPrompt = isPhrase
    ? `Dê 10 variações de sinônimos para a frase completa: "${query}". Retorne apenas: {"sinonimos": ["frase1", "frase2", ...]}`
    : `Para a palavra "${query}", forneça:
       1. Até 30 sinônimos diretos.
       2. Até 30 expressões, jargões ou formas culturais/dia a dia de falar (sinônimos culturais).
       3. 6 frases reais (construções) usando variações da palavra original, escritas como as pessoas realmente falam em situações cotidianas.
       Retorne no formato: {"sinonimos": [], "expressoes": [], "construcoes": []}`;

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.SIMILE_MODEL || "gpt-4o-mini", // gpt-4o-mini é o melhor custo-benefício atual
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const result = JSON.parse(completion.choices[0].message.content);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao processar IA", details: error.message });
  }
}