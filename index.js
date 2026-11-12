
const paginaInicial = document.getElementById("paginaInicial");
const paginaDetalhes = document.getElementById("paginaDetalhes");
const conteudo = document.getElementById("conteudo");
const modoBtn = document.getElementById("modoBtn");
const voltarBtn = document.getElementById("voltarBtn");

// BANCO DE INFORMAÇÕES

const informacoes = {

    instrumentos: {
        titulo: "Instrumentos de origem africana",
        paragrafos: [
            "Os instrumentos musicais de origem africana tiveram grande importância na formação da música brasileira. Eles ajudaram a criar ritmos e acompanhar danças e manifestações culturais.",
            "O atabaque é um tambor utilizado em diversas manifestações culturais e religiosas afro-brasileiras.",
            "O agogô é um instrumento de metal com campânulas de tamanhos diferentes, tocado com uma baqueta.",
            "O berimbau é um instrumento de corda associado principalmente à capoeira.",
            "Esses instrumentos representam conhecimentos e tradições transmitidos entre gerações."
        ]
    },

    ritmos: {
        titulo: "A influência africana nos ritmos",
        paragrafos: [
            "A música africana contribuiu para a construção dos ritmos brasileiros por meio das batidas, da percussão, das palmas e dos cantos coletivos.",
            "Uma característica importante é a utilização de diferentes instrumentos de percussão, que produzem combinações de sons e ritmos.",
            "Os cantos também podem apresentar chamadas e respostas, nas quais uma pessoa canta e outras respondem.",
            "Essas características aparecem em manifestações como o samba, o jongo e o maracatu, além de influenciarem outros estilos musicais."
        ]
    },

    dancas: {
        titulo: "As danças de influência africana",
        paragrafos: [
            "As danças afro-brasileiras são manifestações culturais que unem movimentos corporais, música, tradição e identidade.",
            "O jongo mistura dança, canto e tambores, sendo preservado por comunidades tradicionais.",
            "A capoeira combina luta, música, dança e expressão cultural.",
            "O samba de roda, tradicional da Bahia, reúne música, dança e participação coletiva.",
            "Essas manifestações ajudam a preservar a memória e as tradições afro-brasileiras."
        ]
    },

    resistencia: {
        titulo: "A música como resistência cultural",
        paragrafos: [
            "Mesmo diante da escravidão, do preconceito e da discriminação, a população negra preservou suas tradições musicais.",
            "A música tornou-se uma maneira de transmitir histórias, preservar memórias e fortalecer a identidade das comunidades.",
            "Ao longo da história, artistas negros também utilizaram suas músicas para denunciar o racismo e as desigualdades sociais.",
            "Atualmente, essa herança continua presente em diferentes gêneros musicais e movimentos culturais."
        ]
    },

    samba: {
        titulo: "A história e a influência do Samba",
        paragrafos: [
            "O samba é um dos gêneros musicais mais conhecidos do Brasil. Suas raízes estão profundamente ligadas às tradições musicais afro-brasileiras.",
            "O samba urbano ganhou destaque no Rio de Janeiro no início do século XX, com participação fundamental das comunidades negras.",
            "Entre seus instrumentos estão o pandeiro, o surdo, o tamborim e o cavaquinho.",
            "O samba se tornou um símbolo da identidade cultural brasileira e ajudou a divulgar a cultura afro-brasileira pelo mundo.",
            "Além de ser um estilo musical, o samba representa memória, resistência e expressão cultural."
        ]
    },

    maracatu: {
        titulo: "A história do Maracatu",
        paragrafos: [
            "O maracatu é uma manifestação cultural afro-brasileira muito importante em Pernambuco.",
            "Está relacionado às tradições dos cortejos negros e às antigas coroações de reis e rainhas do Congo.",
            "O maracatu utiliza instrumentos como alfaias, caixas, gonguês e ganzás.",
            "Os cortejos apresentam música, dança, personagens e roupas tradicionais.",
            "Essa manifestação representa memória, identidade e valorização das tradições afro-brasileiras."
        ]
    },

    jongo: {
        titulo: "A história do Jongo",
        paragrafos: [
            "O jongo é uma manifestação cultural afro-brasileira com forte presença na região Sudeste do Brasil.",
            "Foi preservado especialmente por comunidades negras e descendentes de africanos.",
            "O jongo reúne tambores, cantos, dança e interação entre os participantes.",
            "Seus cantos tradicionais podem utilizar versos e metáforas para transmitir mensagens.",
            "O jongo representa resistência e preservação da memória e das tradições afro-brasileiras."
        ]
    },

    axe: {
        titulo: "A história do Axé Music",
        paragrafos: [
            "O Axé Music surgiu na Bahia na década de 1980, reunindo diferentes influências musicais.",
            "O gênero possui relações com o samba-reggae, os blocos afro, o ijexá e outros ritmos.",
            "Apresenta forte presença de percussão, ritmos dançantes e influências da música afro-baiana.",
            "O Axé ajudou a divulgar a música da Bahia pelo Brasil e a valorizar manifestações culturais afro-brasileiras."
        ]
    },

    gilberto: {
        titulo: "Gilberto Gil",
        paragrafos: [
            "Gilberto Gil é cantor, compositor e músico brasileiro, nascido em Salvador, na Bahia, em 1942.",
            "Ele é um dos grandes nomes da Música Popular Brasileira e participou do movimento Tropicalista, que transformou a música nacional.",
            "Suas músicas misturam elementos brasileiros, africanos, ritmos populares e influências de diferentes partes do mundo.",
            "Seu trabalho ajudou a ampliar o reconhecimento da diversidade cultural brasileira.",
            "Gilberto Gil também atuou como ministro da Cultura do Brasil entre 2003 e 2008."
        ]
    },

    elza: {
        titulo: "Elza Soares",
        paragrafos: [
            "Elza Soares nasceu no Rio de Janeiro, em 1930, e se tornou uma das maiores cantoras da história da música brasileira.",
            "Ela conquistou reconhecimento por sua voz marcante e pela capacidade de interpretar diferentes estilos musicais.",
            "Em suas músicas, abordou questões sociais, racismo, desigualdade e a valorização das mulheres negras.",
            "Sua trajetória representa uma importante contribuição para a cultura brasileira.",
            "Elza faleceu em 2022, deixando um legado importante para a música nacional."
        ]
    },

    jorge: {
        titulo: "Jorge Ben Jor",
        paragrafos: [
            "Jorge Ben Jor é cantor e compositor brasileiro, nascido no Rio de Janeiro, em 1939.",
            "Seu trabalho ficou conhecido pela mistura de samba, rock, funk, soul e outros elementos da música brasileira.",
            "Suas composições apresentam referências à cultura brasileira e afro-brasileira.",
            "Entre suas músicas conhecidas estão Mas, Que Nada! e País Tropical.",
            "Ele influenciou diferentes gerações de músicos e ajudou a renovar a música popular brasileira."
        ]
    },

    clementina: {
        titulo: "Clementina de Jesus",
        paragrafos: [
            "Clementina de Jesus nasceu em 1901, no estado do Rio de Janeiro. Foi uma importante cantora brasileira, conhecida por preservar tradições musicais afro-brasileiras.",
            "Seu repertório valorizava jongos, sambas, vissungos e cantos tradicionais.",
            "Sua voz e seu trabalho ajudaram a divulgar manifestações musicais transmitidas entre gerações de comunidades negras.",
            "Clementina é uma referência importante para a memória e a preservação da música afro-brasileira.",
            "Ela faleceu em 1987, deixando um legado cultural muito importante."
        ]
    }

};


