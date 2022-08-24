"use strict";
var contentData = // jshint ignore:line
{
  "vertices-and-edges": {

    "content-title": "Vértices e Arestas",

    "theory-content": "<div><span style: 'whitespace: nowrap'>Um Grafo é uma coleção de vértices<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><circle cx='15' cy='15' r='10' fill='#1f77b4'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><circle cx='15' cy='15' r='10' fill='#ff7f0e'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 4; position:relative'><g><circle cx='15' cy='15' r='10' fill='#2ca02c'/></g></svg><\/span><span style: 'whitespace: nowrap'>conectados por arestas<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'>.  Nós Denotamos o conjunto de todos os vértices por \\(V\\) e o conjunto de todas as arestas por \\(E\\).<\/p><p>Entendeu? Agora em termos simples: Um grafo tem duas componentes - um <b>conjunto de vértices<\/b> \\(V\\) e um <b>conjunto de arestas<\/b> \\(E\\), onde uma aresta é algo que atua como um elo entre dois vértices.<\/p><p>Se uma aresta conecta dois vértices \\(v_1\\) e \\(v_2\\), então nós denotamos esta aresta por \\(v_1v_2\\), que é igual a \\(v_2v_1\\).<\/p><p>Dois vértices são ditos <b>adjacentes<\/b> se eles estão conecatados por uma aresta.<\/p><p>Agora leia as instruções abaixo e crie o seu próprio grafo. Você verá os conjuntos correspondentes \\(V\\) e \\(E\\) abaixo da área do grafo. Comece brincando e se famialiarize com as notações dos conjuntos.<\/span><\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "index.html",
    "next": "?order-and-size",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "order-and-size": {

    "content-title": "Ordem e Tamanho de um Grafo",

    "theory-content": "<p>A <b>ordem <\/b> de um grafo é o número de vértices de que ele possui.<\/p> <p>O <b>tamanho <\/b> de um grafo é o número de arestas que ele possui.<\/p><p> Crie alguns grafos e observe sua ordem e tamanho. Faça isso por um tempo para se acostumar com os termos. <\/p><p> Agora limpe o grafo e insira um determinado número de vértices (digamos \\(n\\)). Tente alcançar o tamanho máximo com esses vértices. Tente isso para diferentes valores de \\(n\\). <\/p><p> Percebeu alguma coisa? Qual é o tamanho máximo possível para um grafo de ordem \\(n\\)? <\/p><div class=\"hint\"> <span class=\"hint-word\">Dica: <\/span> O tamamho máximo é alcançado quando todos os vértices estão conectados uns aos outros. <\/div><p> A resposta está abaixo. Não, não veja ainda. Limpe o grafo e tente algumas vezes. <\/p><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">Mostrar resposta<\/span> <div class=\"toggle-content\"> <p> A resposta é \\(\\frac{n(n-1)}{2}\\). <\/p><p> Mas por quê? Porque o número máximo de arestas que você pode desenhar é o mesmo que o número de maneiras que você pode selecionar dois vértices. <\/p><p> Então vamos slecionar o primeiro vértice e chamá-lo  de \\(a\\). Nós podemos selecionar \\(a\\) de \\(n\\) formas. Para selecionar o outro vértice, ficamos com \\(n-1\\) vertices. Logo, nós podemos selecionar dois vértices de \\(n(n-1)\\) formas, certo? <\/p><p> Não, pois contamos duas vezes. E se \\(b\\) fosse a primeira seleção e \\(a\\) a outra? Entendeu? Lembre que \\(ab\\) e \\(ba\\) representam a mesma aresta. <\/p><p> Por isso, nós dividimos por \\(2\\) e obtemos \\(\\frac{n(n-1)}{2}\\) como a resposta. <\/p><\/div><\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?vertices-and-edges",
    "next": "?degree-of-vertex",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "degree-of-vertex": {

    "content-title": "Grau de um Vértice",

    "theory-content": "<p>O <b>grau<\/b> de um vértice é o números de arestas incidentes a ele. Ele nos diz quantos outros vértices são adjacentes a esse vértice.<\/p><p>No diagrama, cada vértice está rotulado com o seu grau. Faça algumas mudanças e veja como o grau dos vértices muda. <\/p><p>O grau de um vértice \\(v\\) é denotado por \\(deg(v)\\). Os vértices com \\(deg(v)=0\\) são lobos solitários &mdash; sem relação com nenhum outro. Nós temos um nome especial para eles. <\/p><p> Os vértices que possuem <b>grau zero<\/b> são denominados <b>vértices isolados.<\/b> Eles não tem nenhum outro vértice conectado a eles. <\/p><p> O grau mínimo de um grafo \\(G\\) é denotado por \\(\\delta(G)\\). E o grau máximo por \\(\\Delta(G)\\). Para evitar confusão entre eles, lembre que \\(\\delta\\) é o \"delta pequeno\" e \\(\\Delta\\) é o \"delta grande\". <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> Lemre que \\(\\delta\\) e \\(\\Delta\\) são propriedados de um grafo, enquanto \\(deg\\) é propriedade de um vértice. <\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?order-and-size",
    "next": "?degree-sequence",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "degree-sequence": {

    "content-title": "Sequência de Graus de um Grafo",

    "theory-content": "<p>A <b>Sequência de graus<\/b> de um grafo é uma lista dos graus de todos os seus vértices. Normalmente, nós listamos os graus em <b>ordem decrescente<\/b>, do maior grau ao menor. <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> A sequência de graus é sempre decrescente. Assim, todo grafo tem uma <b>única sequência de graus.<\/b> <\/div><p> No Diagrama, o texto dentro de cada vértice diz o seu grau. Desenhe algums grafos do seu interesse e veja suas sequências de graus. <\/p><p> Você notará que a soma da sequência de graus é sempre dobro do tamanho do grafo. Isto é, na verdade, um resultado matemático demonstrado (teorema). <\/p><div class=\"result\"> <span class=\"result-word\">Teorema:<\/span> A soma dos graus de todos os vértices de um grafo é dobro do tamanho do grafo. <p> Matematicamente, \\[\\sum deg(v_i)=2|E|\\] onde, \\(|E|\\) representa o número de arestas no grafo (tamanho do grafo). <\/p><\/div><p> O raciocínio por trás desse resultado é bastante simples. Uma aresta é uma conexão entre dois vértices. Então cada aresta contribui exatamente \\(2\\) vezes para a soma dos graus. E por isso, o a soma dos graus deve ser dobro do número de arestas. <\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?degree-of-vertex",
    "next": "?graphic-sequence",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "graphic-sequence": {

    "content-title": "Sequência Gráfica",

    "theory-content": "<p>Uma sequência de números é dita <b>sequência gráfica<\/b> se nós podemos construir um grafo tendo essa sequência como sua sequência de graus. <\/p><p> Ok, isso foi um pouco confuso. Então, novamente, o que é uma sequência gráfica? <\/p><p> Digamos que você tenha uma lista de números e atribui cada número a um vértice isolado. Você pode conectar esses vértices de forma que cada vértice seja adjacente a uma quantidade de vértices igual ao número que foi atribuito a ele? Se sim, então a lista de números é uma sequência gráfica. Caso, contrário, não. As coisas vão ficar claras com os exemplos a seguir. <\/p><p> <b>Exemplo 1:<\/b> A sequência \\((3,3,2,1,1,0)\\) é gráfica. No diagrama, você pode ver que os vétrices possuem tanto seus números como graus. Perceba que a sequência continua gráfica mesmo se você remover o \\(0\\). <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> Uma sequência contendo apenas zeros é sempre gráfica. <\/div><p> <b>Exemplo 2:<\/b> A sequência \\((4,3,2,1)\\) não é gráfica. Nós precisamos de pelo menos quatro outros vértices para satisfazer o grau do vértice tendo \\(4\\) como seu grau. Mas, nós temos apenas três. <\/p><p> <b>Exemplo 3:<\/b> The sequence \\((4,3,3,2,2,1)\\) não é um gráfica. Recorde que a soma dos graus é <b>twice<\/b> do número de arestas. Então, a soma de uma sequência grágica deve ser par. Não é este o caso aqui. <\/p><p> As sequencia seguintes são gráficas. Tente desenhar um grafo para cada uma delas. Você pode ver a resposta clicando no link ao lado delas. <\/p><p> \\((5,1,1,1,1,1)\\) <span class=\"graph-event-link\" id=\"prob0\"> Mostrar resposta<\/span> <\/p><p> \\((2,2,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob1\"> Mostrar resposta<\/span> <\/p><p> \\((4,4,4,4,4,0)\\) <span class=\"graph-event-link\" id=\"prob2\"> Mostrar resposta<\/span> <\/p><p> \\((3,3,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob3\"> Mostrar resposta<\/span> <\/p><p> \\((5,3,3,3,2,2)\\) <span class=\"graph-event-link\" id=\"prob4\"> Mostrar resposta<\/span> <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> Um grafo tem uma única sequência de graus. Contudo, mais de 1 grafo diferente pode ser possível para a mesma sequência gráfica. <\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?degree-sequence",
    "next": "?havel-hakimi",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "havel-hakimi": {

    "content-title": "Havel-Hakimi Algorithm",

    "theory-content": "<p>It is a difficult task to determine whether a sequence is graphic or not. The Havel-Hakimi Theorem makes the task a lot easier. <\/p><p>Go through the theorem or you can skip it and jump on to the algorithm at the bottom.<\/p><div class=\"result\"> <span class=\"result-word\">Havel-Hakimi Th: <\/span> The nonincreasing sequence \\[(d_1, d_2, ..., d_n)\\] is graphic if and only if the sequence \\[ (d_2-1, d_3-1, ..., d_{d_1+1}-1, \\\\d_{d_1+2}, d_{d_1+3}, ..., d_n) \\] is also graphic. <\/div><p> See how the second sequence was built? The first sequence was nonincreasing, which means the highest degree in it is \\(d_1\\). We took the vertex having highest degree (\\(d_1\\)) and connected it to next \\(d_1\\) vertices with highest degrees. In the new degree sequence, we have exhausted first term of the previous sequence and decreased next \\(d_1\\) terms by one.<\/p><p> Now, the theorem says that either both the sequences are graphic or both are non-graphic. We can again apply the theorem on the new sequence to obtain yet another sequence. We can repeat this process till the problem reduces to an easy one. Thus all of the sequences obtained in this process will be graphic or none them would be.<\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> The sequence obtained after applying theorem might not be nonincreasing. In such a case, you will have to rearrange it in nonincreasing order before re-applying the theorem. <\/div><p> You can check this <a href=\"https:\/\/en.wikipedia.org\/wiki\/Havel%E2%80%93Hakimi_algorithm\" target=\"_blank\">Wikipedia link<\/a> for more information. You can search the internet for proof of the theorem. <\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span> A sequence with all zeroes is graphic since we can always draw that many isolated vertices.<\/div><p>Your task now is to draw a graph for the each of the given graphic sequences. For this task, you can <b>use the following algorithm<\/b> which is based on the above theorem.<\/p><div class=\"result\"> <span class=\"result-word\">Algorithm: <\/span> <p><\/p><ol> <li>Pick the vertex with highest target degree. Lets call this value \\(k\\).<\/li><li>Connect this vertex to next \\(k\\) vertices having highest degree. Now this vertex has been exhausted.<\/li><li>Repeat steps 1 and 2 till you exhaust all the vertices.<\/li><li>If all the vertices get exhausted, then the sequence has reduced to all zeroes and hence the sequence is graphic.<\/li><li>If you end up with non-zero vertices that can't be exhausted further, then the sequence isn't graphic.<\/li><\/ol> <\/div><p>It is guaranteed that all the sequences in this exercise are graphic.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete an edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-edges\" class=\"btn btn-default\">Reset Edges<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><li><a>11<\/a><\/li><li><a>12<\/a><\/li><\/ul> <\/div>",

    "prev": "?graphic-sequence",
    "next": "?pigeonhole",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "pigeonhole": {

    "content-title": "Princípio da Casa dos Pombos",

    "theory-content": "<p> O princípio da casa dos pombos é muito simples e intuitivo, mas suas aplicações em matemática discreta são supreendentemente frquentes. <\/p><div class=\"result\"> <span class=\"result-word\">Princípio da Casa dos Pombos: <\/span> Se nós colocarmos \\(n\\) pombos em menos que \\(n\\) casas, então pelo menos uma casa contém mais que um pombo. <\/div><p> Você pode trocar <i>pombos<\/i> por <i>itens<\/i> e <i>casas<\/i> por <i>caixas<\/i>. Assim, o princípio nos diz que se nós temos mais item e menos caixas, e distribuírmos todos os itens nessas caixas, então pelo menos uma caixa terá mais de um item.<\/p><p> A parte difícil é aplicar esse teorema. Você terá que decidir quais objetos representam seus pombos e casas. <\/p><p> <b>Example 1: <\/b> Você já percebeu que existem apenas 10 cores diferentes de vétices nessas aulas? Assim, se existem mais que dez vértices no grafo, então existe pelo menos um par de vértices tendo a mesma cor!! Veja você mesmo. As 10 cores podem ser pensandas como as 10 casas. E cada vértice como um pombo. <\/p><div class=\"result\"> <span class=\"result-word\">Teorema: <\/span> Em qualquer grafo que possua mais de um vértice, existe pelo menos um par de vértices tendo o mesmo grau. <\/div><p> Isso significa que você não pode ter um grafo de \\(ordem \\geq 2\\) com todos os graus distintos. Algum grau irá se repetir certamente. Veja isto você mesmo desenhando um grafo de \\(ordem \\geq 2\\).<\/p><p>Mas por que isso acontece? Tente chegar a uma explicação. Você pode se ajudar tantando desenhar um grafo com todos os vértices tendo graus distintos. <\/p><div class=\"hint\"> <span class=\"hint-word\">Dica: <\/span> Assuma \\(ordem=n\\) e pense sobre o intervalo de valores de um grau em termos de \\(n\\). <\/div><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">Mostrar Resposta<\/span> <div class=\"toggle-content\"> <p> Assuma que nosso grafo tem \\(ordem=n\\). Um vértice pode ser conectado a, no máximo, \\(n-1\\) outros vértices. Assim, \\(0 \\leq deg(v_i) \\leq n-1\\). <\/p><p> Para nossos \\(n\\) vértices, existem \\(n\\) escolhas para grau (de \\(0\\) a \\(n-1\\)). Logo, se nós considerarmos graus distintos como as casas e os vertices como pombos, n graus distintos não deveriam ser possíveis então? <\/p><p> Não. Nossas futuras observações revelam o motivo. <\/p><p> Perceba que em um grafo de ordem \\(n\\), vértices com graus \\(0\\) e \\(n-1\\) não podem existir simultaneamente. <\/p><p> Se existir um vértice com grau \\(0\\), significa que existe um vértice que não é conectado a todos os outros vértices. Consequentemente, um vértice não pode ser conectado a todos os \\(n-1\\) outros vértices. Assim, nõs temos \\(0 \\leq deg(v_i) \\leq n-2\\) neste caso. <\/p><p> Se não existe um vértice com grau \\(0\\), então nós temos \\(1 \\leq deg(v_i) \\leq n-1\\) neste caso. <\/p><p> Em ambos os casos, nós temos \\(n\\) vértices (pombos), mas apenas \\(n-1\\) possíveis graus (casas). Assim, nós temos temos certeza que há uma casa (grau) com mais que um pombo (vértice). <\/p><\/div><\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?havel-hakimi",
    "next": "?regular-graph",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "regular-graph": {

    "content-title": "Grafo Regular",

    "theory-content": "<p> Um grafo em que todos os vértices tem o mesmo grau é chamado de <b>grafo regular<\/b>. <\/p><p> Um grafo regular onde o grau de cada vértice é \\(k\\) é denominado \\(k\\mbox{-}regular\\). <\/p><p> O diagrama mostra um grafo \\(3\\mbox{-}regular\\) de ordem \\(6\\). <\/p><p>Tente construir os seguintes grafos regulares.<\/p><p>\\(1\\mbox{-}regular\\) de ordem \\(2\\)<\/p><p>\\(1\\mbox{-}regular\\) de ordem \\(6\\)<\/p><p>\\(2\\mbox{-}regular\\) de ordem \\(3\\)<\/p><p>\\(2\\mbox{-}regular\\) de ordem \\(5\\)<\/p><p>\\(4\\mbox{-}regular\\) de ordem \\(5\\)<\/p><p>\\(4\\mbox{-}regular\\) de ordem \\(6\\)<\/p><p>\\(4\\mbox{-}regular\\) de ordem \\(7\\)<\/p><p>\\(5\\mbox{-}regular\\) de ordem \\(6\\)<\/p><p> A soluções para esses problemas não são fornecidads. Você deve ser capapz de resolvê-los por si próprio. Se você se deparar com alguma difucldade ao desenhar os grafos, você pode ver a dica dada abaixo. Mas você deve tentar primeiro. <\/p><div class=\"hint toggle-container\"> <span class=\"toggle-link target-hidden\">Mostrar dica<\/span> <div class=\"toggle-content\"> <span class=\"hint-word\">Dica: <\/span> Econtre a sequência de graus do grafo regular. Então use Havel-Hakimi para construir o grafo. Note que o texto no vértice representa seu grau. <\/div><\/div><p> Agora, uma pequena tarefa para você. Ecnontre o número de arestas em um grafo \\(k\\mbox{-}regular\\) de ordem \\(n\\). Comece construindo e observando grafos regulares de ordem pequena Caso você não consiga, a resposta está a seguir. <\/p><div class=\"result toggle-container\"> <span class=\"toggle-link target-hidden\">Mostrar reposta<\/span> <div class=\"toggle-content\"> \\[|E|=\\frac{nk}{2}\\] Isto é derivado do fato que a soma dos graus é o dobro do número de arestas. \\[\\sum deg(v_i)=2|E|\\] Aqui a soma dos graus é \\(nk\\). <br>Nós também podemos ver que a soma dos graus (\\(nk\\)) será um número ímpar quando ambos \\(n\\) e \\(k\\) forem ímpares. Nós não podemos ter o número de arestas como um número fracionário e, portanto, um grafo regular com \\(n\\) e \\(k\\) ímapres não pode existir. <\/div><\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?pigeonhole",
    "next": "?complete-graph",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "complete-graph": {

    "content-title": "Grafo Completo",

    "theory-content": "<p> Um grafo em que cada vértice é conectado a todo outro vértice é chamado <b>Grafo Completo<\/b>. <\/p><p> Note que o grau de cada vértice será \\(n-1\\), onde \\(n\\) é a ordem do grafo. <\/p><p> Assim, nós podemos dizer que um grafo completo de ordem \\(n\\) é nada mais que um grafo \\((n-1)\\mbox{-}regular\\) de ordem \\(n\\). <\/p><p>Um grafo completo de ordem \\(n\\) é denotado por \\(K_n\\).<\/p><p> O diagrama mostra um grafo completo de ordem \\(5\\). <\/p><p> Desenhe alguns grafos completos de seu interesse e observe o número de arestas. <\/p><p> Talvez você tenha observado que o número de arestas em um grafo completo é \\(\\frac{n(n-1)}{2}\\). Esse é tamanho máximo possível para um grafo de ordem \\(n\\), como você aprendeu em <a href=\"?order-and-size\">Tamanho e Ordem<\/a>. <\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?regular-graph",
    "next": "?bipartite",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "bipartite": {

    "content-title": "Grafo bipartido",

    "theory-content": "<p> Um grafo é dito <b>bipartido<\/b> se nós podemos dividir seu conjunto de vértices em dois conjuntos disjuntos tal que não existe aresta entre vértices pertencentes ao mesmo conjunto. <\/p><p>Vamos por partes.<\/p><p> Aqui nós estamos dividindo o conjunto de vértices em dois grupos (ou conjuntos). Cada vértice vai ficar em um desses grupos. Isso é como rotular cada vértice ou em A ou em B. <\/p><p> Cada vértice tem apenas um rótulo. Assim os dois conuntos são <b>disjuntos<\/b>, ou seja, o dois conjuntos não possuem nenhum vértice em comum. <\/p><p> E toda aresta está entre dois vértices pertencentes a diferentes conjuntos &mdash; um rotulado como A e outro como B. <\/p><p> Assim, se nos podemos rotular nossos vértices de tal maneira, então o grafo é bipartido. Caso contrário, não. <\/p><p> Desenhe alguns grafos do seu interesse para entender melhor isso. <\/p><p> Para um grafo bipartido, os vértices do conjunto \\(A\\) e \\(B\\) são nas cores laranja e verde, respectivamente. Se ele não for biaprtido, os vértices terão as cores usuais. <\/p><div class=\"note\"> <span class=\"note-word\">Nota: <\/span> Vértices isolados não influenciam se o grafo é bipartido ou não. Eles podem ser ignorados. <\/div><p> Vértices isolados estão coloridos em cinza para mostrar que esses vértices são ignorados. Nós podemos colocá-los aleatoriamente em qualquer conjunto, e nosso grafo ainda seria bipartido (ou não bipartido). <\/p><p> Você estava prestando atenção na soma dos graus dos dois conjuntos?<\/p><div class=\"result\"> <span class=\"result-word\">Teorema: <\/span>Em um grafo bipartido, a soma dos graus dos vértices de cada conjunto é igual ao número de arestas. \\[\\sum_{v \\in A}deg(v)=\\sum_{v \\in B}deg(v)=|E|\\] <\/div><p>Por que isso é verdade? Tente racionionar você mesmo.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?complete-graph",
    "next": "?complete-bipartite",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "complete-bipartite": {

    "content-title": "Grafo Bipartido Completo",

    "theory-content": "<p> <b>Bipartido completo<\/b> é um tipo especial de <a href=\"?bipartite\">grafo bipartido<\/a> onde cada vértice de um conjunto é conectado a todo outro vértice do outro conjunto. <\/p><p> O diagrama mostra uma grafo bipartido completo onde o conjunto \\(A\\) (colorido em laranja) consiste em \\(2\\) vértices e o conjunto \\(B\\) (colorido em verde) consiste em \\(3\\) vertices. Note que cada vértice laranja se conecta a todos os verdes e vice-versa. <\/p><p> Se os dois conjuntos tem \\(p\\) e \\(q\\) vértices, então nós denotamos o grafo bipartido completo por \\(K_{p,q}\\). <\/p><div class=\"note\"> <span class=\"note-word\">Nota: <\/span> Não confuda a notação \\(K_{p,q}\\) por \\(K_n\\). O primeiro é usado para grafo bipartido completo, e o último denota um <a href=\"?complete-graph\">um grafo completo<\/a>. Ambos são diferentes. <\/div><div class=\"result\"> <span class=\"result-word\">Propriedades: <\/span> Os seguintes resultados são verdade para um grafo bipartido completo \\(K_{p,q}\\). <p><\/p><ul> <li>A ordem do grafo é \\(|V|=p+q\\).<\/li><li>O tamnho do grafo é \\(|E|=pq\\).<br>Isto pode ser usado para verificar se um grafo bipartido é completo ou não.<\/li><li>A <a href=\"?degree-seqeunce\">sequência de graus<\/a> é \\((p,p,...,p,q,...,q)\\) onde \\(p\\) se repete \\(q\\) vezes e \\(q\\) se repete \\(p\\) vezes, assumindo que \\(p>q\\).<\/li><\/ul> <\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo</button>",

    "svg-output": "",

    "prev": "?bipartite",
    "next": "?walk",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "walk": {

    "content-title": "Passeio",

    "theory-content": "<p>Um <b>passeio<\/b> é uma sequência de vértices adjacentes (or arestas) em um grafo.<\/p><p> Você pode pensar os vértices como cidades e as arestas como estradas contectando-as. Comece em uma cidade e viaje para outras cidades. Então a rota pela qual você viajou pode ser chamada de \"passeio\". <\/p><p> Para descrever unicamente a rota, você tem que listar as cidades e as estradas que você passou em ordem. Essa é a idea de um passeio. <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> Você não pode simplesmente listar vértices (ou arestas) aleatoriamente e chamar isso de passeio. Um vértice subsequente deve ser adjacente ao anterior. <\/div><p> Enquanto viajava pelas cidades, talvez você tenha revisitado algumas cidades e talvez tanha viajado pela mesma estrada mais de uma vez. <\/p><p> Analogamente, em um passeio você pode repetir os vértices e arestas. <\/p><div class=\"note\"> <span class=\"note-word\">Nota:<\/span> Um passeio pode conter vértices e arestas mais de uma vez. Contudo, neste app você não poderá adicionar a mesma aresta de novo no passeio. <\/div><p>O número de arestas em um passeio é chamado de <b>comprimento<\/b> do passeio. Isso é  um menos o número de vértices no passeio. Arestas (ou vértices) repetidos são contados cada vez que aparecerem no passeio.<\/p><p> Leia as intruções abaixo e cria alguns passeios do seu interesse. Faça isso até você entender o que é um passeio. <\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <li>Para começar um passeio, clique em uma aresta qualquer.<\/li><li>O <span style=\"background-color: #ff0; padding: 2px;\">primeiro<\/span> e <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértices do passeio tem bordas coloridas.<\/li><li>Para adicionar uma próxima aresta ao passeio, clique em uma aresta incidente ao <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértice do passeio.<\/li><li>A <span style=\"background-color: #8f3; padding: 2px;\">última<\/span> aresta no passeio pode ser removida clicando novamente nela.<\/li><li>Você não poderá deletar vértices\/arestas que são partes do passeio.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Limpar Passeio<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Passeio Inverso<\/button>",

    "svg-output": "",

    "prev": "?complete-bipartite",
    "next": "?open-vs-closed",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "open-vs-closed": {

    "content-title": "Pesseios Fechados e Abertos",

    "theory-content": "<p>Esta aula descreve alguns tipos especiais de passeios. Se familirize com eles e faça alguns testes. Mas observe que as terminologias seguintes podem diferir das do seu livro.<\/p><p>Um passeio é dito <b>aberto<\/b> se o primeiro e o último vértice são diferentes, ou seja, os vértices dos extremos são distintos.<\/p><p>Um passeio é dito <b>fechado<\/b> se o primeiro e o último vértices são o mesmo. Isso significa que você começa e termina o passeio no mesmo vértice.<\/p><p>Antes de prosseguir, tente desenhar passeios abertos e fechados para entendê-los melhor. Abaixo estão mais alguns termos que você precisa conhecer.<\/p><p>Uma <b>Trilha<\/b> é um passeio aberto onde vértices podem ser repetidos, mas não arestas.<\/p><p>Um <b>Caminho<\/b> é um passeio aberto sem repetição de vértices e arestas.<\/p><p>Se você construir uma trilha (ou caminho) coincidindo os vértices extremos, então o que você terá no final é chamado de circuito (ou ciclo).<\/p><p>Um <b>Circuito<\/b> é um passeio fechado onde vértices podem ser repetidos, mas não arestas.<\/p><p>Um <b>Ciclo<\/b> é um passeio fechado onde nem arestas nem vértices podem ser repetidos. Mas, uma vez que ele é fechado, o primeiro e o último vértice são os mesmos (uma repetição).<\/p><p>É fácil confundir esses termos. Então faça alguns testes até se sentir confortável. Lembre que você não podera repetir repetir arestas no app.<\/p><div class=\"note\"> <span class=\"note-word\">Nota: <\/span> Um caminho é um tipo especial de trilha onde vértices não podem ser repetidos. Similarmente, um ciclo é um tipo especial de circuito. <\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <li>Para começar um passeio, clique em uma aresta qualquer.<\/li><li>O <span style=\"background-color: #ff0; padding: 2px;\">primeiro<\/span> e <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértices do passeio tem bordas coloridas.<\/li><li>Para adicionar uma próxima aresta ao passeio, clique em uma aresta incidente ao <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértice do passeio.<\/li><li>A <span style=\"background-color: #8f3; padding: 2px;\">última<\/span> aresta no passeio pode ser removida clicando novamente nela.<\/li><li>Você não poderá deletar vértices\/arestas que são partes do passeio.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Limpar Passeio<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Passeio Inverso<\/button>",

    "svg-output": "",

    "prev": "?walk",
    "next": "?connectivity",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "connectivity": {

    "content-title": "Conectividade",

    "theory-content": "<p> Um grafo é dito <b>conexo<\/b> se um caminho pode ser desenhado entre quaisquer dois dos seus vértices. Caso contrário, ele é chamado <b>desconexo<\/b>.<\/p><p>Cada subgrafo conexo máximal é chamado de <b>componente conexa<\/b> ou apenas <b>componente<\/b> do grafo.<\/p><p>Uma vez que uma componente é conexa maximal:<\/p><ul> <li>Nenhum caminho pode ser desenhado entre um vértice externo e qualquer vértice da componente.<\/li><li>Existe um caminho para todo vértice da componente a outro vértice da componente.<\/li><\/ul> <div class=\"note\"> <span class=\"note-word\">Nota: <\/span> Um <b>vértice isolado é uma componente<\/b> no sentindo que não existe um vértice na componente que não é conectado a ele; e não há vertices externos conectados a ele. <\/div><p>O diagrama mostra um grafo desconexo tendo 2 componentes - azul e laranja.<\/p><p>Desenhe alguns grafos do seu interesse e se familiarize com os termos. Cada componente téra sua própria cor.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>Para adicionar um vértice dê um <b>clique esquerdo<\/b> no espaço em branco.<\/li><li>Para adicionar uma aresta <b>arraste<\/b> um vértice para o outro.<\/li><li>Para deletar um vértice\/aresta dê um <b>cliquê direito<\/b> nele.<\/li><li> Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li> <li>Para começar um passeio, clique em uma aresta qualquer.<\/li><li>O <span style=\"background-color: #ff0; padding: 2px;\">primeiro<\/span> e <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértices do passeio tem bordas coloridas.<\/li><li>Para adicionar uma próxima aresta ao passeio, clique em uma aresta incidente ao <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértice do passeio.<\/li><li>A <span style=\"background-color: #8f3; padding: 2px;\">última<\/span> aresta no passeio pode ser removida clicando novamente nela.<\/li><li>Você não poderá deletar vértices\/arestas que são partes do passeio.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Limpar Passeio<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Passeio Inverso<\/button>",

    "svg-output": "",

    "prev": "?open-vs-closed",
    "next": "?eulerian-circuit",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "eulerian-circuit": {

    "content-title": "Circuto Euleriano",

    "theory-content": "<p>Um circuito que visita cada aresta do grafo exatamente uma única vez é chamado <b>circuito Euleriano<\/b>. Em outras palavras, um <b>circuito Euleriano<\/b> é um passeio fechado onde cada aresta do grafo aparece exatamente uma vez.<\/p><p>Um grafo que possui um circuito Euleriano é conhecido como <b>grafo Euleriano<\/b>.<\/p><div class=\"result\"> <span class=\"result-word\">Teorema: <\/span> Um grafo conexo é Euleriano se e somente se o grau de todo vértice é par. <\/div><p>Observe a equivalência (<i>se e somente se<\/i>) no teorema acima. Isso significa que:<\/p><ol> <li>Se um grafo conexo tem todos os seus vértices com grau par, então ele tem um circuito Euleriano.<\/li><li>Se um grafo conexo tem é Euleriano, então todos os seus vértices tem grau par.<\/li><\/ol> <div class=\"note\"> <span class=\"note-word\">Nota: <\/span> Como um circuito é ciclico por natureza, qualquer vértice pode ser escolhido como o porto de partida para a construção de um circuito Euleriano em um grafo Euleriano <\/div><p>Sua tarefa é desenhar um circuito Euleriano para cada grafo dado.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li><li>Para começar um passeio, clique em uma aresta qualquer.<\/li><li>O <span style=\"background-color: #ff0; padding: 2px;\">primeiro<\/span> e <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértices do passeio tem bordas coloridas.<\/li><li>Para adicionar uma próxima aresta ao passeio, clique em uma aresta incidente ao <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértice do passeio.<\/li><li>A <span style=\"background-color: #8f3; padding: 2px;\">última<\/span> aresta no passeio pode ser removida clicando novamente nela.<\/li><li>Você não poderá deletar vértices\/arestas que são partes do passeio.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Limpar Passeio<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Passeio Inverso<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

    "prev": "?connectivity",
    "next": "?eulerian-trail",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "eulerian-trail": {

    "content-title": "Trilha Euleriana",

    "theory-content": "<p>Um passeio aberto que visita cada aresta do grafo exatamente uma vez é chamado <b>passeio Euleriano<\/b>. Como ele é aberto e não há repetição de arestas, também o chamamos de <b>trilha Euleriana<\/b>.<\/p><p>Existe uma conexão entre trilhas Eulerianas e circuitos Eulerianos.<\/p><p> Nós sabemos que em um grafo Euleriano, é possível desenhar um circuito Euleriano começando em qualquer vértice. O que acontece se removermos a última aresta nesse circuito? Ainda teremos cada aresta exatamente uma vez?<\/p><p>Ao remover a última aresta, os dois vértices da extremidade dessa aresta terão agora grau ímpar. O resto dos vértices irão continuar tendo grau par. Nosso circuito não é mais um circuito pois os seus extremos são diferentes. O que temos agora é uma trilha que cotém todos os vértices exatamente uma vez.<\/p><div class=\"result\"> <p><span class=\"result-word\">Teorema: <\/span> Um grafo conexo possui uma trilha Euleriana se e somente se exatamente dois vértices tem grau ímpar e os demais tem grau par.<\/p><p>Os dois vértices com grau ímpar devem ser os vértices das extremidades da trilha.<\/p><\/div><p>Observe a equivalência (<i>se e somente se<\/i>) no resultado acima.<\/p><p>Desenhe trilhas Eulerianas para os grafos conexos dados.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul> <li>Para mover um vértice segure <b>Ctrl<\/b> e arraste-o.<\/li><li>Para ver o nome de um vértice\/aresta apenas <b>passe o mouse<\/b> sobre ele.<\/li><li>Para começar um passeio, clique em uma aresta qualquer.<\/li><li>O <span style=\"background-color: #ff0; padding: 2px;\">primeiro<\/span> e <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértices do passeio tem bordas coloridas.<\/li><li>Para adicionar uma próxima aresta ao passeio, clique em uma aresta incidente ao <span style=\"background-color: #8f3; padding: 2px;\">último<\/span> vértice do passeio.<\/li><li>A <span style=\"background-color: #8f3; padding: 2px;\">última<\/span> aresta no passeio pode ser removida clicando novamente nela.<\/li><li>Você não poderá deletar vértices\/arestas que são partes do passeio.<\/li> <\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Limpar Passeio<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Passeio Inverso<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

    "prev": "?eulerian-circuit",
    "next": "?graph-coloring",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "graph-coloring": {

    "content-title": "Graph Coloring",

    "theory-content": "<p><b>Graph coloring<\/b> is the assignment of colors to each vertex in a graph such that no two adjacent vertices get the same color.<\/p><p>Sometimes, this is also referred to as <b>proper coloring<\/b> of graph.<\/p><p>You can change color of a vertex by left-clicking on it. In this unit you have 10 colors available for each vertex.<\/p><p>Try your hands on the graph and see it for yourself!<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo<\/button>",

    "svg-output": "",

    "prev": "?eulerian-trail",
    "next": "?k-colorable",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "k-colorable": {

    "content-title": "k-Colorable Graph",

    "theory-content": "<p>A graph is said to be \\(k\\mbox{-}\\)<b>colorable<\/b> if it can be properly colored using \\(k\\) colors.<\/p><p>For example, a <a href=\"?bipartite\">bipartite graph<\/a> is \\(2\\mbox{-}\\)colorable. To see this, just assign two different colors to the two disjoint sets in a bipartite graph.<\/p><p>Conversely, if a graph is \\(2\\mbox{-}\\)colorable, then the vertices having same color can be taken as disjoint sets. Hence, we arrive at the following result:<\/p><div class=\"result\"><span class=\"result-word\">Theorem: <\/span>A graph is bipartite if and only if it is \\(2\\mbox{-}\\)colorable.<\/div><p>Now, consider a graph that is \\(k\\mbox{-}\\)colored. Choose any one vertex of the graph and replace it's color by a new \\(\\left(k+1\\right)\\)<sup>th<\/sup> color. Clearly, the graph is still properly colored.<\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span>If a graph is \\(k\\mbox{-}\\)colorable, then it is also \\(\\left(k+n\\right)\\mbox{-}\\)colorable, \\(n \\geq 1\\).<\/div><p>Another thing worth noticing is that a graph is \\(1\\mbox{-}\\)colorable if and only if it is totally disconnected, that is all its vertices are isolated.<\/p><p>In each of the following excercises, you're given a graph and a limited number of colors. Your task is to color the graphs (properly). Try to <b>minimize<\/b> the number of colors you use.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><\/ul> <\/div>",

    "prev": "?graph-coloring",
    "next": "?chromatic-number",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "chromatic-number": {

    "content-title": "Chromatic Number",

    "theory-content": "<p><b>Chromatic number<\/b> of a graph is the minimum value of \\(k\\) for which the graph is \\(k\\mbox{-}colorable\\).<\/p><p>In other words, it is the minimum number of colors needed for a proper-coloring of the graph.<\/p><p>Chromatic number of a graph \\(G\\) is denoted by \\(\\chi(G)\\). And a graph with \\(\\chi(G)=k\\) is called a <b>\\(k\\mbox{-}\\)chromatic<\/b> graph.<\/p><p>You might have noticed in the previous chapter (on <a href=\"?k-colorable\">k-Colorable Graphs<\/a>) that some of the problems involved chromatic coloring.<\/p><p>Now we take a look at some common types of graph and their chromatic numbers.<\/p><p><b><a href=\"javascript:setGraph(0);\">Empty Graph<\/a>:<\/b> It's a graph without any edges (\\(|E|=0\\)). All the vertices are isolated. \\(\\chi(G)=1\\). Note that an empty graph is also <a href=\"?bipartite\">bipartite<\/a>.<\/p><p><b><a href=\"javascript:setGraph(1);\">Bipartite Graph<\/a>:<\/b> An empty bipartite graph has \\(\\chi(G)=1\\). A non-empty bipartite graph has \\(\\chi(G)=2\\). Using this, we arrive at the following result.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A graph \\(G\\) is bipartite if and only if \\(\\chi(G)\\leq2\\).<br><br><p>This can be easily established by observing that any graph with \\(\\chi(G)\\leq2\\) is \\(2\\mbox{-}\\)colorable, and hence bipartite. The converse, has already been established earlier.<\/p><\/div><p><b><a href=\"javascript:setGraph(2);\">Star Graph<\/a>:<\/b> A star graph of order \\(n+1\\), denoted by \\(S_{n+1}\\), is the complete bipartite graph \\(K_{1,n}\\), where \\(n\\geq0\\). So, it has same chromatic number as a bipartite graph.<\/p><p><b><a href=\"javascript:setGraph(3);\">Cycle graph<\/a>:<\/b> A cycle graph of order \\(n\\) is denoted by \\(C_n\\). A cycle of odd order has \\(\\chi(C_{2n+1})=3\\), and that of even order has \\(\\chi(C_{2n})=2\\). So, a cycle of even order is also bipartite.<\/p><p><b><a href=\"javascript:setGraph(5);\">Wheel graph<\/a>:<\/b> A wheel graph of order \\(n+1\\) is obtained from \\(C_n\\) by connecting all its vertices to a new vertex (called <em>hub<\/em>). Wheel graph of order \\(n\\) is denoted by \\(W_n\\). A wheel of odd order has \\(\\chi(W_{2n+1})=4\\), and that of even order has \\(\\chi(W_{2n})=3\\).<\/p><p><b><a href=\"javascript:setGraph(7);\">Complete Graph<\/a>:<\/b> Since each vertex is connected to every other vertex, we have \\(\\chi(K_n)=n\\).<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><\/ul> <\/div>",

    "prev": "?k-colorable",
    "next": "?trees",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "trees": {

    "content-title": "Trees",

    "theory-content": "<p>It's time to learn about trees. Trees are special type of graphs which have immense application as a data structure in computational sciences.<\/p><p>But first, we talk about forests.<\/p><p>A <b>forest<\/b> is an acyclic graph, that is a graph without any cycles. It can be a single connected graph or have multiple disconnected components. When its a single connected graph, we call it a tree.<\/p><p>So, a <b>tree<\/b> is a connected acyclic graph. And a forest is just a collection of one or more trees.<\/p><p>Play around to see what is a tree and what is not. And try to observe the following properties as you draw things.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A connected graph is a tree iff its order is one more than its size. In mathematical notation, we can write this as \\[|V|=|E|+1\\]<p>Note that statement is biconditional. So it also says that a connected graph satisfying the above equation is a tree.<\/p><\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> For a tree with more than one vertices, there is a <b>unique path<\/b> between any two of its vertices.<\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> A tree is <b>minimally connected<\/b>, which means that removal of any arbitrary edge from it will convert it into a disconnected graph.<\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Limpar Tudo<\/button>",

    "svg-output": "",

    "prev": "?chromatic-number",
    "next": "?rooted-trees",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "rooted-trees": {

    "content-title": "Rooted Trees",

    "theory-content": "<p>A <b>rooted tree<\/b> is a tree with a special vertex labelled as the \"root\" the of tree.<\/p><p>The root serves as a point of reference for other vertices in the tree. In diagrams, we usually keep the root at the top and list other vertices below it.<\/p><p>This notion is particularly useful in computer science for working with tree-based data structures.<\/p><p>In the figure, the root vertex is shown with a black border.<\/p><p>Below are some useful terms associated with rooted trees.<\/p><p><b>Branch<\/b> is just another name given to edges of the tree.<\/p><p><b>Depth of a vertex<\/b> is the number of branches in the path from root to the vertex. So depth of the root itself is zero.<\/p><p><b>Level of a vertex<\/b> is number of vertex in the path from root to the vertex. This is just one more than the depth of the vertex. Level of root is 1.<\/p><p><b>Child of a vertex \\(v_1\\)<\/b> is any vertex \\(v_2\\) connected to it such that \\(d(v_2)=d(v_1)+1\\), where \\(d(v)\\) denotes depth of vertex \\(v\\). \\(v_1\\) is called <b>parent<\/b> of \\(v_2\\). Usually, in diagrams, we keep the parent vertex above its child vertices.<\/p><div class=\"note\"><span class=\"note-word\">Note:<\/span> There can be multiple childs of a vertex, but parent of a vertex is unique. Root is the only vertex in a tree without any parent.<\/div><p>A <b>leaf<\/b> is a vertex without any child.<\/p><p><b>Height of tree<\/b> is the maximum value of depth for any vertex in the tree.<\/p><p>Play around to get yourself familiar with these terms. By the way, did you notice something about the colors?<\/p><div class=\"result\"><p><span class=\"result-word\">Theorem:<\/span> All tree graphs are bipartite.<\/p><p>This can be easily seen by coloring all the vertices at even depth in a color, say pink, and coloring the vertices at odd depth in another color, say cyan. So, any tree is 2-colorable.<\/p><\/div>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To add a child to a vertex <b>left click<\/b> on it.<\/li><li>To delete a non-root vertex and all its descendents <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see details of vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear Graph<\/button>",

    "svg-output": "",

    "prev": "?trees",
    "next": "?spanning-tree",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "spanning-tree": {

    "content-title": "Spanning Tree of a Graph",

    "theory-content": "<p><b>Spanning tree<\/b> of a graph is a subgraph of it which forms a tree and contains (or spans) all the vertices of the graph.<\/p><p>So if the given graph \\(G\\) has \\(n\\) vertices, we're looking for a subgraph of \\(G\\) which<\/p><ul> <li>has \\(n\\) vertices<\/li><li>has \\(n-1\\) edges<\/li><li>is connected<\/li><\/ul> <div class=\"note\"> <span class=\"note-word\">Note:<\/span> The graph itself must be connected in order to obtain its spanning tree. <\/div><p>So if the graph is connected, we just need to delete some of its edges so that there is no cycle and it remains connected.<\/p><p>In these excercises, your aim is to reduce the number of edges to \\(n-1\\) while keeping the graph connected.<\/p><p>On solving the problems, you will realize that spanning tree of a graph isn't unique.<\/p>",

    "interface-title": "Interface do Aplicativo:",

    "interface-content": "<ul><li>To delete an edge <b>right click<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Próximo<\/button>",

    "svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"><ul class=\"pagination\" id=\"prob-list\"><li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><\/ul><\/div>",

    "prev": "?rooted-trees",
    "next": "",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  }

};
