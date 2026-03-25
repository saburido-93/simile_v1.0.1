const makeEntry = (synonyms = [], expressions = [], constructions = []) => ({ synonyms, expressions, constructions });

export const WORD_DATA = {
  feliz: makeEntry(
    ["contente", "alegre", "animado", "satisfeito", "radiante", "empolgado", "leve", "bem", "vibrando", "realizado"],
    ["de boaça", "amarradão", "com o coração leve", "na paz", "com o astral lá em cima", "felizão", "todo serelepe", "num clima ótimo"],
    [
      "Hoje eu tô de boaça, bem mais leve.",
      "Ela saiu da reunião amarradona com o resultado.",
      "Quando dá certo, o clima fica lá em cima.",
      "Se quiser soar mais natural, felizão entra bem no papo."
    ]
  ),
  triste: makeEntry(
    ["abatido", "pra baixo", "chateado", "desanimado", "melancólico", "sentido", "cabreiro", "murcho"],
    ["na bad", "jururu", "sentindo o baque", "com a energia lá embaixo", "meio borocoxô", "mal na fita"],
    [
      "Depois da notícia, ele ficou meio jururu.",
      "Hoje eu tô na bad e sem muita energia.",
      "A equipe sentiu o baque quando o projeto caiu.",
      "Pra conversa do dia a dia, pra baixo funciona redondo."
    ]
  ),
  surpreso: makeEntry(
    ["espantado", "impressionado", "boquiaberto", "pasmo", "chocado", "atônito"],
    ["passado", "em choque", "de cara", "bugado", "sem acreditar", "de queixo caído"],
    [
      "Quando ele contou o valor, eu fiquei em choque.",
      "A galera ficou passada com a virada.",
      "Dá para dizer de cara sem perder o tom.",
      "No uso real, sem acreditar soa muito natural."
    ]
  ),
  cansado: makeEntry(
    ["esgotado", "exausto", "fatigado", "quebrado", "moído", "sem energia", "sobrecarregado"],
    ["só o pó", "sem bateria", "no talo", "pedindo arrego", "um fiapo", "morto com farofa"],
    [
      "Depois do dia inteiro, eu fiquei só o pó.",
      "Ela chegou em casa sem bateria nenhuma.",
      "Se quiser um tom coloquial, moído funciona bem.",
      "No corre do dia a dia, quebrado entra redondo."
    ]
  ),
  bonito: makeEntry(
    ["belo", "atraente", "elegante", "bem-apessoado", "charmoso", "estiloso", "caprichado"],
    ["chave", "um absurdo", "bonitão", "bem ajeitado", "arrumado na medida", "de encher o olho"],
    [
      "Esse visual ficou chave demais.",
      "A peça tá um absurdo de bonita.",
      "Pra elogio mais solto, estiloso cai bem.",
      "No dia a dia, bem ajeitado soa natural."
    ]
  ),
  feio: makeEntry(
    ["desajeitado", "esquisito", "mal resolvido", "desarmônico", "capenga", "malfeito"],
    ["meio torto", "sem sal", "estranho de doer", "mal diagramado", "esquisitão", "ruinzinho de ver"],
    [
      "O layout ficou meio torto.",
      "Do jeito que tá, parece mal diagramado.",
      "Pra papo real, sem sal funciona fácil.",
      "Capenga entra bem quando algo ficou mal resolvido."
    ]
  ),
  rapido: makeEntry(
    ["rápido", "ágil", "ligeiro", "veloz", "imediato", "dinâmico", "instantâneo"],
    ["voando", "num pulo", "na bala", "ligeirinho", "sem enrolar", "na hora"],
    [
      "Resolve isso num pulo.",
      "A resposta veio voando.",
      "Se quiser coloquial, na hora funciona bem.",
      "Na fala, na bala passa senso de velocidade."
    ]
  ),
  lento: makeEntry(
    ["devagar", "arrastado", "moroso", "travado", "demorado", "vagaroso"],
    ["em câmera lenta", "se arrastando", "quase parando", "morno", "numa leseira", "travando tudo"],
    [
      "Hoje o processo tá em câmera lenta.",
      "O app amanheceu se arrastando.",
      "Pra conversa comum, morno funciona bem.",
      "Travado entra redondo quando algo não anda."
    ]
  ),
  inteligente: makeEntry(
    ["esperto", "sagaz", "afiado", "brilhante", "perspicaz", "desenrolado", "estratégico"],
    ["com boa leitura", "ligeiro de cabeça", "saca rápido", "tem faro", "é bom de leitura"],
    [
      "Ele saca rápido o contexto.",
      "Pra elogio mais solto, sagaz funciona muito bem.",
      "Na vida real, desenrolado dá uma cara mais humana.",
      "Com boa leitura entra natural em conversa de trabalho."
    ]
  ),
  burro: makeEntry(
    ["desatento", "lerdo", "cru", "desligado", "sem noção", "despreparado"],
    ["moscando", "boiando", "viajando", "comendo mosca", "sem ler o ambiente"],
    [
      "Ele tava boiando na conversa.",
      "Pra evitar agressividade, desligado funciona melhor.",
      "Sem noção é comum, mas pede contexto.",
      "Na fala real, lerdo entra fácil."
    ]
  ),
  rico: makeEntry(
    ["abastado", "endinheirado", "bem de vida", "próspero", "com recursos", "estruturado"],
    ["cheio da nota", "com grana", "nadando em dinheiro", "com a vida ganha", "estourado de grana"],
    [
      "Ele tá bem de vida faz tempo.",
      "Pra tom coloquial, com grana funciona redondo.",
      "Cheio da nota deixa a frase mais falada.",
      "Estruturado é uma troca mais neutra."
    ]
  ),
  pobre: makeEntry(
    ["apertado", "sem grana", "duro", "com poucos recursos", "na contenção", "sem folga"],
    ["contando moeda", "sem um puto", "no aperto", "na pindaíba", "no osso"],
    [
      "Esse mês eu tô contando moeda.",
      "Pra fala comum, duro funciona fácil.",
      "Na pindaíba dá um tom bem brasileiro.",
      "Sem folga é uma opção mais neutra."
    ]
  ),
  bravo: makeEntry(
    ["irritado", "nervoso", "furioso", "incomodado", "mordido", "indignado"],
    ["pistola", "tiririca", "invocado", "virado no jiraia", "de cabeça quente"],
    [
      "Ele ficou pistola com a resposta.",
      "Pra tom falado, tiririca entra bem.",
      "Indignado é uma troca mais limpa.",
      "De cabeça quente funciona em frase natural."
    ]
  ),
  calmo: makeEntry(
    ["tranquilo", "sereno", "centrado", "equilibrado", "sossegado", "ponderado"],
    ["de boa", "na maciota", "na paz", "sem pressa", "numa calma boa"],
    [
      "Hoje eu tô de boa, sem pressa nenhuma.",
      "Pra conversa comum, sereno fica mais formal.",
      "Na maciota soa bem humano.",
      "Centrado funciona bem em contexto profissional."
    ]
  ),
  dificil: makeEntry(
    ["complicado", "trabalhoso", "árduo", "delicado", "complexo", "pesado"],
    ["osso", "pedreira", "casca grossa", "treta", "um parto", "chatinho de resolver"],
    [
      "Esse projeto tá osso de virar.",
      "Pra vida real, pedreira entra muito bem.",
      "Complexo é uma versão mais neutra.",
      "Casca grossa dá mais cor sem perder o sentido."
    ]
  ),
  facil: makeEntry(
    ["simples", "tranquilo", "mole", "descomplicado", "suave", "acessível"],
    ["mamão com açúcar", "moleza", "de boa", "sem mistério", "numa boa", "facinho"],
    [
      "Isso aqui tá mamão com açúcar.",
      "Pra fala do dia a dia, moleza funciona bem.",
      "Sem mistério deixa a frase natural.",
      "Descomplicado é uma alternativa mais limpa."
    ]
  ),
  bom: makeEntry(
    ["ótimo", "excelente", "forte", "redondo", "bem-feito", "consistente", "valioso"],
    ["de responsa", "bom demais", "na medida", "muito forte", "bem amarrado", "redondinho"],
    [
      "O argumento ficou redondo.",
      "Pra fala comum, de responsa cai bem.",
      "Bem amarrado funciona em trabalho e briefing.",
      "Bom demais deixa a frase mais solta."
    ]
  ),
  ruim: makeEntry(
    ["fraco", "problemático", "capenga", "malfeito", "insatisfatório", "precário"],
    ["meia boca", "zoado", "bem fraco", "ruim de doer", "todo torto", "embaçado"],
    [
      "Esse texto ficou meia boca.",
      "Pra tom real, zoado funciona fácil.",
      "Fraco é uma troca mais limpa.",
      "Capenga entra bem quando falta acabamento."
    ]
  ),
  legal: makeEntry(
    ["bacana", "interessante", "massa", "maneiro", "agradável", "irado"],
    ["daora", "muito massa", "curti", "bem legal", "show", "top"],
    [
      "A ideia ficou daora.",
      "Pra papo mais leve, massa funciona demais.",
      "Interessante é uma troca mais neutra.",
      "Show entra fácil no uso real."
    ]
  ),
  chato: makeEntry(
    ["incômodo", "entediante", "arrastado", "irritante", "sem graça", "maçante"],
    ["mala", "pé no saco", "chatão", "sem brilho", "cansativo demais", "arrastadíssimo"],
    [
      "Esse processo tá um pé no saco.",
      "Pra conversa comum, mala funciona bem.",
      "Sem graça deixa a frase mais neutra.",
      "Maçante cabe bem em contexto profissional."
    ]
  ),
  falar: makeEntry(
    ["dizer", "comentar", "explicar", "afirmar", "soltar", "expressar"],
    ["trocar ideia", "mandar a real", "dar o papo", "abrir o jogo", "botar pra fora", "puxar assunto"],
    [
      "Melhor trocar ideia com calma.",
      "Se quiser um tom mais direto, manda a real.",
      "Comentar é uma versão mais neutra.",
      "Abrir o jogo entra natural na fala."
    ]
  ),
  ouvir: makeEntry(
    ["escutar", "acolher", "prestar atenção", "captar", "considerar", "dar ouvidos"],
    ["pescar", "dar atenção", "parar pra ouvir", "entrar no ouvido", "escutar de verdade"],
    [
      "Antes de responder, para pra ouvir.",
      "Dar atenção deixa a frase mais humana.",
      "Escutar é a troca mais direta.",
      "Pescar o clima funciona em papo coloquial."
    ]
  ),
  ver: makeEntry(
    ["notar", "perceber", "observar", "enxergar", "constatar", "identificar"],
    ["sacar", "bater o olho", "pegar de primeira", "notar de cara", "captar"],
    [
      "Bati o olho e saquei o problema.",
      "Perceber é uma troca mais neutra.",
      "No dia a dia, sacar funciona muito bem.",
      "Notar de cara deixa a frase mais viva."
    ]
  ),
  comer: makeEntry(
    ["alimentar", "almoçar", "jantar", "beliscar", "forrar o estômago", "fazer uma refeição"],
    ["fazer um rango", "mandar pra dentro", "dar uma forrada", "comer um negócio", "dar um trato na fome"],
    [
      "Bora fazer um rango antes da reunião.",
      "Dar uma forrada funciona bem no coloquial.",
      "Almoçar é a opção mais direta.",
      "Mandar pra dentro deixa a fala mais solta."
    ]
  ),
  beber: makeEntry(
    ["tomar", "ingerir", "bebericar", "dar um gole", "consumir"],
    ["virar", "molhar a palavra", "dar um gole", "tomar um negócio", "beber um trem"],
    [
      "Vamos dar um gole d'água e voltar.",
      "Pra frase falada, tomar funciona redondo.",
      "Molhar a palavra é mais brincalhão.",
      "Bebericar cabe bem em texto mais leve."
    ]
  ),
  ir: makeEntry(
    ["seguir", "partir", "comparecer", "deslocar", "encaminhar", "aparecer"],
    ["colar", "dar um pulo", "partiu", "bora lá", "aparecer por lá", "seguir nessa"],
    [
      "Depois eu colo aí.",
      "Dar um pulo deixa a frase bem humana.",
      "Comparecer é mais formal.",
      "Partiu entra fácil em tom leve."
    ]
  ),
  voltar: makeEntry(
    ["retornar", "regressar", "reaparecer", "vir de volta", "retomar"],
    ["dar as caras de novo", "voltar pra cena", "pintar de volta", "reaparecer por aqui"],
    [
      "Depois eu volto pra isso.",
      "Dar as caras de novo é mais coloquial.",
      "Retomar funciona bem em contexto de trabalho.",
      "Pintar de volta deixa a fala mais brasileira."
    ]
  ),
  trabalhar: makeEntry(
    ["produzir", "atuar", "executar", "operar", "ralar", "desenvolver"],
    ["tocar o trampo", "fazer o corre", "pegar no batente", "botar a mão", "correr atrás"],
    [
      "Hoje é dia de tocar o trampo.",
      "Fazer o corre funciona muito no dia a dia.",
      "Executar é uma troca mais profissional.",
      "Pegar no batente deixa a frase viva."
    ]
  ),
  descansar: makeEntry(
    ["pausar", "desligar", "recarregar", "respirar", "relaxar", "repousar"],
    ["dar um tempo", "dar uma respirada", "desligar um pouco", "baixar a bola", "parar pra recompor"],
    [
      "Agora eu vou dar uma respirada.",
      "Pra frase comum, dar um tempo funciona bem.",
      "Recarregar cabe em contexto de rotina.",
      "Desligar um pouco deixa o tom mais humano."
    ]
  ),
  dinheiro: makeEntry(
    ["grana", "recurso", "capital", "verba", "bufunfa", "cascalho", "dimdim"],
    ["a nota", "o caixa", "a bufunfa", "o bolso", "a verba curta", "a grana curta"],
    [
      "Hoje a grana tá curta.",
      "Verba funciona melhor em contexto de trabalho.",
      "Bufunfa deixa a frase mais brincalhona.",
      "Capital é uma versão mais técnica."
    ]
  ),
  problema: makeEntry(
    ["questão", "entrave", "impasse", "nó", "pepino", "desafio", "rolo"],
    ["B.O.", "pedra no caminho", "treta", "nó danado", "dor de cabeça", "embolado"],
    [
      "Isso aqui virou um B.O.",
      "Pepino funciona demais no uso real.",
      "Entrave é uma troca mais profissional.",
      "Dor de cabeça deixa a fala mais natural."
    ]
  ),
  solucao: makeEntry(
    ["saída", "resposta", "caminho", "destravamento", "alternativa", "resolução"],
    ["o jeito", "a boa", "a virada", "o pulo do gato", "a saída do jogo"],
    [
      "A boa aqui é simplificar.",
      "Saída funciona bem em qualquer contexto.",
      "Pulo do gato é mais coloquial.",
      "Destravamento cabe muito em produto."
    ]
  ),
  gostar: makeEntry(
    ["curtir", "apreciar", "valorizar", "preferir", "admirar", "se amarrar"],
    ["curtir muito", "se amarrar", "ter apego", "bater com", "ter carinho por"],
    [
      "Eu curti muito esse caminho.",
      "Se amarrar é bem brasileiro.",
      "Apreciar funciona melhor num tom mais limpo.",
      "Bater com entra bem em contexto pessoal."
    ]
  ),
  odiar: makeEntry(
    ["detestar", "rejeitar", "não suportar", "ter aversão", "aborrecer-se"],
    ["pegar ranço", "não descer", "não aguentar", "dar preguiça mortal", "bater mal"],
    [
      "Eu peguei ranço dessa tela.",
      "Detestar é a troca mais direta.",
      "Não desce é bem falado.",
      "Ter aversão funciona em tom mais técnico."
    ]
  ),
  estranho: makeEntry(
    ["esquisito", "incomum", "fora do tom", "peculiar", "deslocado"],
    ["esquisitão", "meio torto", "fora da curva", "com uma energia esquisita", "nada a ver"],
    [
      "Esse texto ficou meio torto.",
      "Esquisito é a troca mais direta.",
      "Nada a ver funciona em conversa casual.",
      "Fora do tom cabe muito bem em análise."
    ]
  ),
  importante: makeEntry(
    ["relevante", "essencial", "crucial", "determinante", "valioso", "central"],
    ["que pesa", "que muda o jogo", "de verdade", "que faz diferença", "que conta"],
    [
      "Isso aqui faz diferença de verdade.",
      "Relevante é a troca mais limpa.",
      "Muda o jogo deixa a frase mais viva.",
      "Essencial cabe bem em contexto estratégico."
    ]
  ),
  pequeno: makeEntry(
    ["miúdo", "compacto", "curto", "reduzido", "discreto", "mínimo"],
    ["pequenininho", "enxuto", "na medida", "mais contido", "bem curto"],
    [
      "Deixa isso mais enxuto.",
      "Compacto funciona num tom mais técnico.",
      "Na medida deixa a frase falada.",
      "Reduzido é uma opção mais neutra."
    ]
  ),
  grande: makeEntry(
    ["amplo", "enorme", "robusto", "expressivo", "vasto", "forte"],
    ["gigante", "graúdo", "de respeito", "bem grande", "parrudo"],
    [
      "Esse impacto foi gigante.",
      "Parrudo funciona muito no uso real.",
      "Robusto cabe bem em apresentação.",
      "De respeito deixa a frase mais viva."
    ]
  ),
  novo: makeEntry(
    ["recente", "inédito", "fresco", "atual", "renovado", "novinho"],
    ["saído do forno", "acabou de chegar", "novinho em folha", "zero bala"],
    [
      "Esse visual tá novinho em folha.",
      "Recente é a troca mais neutra.",
      "Saído do forno dá um tom mais humano.",
      "Zero bala entra bem em fala coloquial."
    ]
  ),
  velho: makeEntry(
    ["antigo", "datado", "envelhecido", "ultrapassado", "veterano", "clássico"],
    ["das antigas", "velha guarda", "com cheiro de passado", "já rodado", "antigão"],
    [
      "Esse repertório é das antigas.",
      "Ultrapassado funciona melhor em análise.",
      "Antigão deixa a fala mais natural.",
      "Datado cabe bem em avaliação de linguagem."
    ]
  ),
  medo: makeEntry(
    ["receio", "temor", "insegurança", "apreensão", "cautela", "frio na barriga"],
    ["pé atrás", "com receio", "travado", "meio cabreiro", "com um frio na barriga"],
    [
      "Fiquei com um pé atrás.",
      "Receio é uma troca mais limpa.",
      "Frio na barriga deixa a frase humana.",
      "Cabreiro funciona muito no coloquial."
    ]
  ),
  coragem: makeEntry(
    ["ousadia", "bravura", "firmeza", "disposição", "confiança", "ímpeto"],
    ["peito aberto", "ir pra cima", "sem pipocar", "na fibra", "com moral"],
    [
      "Agora é ir pra cima.",
      "Coragem funciona bem em qualquer tom.",
      "Sem pipocar deixa a frase mais viva.",
      "Firmeza é uma boa troca em fala real."
    ]
  ),
  bagunca: makeEntry(
    ["caos", "desorganização", "confusão", "zona", "embolado", "desordem"],
    ["um Deus nos acuda", "uma zona", "tudo embolado", "maior bagunça", "sem pé nem cabeça"],
    [
      "Isso aqui virou uma zona.",
      "Desorganização é uma troca mais neutra.",
      "Sem pé nem cabeça funciona muito em fala.",
      "Caos cabe bem em contexto dramático."
    ]
  ),
  organizar: makeEntry(
    ["estruturar", "arrumar", "ordenar", "alinhar", "sistematizar", "pôr em ordem"],
    ["botar de pé", "colocar nos trilhos", "ajeitar", "deixar redondo", "arrumar a casa"],
    [
      "Primeiro vamos arrumar a casa.",
      "Estruturar é uma troca mais técnica.",
      "Deixar redondo funciona muito bem no trabalho.",
      "Ajeitar deixa a fala mais brasileira."
    ]
  ),
  melhorar: makeEntry(
    ["aprimorar", "evoluir", "refinar", "fortalecer", "elevar", "otimizar"],
    ["subir a barra", "dar um tapa", "deixar mais redondo", "dar um ganho", "melhorar de verdade"],
    [
      "Dá pra subir a barra disso aqui.",
      "Aprimorar é a troca mais limpa.",
      "Dar um tapa funciona no coloquial.",
      "Refinar cabe muito em estética e texto."
    ]
  ),
  piorar: makeEntry(
    ["agravar", "complicar", "degradar", "cair", "desandar", "enfraquecer"],
    ["azedar", "desandar de vez", "ir ladeira abaixo", "dar ruim", "ficar pior ainda"],
    [
      "Se insistir nisso, vai dar ruim.",
      "Complicar é a troca mais neutra.",
      "Azedar deixa a frase mais falada.",
      "Desandar de vez funciona muito no cotidiano."
    ]
  ),
  errar: makeEntry(
    ["falhar", "equivocar-se", "vacilar", "tropeçar", "pisar na bola", "desalinhar"],
    ["dar mole", "vacilar feio", "comer bola", "pisar na bola", "se perder"],
    [
      "Aqui a gente deu mole.",
      "Vacilar é bem natural.",
      "Falhar é uma troca mais neutra.",
      "Pisar na bola entra fácil em fala real."
    ]
  ),
  acertar: makeEntry(
    ["mandar bem", "cravar", "acertar em cheio", "resolver", "afinar", "encaixar"],
    ["mandar muito bem", "bater no alvo", "cravar bonito", "entrar redondo", "virar a chave"],
    [
      "Dessa vez a gente mandou muito bem.",
      "Cravar bonito dá força sem soar duro.",
      "Acertar em cheio funciona super bem.",
      "Encaixar é uma troca ótima em trabalho criativo."
    ]
  ),
  vender: makeEntry(
    ["comercializar", "oferecer", "negociar", "convencer", "empurrar", "movimentar"],
    ["fazer girar", "botar pra rodar", "converter", "fazer sair", "puxar compra"],
    [
      "A ideia é fazer isso sair mais.",
      "Converter funciona melhor em marketing.",
      "Botar pra rodar deixa a fala mais solta.",
      "Oferecer é uma troca mais limpa."
    ]
  ),
  comprar: makeEntry(
    ["adquirir", "levar", "fechar", "consumir", "contratar", "pegar"],
    ["levar pra casa", "fechar a compra", "dar o aceite", "passar no caixa", "ir pra cima"],
    [
      "A pessoa foi lá e levou pra casa.",
      "Adquirir é a troca mais formal.",
      "Fechar a compra funciona bem em ecommerce.",
      "Pegar deixa a frase mais falada."
    ]
  ),
  convencer: makeEntry(
    ["persuadir", "ganhar", "engajar", "trazer junto", "fazer aderir", "comprovar"],
    ["virar a cabeça", "ganhar no argumento", "trazer pro jogo", "fazer comprar a ideia"],
    [
      "A comunicação precisa trazer a pessoa pro jogo.",
      "Persuadir é uma troca mais formal.",
      "Fazer comprar a ideia é bem falado.",
      "Engajar cabe melhor em contexto digital."
    ]
  ),
  criativo: makeEntry(
    ["inventivo", "original", "autorais", "imaginativo", "fora do óbvio", "ingenhoso"],
    ["com molho", "com borogodó", "com alguma graça", "com personalidade", "fora da caixa"],
    [
      "Essa saída tem borogodó.",
      "Original é a troca mais neutra.",
      "Com molho deixa a frase mais viva.",
      "Fora do óbvio cabe bem em avaliação criativa."
    ]
  ),
  estrategico: makeEntry(
    ["pensado", "inteligente", "bem amarrado", "direcionado", "consistente", "calculado"],
    ["com intenção", "com cabeça", "com leitura de jogo", "bem costurado"],
    [
      "Esse movimento foi bem costurado.",
      "Estratégico funciona, mas bem amarrado humaniza.",
      "Com leitura de jogo deixa a frase afiada.",
      "Pensado cabe super bem em contexto de marca."
    ]
  ),
  simples: makeEntry(
    ["claro", "direto", "descomplicado", "objetivo", "limpo", "fácil"],
    ["na lata", "sem enrolar", "reto", "de boa de entender", "na moral"],
    [
      "Fala isso de um jeito mais na lata.",
      "Direto é a troca mais neutra.",
      "Sem enrolar deixa a frase mais brasileira.",
      "Clareza entra redondo nesse contexto."
    ]
  ),
  complexo: makeEntry(
    ["difícil", "sofisticado", "multicamadas", "elaborado", "denso", "trabalhoso"],
    ["cheio de camada", "com muito detalhe", "cabeludo", "complicadinho", "mais pesado"],
    [
      "Esse tema é mais cabeludo.",
      "Complexo é a troca mais limpa.",
      "Cheio de camada deixa o tom mais humano.",
      "Denso funciona melhor em contexto intelectual."
    ]
  ),
  erro: makeEntry(
    ["falha", "deslize", "equívoco", "vacilo", "problema", "inconsistência"],
    ["bola fora", "vacilo", "escorregada", "mancada", "passada errada"],
    [
      "Isso aqui foi uma bola fora.",
      "Equívoco é uma troca mais neutra.",
      "Mancada deixa a fala mais coloquial.",
      "Falha cabe melhor em contexto técnico."
    ]
  ),
  ajuda: makeEntry(
    ["apoio", "suporte", "assistência", "mão", "reforço", "amparo"],
    ["dar uma força", "quebrar um galho", "chegar junto", "dar um help", "somar"],
    [
      "Você consegue me dar uma força nisso?",
      "Suporte é uma troca mais neutra.",
      "Chegar junto funciona demais na fala.",
      "Quebrar um galho é bem popular."
    ]
  ),
  agora: makeEntry(
    ["neste momento", "já", "imediatamente", "de imediato", "agora mesmo"],
    ["já já", "nesse instante", "agora mesmo", "na hora", "já"],
    [
      "Resolve isso na hora.",
      "Agora mesmo é uma troca direta.",
      "Já já muda um pouco o ritmo e o tempo.",
      "De imediato cabe em contexto mais formal."
    ]
  ),
  depois: makeEntry(
    ["mais tarde", "na sequência", "posteriormente", "em seguida", "depois disso"],
    ["daqui a pouco", "já já", "mais pra frente", "num outro momento"],
    [
      "A gente vê isso mais pra frente.",
      "Depois disso é uma troca mais linear.",
      "Daqui a pouco deixa a frase mais falada.",
      "Posteriormente cabe em contexto formal."
    ]
  ),
  forninho: makeEntry(
    ["descontrole", "caos", "colapso", "quebra", "pane", "desandou"],
    ["o forninho caiu", "deu ruim bonito", "foi pro espaço", "desandou tudo", "entrou em colapso"],
    [
      "Quando mudaram tudo de uma vez, o forninho caiu.",
      "Desandou tudo funciona bem como leitura coloquial.",
      "Colapso é a versão mais neutra.",
      "Deu ruim bonito mantém a energia popular."
    ]
  ),
  shippar: makeEntry(
    ["torcer por um casal", "imaginar juntos", "combinar romanticamente", "apoiar o par", "ver química"],
    ["shippar", "torcer pros dois", "comprar o casal", "apostar na química"],
    [
      "A internet começou a shippar os dois.",
      "Torcer pros dois traduz bem o uso.",
      "Ver química é uma variação natural.",
      "Comprar o casal funciona em tom de internet."
    ]
  ),
  cringe: makeEntry(
    ["constrangedor", "cafona", "vergonhoso", "forçado", "sem timing"],
    ["cringe", "vergonha alheia", "cafona de doer", "forçadão", "travado demais"],
    [
      "Esse discurso ficou cringe.",
      "Vergonha alheia traduz muito bem.",
      "Cafona funciona como troca mais clássica.",
      "Forçado demais entra bem em análise de linguagem."
    ]
  ),
  sextou: makeEntry(
    ["chegou a sexta", "fim de semana batendo", "clima de sexta", "sexta chegou"],
    ["sextou", "chegou a sexta", "partiu fim de semana", "clima de sexta"],
    [
      "Bateu cinco da tarde e a galera já mandou um sextou.",
      "Clima de sexta traduz bem o espírito.",
      "Partiu fim de semana é uma variação natural.",
      "Chegou a sexta é a versão mais limpa."
    ]
  ),
  sabor: makeEntry(
    ["vibe", "camada", "charme", "personalidade", "graça", "tempero"],
    ["tem sabor", "tem molho", "tem borogodó", "tem um tchan", "tem presença"],
    [
      "Essa ideia tem molho.",
      "Borogodó funciona muito bem nesse campo.",
      "Charme é uma troca mais clássica.",
      "Tem um tchan deixa a frase bem falada."
    ]
  ),
  calabreso: makeEntry(
    ["brincadeira apelativa", "chamada caricata", "apelido debochado", "zoeira sonora"],
    ["calabreso", "zoeira de apelido", "brincadeira de som", "chamada engraçadinha"],
    [
      "Ali entrou como zoeira de apelido, tipo calabreso.",
      "Brincadeira de som explica o uso com mais clareza.",
      "Apelido debochado funciona como tradução neutra.",
      "Chamada caricata cabe em análise cultural."
    ]
  ),
  chocado: makeEntry(
    ["surpreso", "espantado", "passado", "em choque", "perplexo"],
    ["gag de chocado", "passado real", "sem acreditar", "em choque total"],
    [
      "Ele ficou passado real com a notícia.",
      "Em choque total mantém o efeito.",
      "Perplexo é a opção mais formal.",
      "Sem acreditar funciona super bem no uso real."
    ]
  ),
  meme: makeEntry(
    ["piada recorrente", "referência de internet", "piada viral", "código cultural"],
    ["meme", "piada de internet", "referência que todo mundo pesca", "brincadeira viral"],
    [
      "Isso aqui virou meme em dois minutos.",
      "Referência de internet traduz bem.",
      "Código cultural funciona em análise.",
      "Brincadeira viral mantém o sentido."
    ]
  )
};

