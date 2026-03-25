# Símile API

Backend para a extensão Chrome Símile.

## Variáveis de ambiente
- `OPENAI_API_KEY`
- `SIMILE_MODEL` opcional, padrão `gpt-5.4-mini`

## Deploy
1. Suba esta pasta em um repositório GitHub
2. Importe no Vercel
3. Configure as env vars
4. Publique
5. Copie a URL final e cole em `simile-extension/config.js`

## Endpoint
`POST /api/synonyms`

Body:
```json
{ "query": "feliz" }
```


## Smoke test local
Rode `npm run smoke` para validar os caminhos locais antes do deploy.
