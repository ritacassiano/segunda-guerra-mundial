// ======================================================
// ACORDEÃO - ABRIR E FECHAR OS CONTEÚDOS
// ======================================================

// Seleciona todos os elementos que possuem a classe "titulo-acordeao"
let botoes = document.querySelectorAll(".titulo-acordeao");

// Percorre todos os botões encontrados
botoes.forEach(function(botao) {

    // Adiciona um evento de clique em cada botão
    botao.addEventListener("click", function() {

        // Pega o elemento que está logo depois do botão
        // Neste projeto, é a div que contém o texto escondido
        let conteudo = botao.nextElementSibling;

        // Procura o <span> que está dentro do botão
        // Ele contém o símbolo + ou −
        let simbolo = botao.querySelector("span");

        // Verifica se o conteúdo está aberto
        if (conteudo.style.display === "block") {

            // Esconde o conteúdo
            conteudo.style.display = "none";

            // Volta o símbolo para +
            simbolo.textContent = "+";

        } else {

            // Mostra o conteúdo
            conteudo.style.display = "block";

            // Troca o símbolo para −
            simbolo.textContent = "−";
        }

    });

});


// ======================================================
// LINHA DO TEMPO
// ======================================================

// Função executada quando o usuário clica em um ano
// Recebe o id do acontecimento e o botão que foi clicado
function mostrarAno(id, botao) {

    // Seleciona todos os acontecimentos da linha do tempo
    let eventos = document.querySelectorAll(".evento");

    // Percorre todos os acontecimentos e os esconde
    eventos.forEach(function(evento) {
        evento.style.display = "none";
    });

    // Seleciona todos os botões dos anos
    let botoesAno = document.querySelectorAll(".anos button");

    // Remove a classe "ativo" de todos os botões
    botoesAno.forEach(function(item) {
        item.classList.remove("ativo");
    });

    // Localiza o acontecimento correspondente ao ano clicado
    let eventoSelecionado = document.getElementById(id);

    // Mostra o acontecimento escolhido
    eventoSelecionado.style.display = "block";

    // Adiciona a classe "ativo" ao botão clicado
    botao.classList.add("ativo");

    // Faz a página rolar suavemente até o acontecimento
    eventoSelecionado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ======================================================
// QUIZ
// ======================================================

// Array que armazena todas as perguntas do quiz
const perguntas = [

    {
        pergunta: "Em que ano começou a Segunda Guerra Mundial?",

        alternativas: [
            "1918",
            "1929",
            "1939",
            "1945"
        ],

        // Índice da alternativa correta
        // Os índices começam em 0
        correta: 2,

        explicacao:
            "A Segunda Guerra Mundial começou em 1939, com a invasão da Polônia pela Alemanha."
    },

    {
        pergunta: "Quais países formavam as principais potências do Eixo?",

        alternativas: [
            "Alemanha, Itália e Japão",
            "França, Alemanha e Estados Unidos",
            "Reino Unido, Japão e União Soviética",
            "Estados Unidos, França e Itália"
        ],

        correta: 0,

        explicacao:
            "As principais potências do Eixo foram Alemanha, Itália e Japão."
    },

    {
        pergunta: "Qual acontecimento levou os Estados Unidos a entrarem na guerra?",

        alternativas: [
            "A invasão da Polônia",
            "O ataque a Pearl Harbor",
            "O Dia D",
            "A Batalha de Stalingrado"
        ],

        correta: 1,

        explicacao:
            "Os Estados Unidos entraram oficialmente na guerra após o ataque japonês a Pearl Harbor, em dezembro de 1941."
    },

    {
        pergunta: "Qual força militar brasileira foi enviada para combater na Europa?",

        alternativas: [
            "FEB",
            "ONU",
            "OTAN",
            "Mercosul"
        ],

        correta: 0,

        explicacao:
            "A Força Expedicionária Brasileira (FEB) enviou aproximadamente 25 mil militares para combater na Itália."
    },

    {
        pergunta: "Em qual país europeu a FEB combateu durante a Segunda Guerra Mundial?",

        alternativas: [
            "França",
            "Polônia",
            "Itália",
            "Alemanha"
        ],

        correta: 2,

        explicacao:
            "A Força Expedicionária Brasileira participou da campanha militar dos Aliados na Itália."
    },

    {
        pergunta: "Qual foi uma consequência política do Tratado de Versalhes para a Alemanha?",

        alternativas: [
            "Fortaleceu imediatamente a democracia alemã",
            "Provocou ressentimento que foi explorado pelo nazismo",
            "Transformou a Alemanha em aliada da França",
            "Eliminou os problemas econômicos alemães"
        ],

        correta: 1,

        explicacao:
            "As punições e limitações impostas à Alemanha contribuíram para um sentimento de insatisfação que mais tarde foi explorado politicamente por Hitler."
    },

    {
        pergunta: "O que foi a Blitzkrieg utilizada pela Alemanha no início da guerra?",

        alternativas: [
            "Uma estratégia baseada em ataques rápidos e coordenados",
            "Uma política de negociação diplomática",
            "Um sistema de defesa das cidades alemãs",
            "Uma aliança militar entre Alemanha e Japão"
        ],

        correta: 0,

        explicacao:
            "Blitzkrieg significa guerra-relâmpago e envolvia ataques rápidos e coordenados com tropas terrestres, tanques e aviação."
    },

    {
        pergunta: "Por que a Batalha de Stalingrado é considerada um momento importante da guerra?",

        alternativas: [
            "Porque marcou a entrada do Japão na guerra",
            "Porque provocou a rendição dos Estados Unidos",
            "Porque representou uma importante derrota alemã e favoreceu o avanço soviético",
            "Porque marcou o início da invasão da Polônia"
        ],

        correta: 2,

        explicacao:
            "A derrota alemã em Stalingrado, em 1943, foi um importante ponto de virada na frente oriental e abriu caminho para o avanço soviético."
    },

    {
        pergunta: "Qual acontecimento contribuiu diretamente para a entrada do Brasil na guerra em 1942?",

        alternativas: [
            "A invasão alemã da França",
            "Os ataques de submarinos do Eixo a navios brasileiros",
            "A Batalha de Stalingrado",
            "A invasão japonesa da China"
        ],

        correta: 1,

        explicacao:
            "Ataques de submarinos do Eixo a navios brasileiros provocaram mortes e forte reação popular, contribuindo para a declaração brasileira de guerra à Alemanha e à Itália."
    },

    {
        pergunta: "Qual contradição política marcou a participação brasileira na Segunda Guerra Mundial?",

        alternativas: [
            "O Brasil lutava ao lado do Japão enquanto mantinha relações com os Estados Unidos",
            "O Brasil defendia o nazismo enquanto combatia a Itália",
            "O Brasil combatia regimes autoritários no exterior enquanto vivia a ditadura do Estado Novo",
            "O Brasil era uma democracia e apoiava politicamente a Alemanha nazista"
        ],

        correta: 2,

        explicacao:
            "O Brasil combatia regimes fascistas na Europa enquanto internamente vivia o Estado Novo, regime autoritário comandado por Getúlio Vargas."
    }

];


// Guarda o número da pergunta que está sendo exibida
// Começa em 0 porque os índices do array começam em 0
let perguntaAtual = 0;

// Guarda a quantidade de respostas corretas
let pontos = 0;


// ======================================================
// MOSTRAR UMA PERGUNTA
// ======================================================

function mostrarPergunta() {

    // Pega a pergunta atual dentro do array
    let pergunta = perguntas[perguntaAtual];

    // Mostra o número da pergunta e o total de perguntas
    document.getElementById("progresso").textContent =
        "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    // Coloca o texto da pergunta no HTML
    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    // Seleciona a área onde serão criados os botões
    let alternativas = document.getElementById("alternativas");

    // Limpa as alternativas da pergunta anterior
    alternativas.innerHTML = "";

    // Percorre todas as alternativas da pergunta atual
    pergunta.alternativas.forEach(function(alternativa, indice) {

        // Cria um novo botão
        let botao = document.createElement("button");

        // Coloca o texto da alternativa dentro do botão
        botao.textContent = alternativa;

        // Quando o botão for clicado,
        // envia o índice da alternativa para verificarResposta()
        botao.onclick = function() {
            verificarResposta(indice);
        };

        // Adiciona o botão criado ao HTML
        alternativas.appendChild(botao);

    });

    // Limpa o feedback da pergunta anterior
    document.getElementById("feedback").textContent = "";

    // Esconde o botão "Próxima pergunta"
    document.getElementById("proxima").style.display = "none";

}


// ======================================================
// VERIFICAR A RESPOSTA
// ======================================================

function verificarResposta(indice) {

    // Pega a pergunta que está sendo respondida
    let pergunta = perguntas[perguntaAtual];

    // Seleciona todos os botões das alternativas
    let botoes = document.querySelectorAll("#alternativas button");

    // Desabilita todos os botões depois da resposta
    // Assim o usuário não consegue responder novamente
    botoes.forEach(function(botao) {
        botao.disabled = true;
    });

    // Compara a alternativa clicada com a resposta correta
    if (indice === pergunta.correta) {

        // Aplica a classe CSS "correta"
        botoes[indice].classList.add("correta");

        // Mostra o feedback
        document.getElementById("feedback").textContent =
            "Resposta correta! " + pergunta.explicacao;

        // Soma um ponto
        pontos++;

    } else {

        // Marca a alternativa escolhida como errada
        botoes[indice].classList.add("errada");

        // Mostra qual era a alternativa correta
        botoes[pergunta.correta].classList.add("correta");

        // Mostra o feedback
        document.getElementById("feedback").textContent =
            "Resposta incorreta. " + pergunta.explicacao;

    }

    // Exibe o botão para avançar
    document.getElementById("proxima").style.display = "block";

}


// ======================================================
// PRÓXIMA PERGUNTA
// ======================================================

function proximaPergunta() {

    // Avança uma posição no array
    perguntaAtual++;

    // Verifica se ainda existem perguntas
    if (perguntaAtual < perguntas.length) {

        // Mostra a próxima pergunta
        mostrarPergunta();

    } else {

        // Se acabaram as perguntas, mostra o resultado
        mostrarResultado();

    }

}


// ======================================================
// RESULTADO FINAL
// ======================================================

function mostrarResultado() {

    let mensagem;

    // Define uma mensagem de acordo com a pontuação
    if (pontos === perguntas.length) {

        mensagem = "Excelente! Você acertou todas as questões!";

    } else if (pontos >= 7) {

        mensagem = "Muito bom! Você demonstrou um bom conhecimento sobre o tema.";

    } else {

        mensagem = "Vale a pena revisar o conteúdo e tentar novamente.";

    }

    // Substitui o conteúdo do quiz pelo resultado final
    document.getElementById("quiz-container").innerHTML =
        "<h3>Resultado final</h3>" +
        "<p>Você acertou <strong>" + pontos +
        "</strong> de <strong>" + perguntas.length +
        "</strong> questões.</p>" +
        "<p>" + mensagem + "</p>" +
        "<button id='refazer' onclick='refazerQuiz()'>" +
        "Refazer Quiz" +
        "</button>";

}


// ======================================================
// REFAZER O QUIZ
// ======================================================

function refazerQuiz() {

    // Volta para a primeira pergunta
    perguntaAtual = 0;

    // Zera a pontuação
    pontos = 0;

    // Recria a estrutura HTML necessária para o quiz
    document.getElementById("quiz-container").innerHTML =
        '<p id="progresso"></p>' +
        '<h3 id="pergunta"></h3>' +
        '<div id="alternativas"></div>' +
        '<p id="feedback"></p>' +
        '<button id="proxima" onclick="proximaPergunta()">' +
        'Próxima pergunta' +
        '</button>';

    // Mostra novamente a primeira pergunta
    mostrarPergunta();

}


// ======================================================
// EIXO E ALIADOS
// ======================================================

function mostrarBlocoGuerra(id) {

    // Localiza o conteúdo correspondente ao botão clicado
    let conteudo = document.getElementById(id);

    // Guarda a informação se esse conteúdo já estava aberto
    let estavaAberto = conteudo.style.display === "block";

    // Seleciona os conteúdos de Eixo e Aliados
    let blocos = document.querySelectorAll(".conteudo-guerra");

    // Fecha todos os conteúdos
    blocos.forEach(function(bloco) {
        bloco.style.display = "none";
    });

    // Se o conteúdo clicado estava fechado, ele será aberto
    if (!estavaAberto) {
        conteudo.style.display = "block";
    }

}


// ======================================================
// INÍCIO DO PROGRAMA
// ======================================================

// Verifica se existe o quiz na página atual
let quiz = document.getElementById("quiz-container");

// Se o quiz existir, mostra a primeira pergunta
if (quiz) {
    mostrarPergunta();
}