// FUNÇÃO PARA ABRIR A PÁGINA DE DETALHES

function abrirDetalhes(tema) {

    const assunto = informacoes[tema];

    if (!assunto) {
        alert("Informação não encontrada!");
        return;
    }

    document.getElementById("menu").hidden = true;
    paginaInicial.hidden = true;
    paginaDetalhes.hidden = false;

    conteudo.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = assunto.titulo;
    conteudo.appendChild(titulo);

    assunto.paragrafos.forEach(function(texto) {

        const paragrafo = document.createElement("p");
        paragrafo.textContent = texto;

        conteudo.appendChild(paragrafo);

    });

    // Atualiza o endereço sem procurar outro arquivo
    window.location.hash = "detalhes/" + tema;

    window.scrollTo(0, 0);
}


// BOTÕES SAIBA MAIS

document.querySelectorAll(".detalhes").forEach(function(botao) {

    botao.addEventListener("click", function() {

        const tema = botao.dataset.tema;
        abrirDetalhes(tema);

    });

});


// BOTÃO VOLTAR

voltarBtn.addEventListener("click", function() {

    paginaDetalhes.hidden = true;
    paginaInicial.hidden = false;
    document.getElementById("menu").hidden = false;

    window.location.hash = "inicio";

    window.scrollTo(0, 0);

});


// MODO ESCURO

modoBtn.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        modoBtn.textContent = "☀️ Modo Claro";
    } else {
        modoBtn.textContent = "🌙 Modo Escuro";
    }

});


// ABRIR DETALHES DIRETAMENTE PELO ENDEREÇO

function verificarEndereco() {

    const endereco = window.location.hash;

    if (endereco.startsWith("#detalhes/")) {

        const tema = endereco.replace("#detalhes/", "");

        const assunto = informacoes[tema];

        if (assunto) {

            document.getElementById("menu").hidden = true;
            paginaInicial.hidden = true;
            paginaDetalhes.hidden = false;

            conteudo.replaceChildren();

            const titulo = document.createElement("h2");
            titulo.textContent = assunto.titulo;
            conteudo.appendChild(titulo);

            assunto.paragrafos.forEach(function(texto) {
                const p = document.createElement("p");
                p.textContent = texto;
                conteudo.appendChild(p);
            });

        }

    } else {

        paginaDetalhes.hidden = true;
        paginaInicial.hidden = false;
        document.getElementById("menu").hidden = false;

    }

}

window.addEventListener("hashchange", verificarEndereco);

verificarEndereco();