export const PHRASE_REPLACEMENTS = {
  quero: ["queria", "desejo", "busco", "tô querendo"],
  preciso: ["necessito", "tenho que", "tô precisando", "preciso mesmo"],
  muito: ["demais", "bastante", "bem", "pra caramba"],
  pouco: ["bem pouco", "quase nada", "um tiquinho", "um pouco"],
  bom: ["ótimo", "forte", "redondo", "bacana"],
  ruim: ["fraco", "zoado", "meia boca", "problemático"],
  bonito: ["estiloso", "chave", "elegante", "bonito mesmo"],
  feio: ["esquisito", "capenga", "sem sal", "malfeito"],
  feliz: ["contente", "animado", "felizão", "de boaça"],
  triste: ["pra baixo", "jururu", "abatido", "na bad"],
  rapido: ["ligeiro", "voando", "na hora", "rápido"],
  lento: ["devagar", "travado", "morno", "arrastado"],
  falar: ["comentar", "dizer", "trocar ideia", "explicar"],
  ver: ["notar", "perceber", "sacar", "observar"],
  fazer: ["montar", "criar", "tocar", "fazer"],
  trabalhar: ["ralar", "produzir", "atuar", "tocar o trampo"],
  descansar: ["pausar", "relaxar", "recarregar", "dar um tempo"],
  problema: ["pepino", "rolo", "impasse", "questão"],
  solução: ["saída", "jeito", "resposta", "caminho"],
  agora: ["já", "agora mesmo", "na hora", "nesse instante"],
  depois: ["mais tarde", "na sequência", "mais pra frente", "depois"],
  gente: ["pessoal", "galera", "turma", "todo mundo"],
  pessoa: ["alguém", "gente", "pessoal", "quem tá aí"],
  comprar: ["adquirir", "levar", "fechar", "pegar"],
  vender: ["oferecer", "converter", "negociar", "fazer sair"],
  melhorar: ["aprimorar", "refinar", "evoluir", "fortalecer"],
  errado: ["torto", "zoado", "fora do tom", "equivocado"],
  certo: ["redondo", "alinhado", "cravado", "correto"]
};

export function removeDiacritics(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function normalizeKey(value = "") {
  return removeDiacritics(String(value).trim().toLowerCase());
}

for (const key of Object.keys(WORD_DATA)) {
  if (!WORD_DATA[key]?.synonyms?.length && !WORD_DATA[key]?.expressions?.length && !WORD_DATA[key]?.constructions?.length) {
    delete WORD_DATA[key];
  }
}
