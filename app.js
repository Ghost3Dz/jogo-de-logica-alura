let listaDeSorteio = [];
let numeroLimite = prompt ('Qual a dificuldade máxima você gostaria?');
while (numeroLimite <= 0) {
    numeroLimite = prompt ('Favor selecionar um número válido');
}
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

console.log (numeroSecreto);

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
};

exibirMensagemInicial();

function verificarChute() {
        let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Você acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
            } else {
        if ( chute > numeroSecreto) {
            exibirTextoNaTela ('h1', 'Errou');
            exibirTextoNaTela ('p', 'Tente usar um número menor');
        } else {
            exibirTextoNaTela ('h1', 'Errou');
            exibirTextoNaTela ('p', 'Tente usar um número maior');
            
        }
        tentativas ++;
    }
};

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
   let quantidadeDeElementos = listaDeSorteio.length;
   if (quantidadeDeElementos == numeroLimite) {
    listaDeSorteio = [];
   }

   if (listaDeSorteio.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
            listaDeSorteio.push(numeroEscolhido);
            console.log (listaDeSorteio);
            return numeroEscolhido;
   }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    tentativas = 1;
    console.log (numeroSecreto);
    exibirMensagemInicial();
    document.getElementById ('reiniciar'). setAttribute('disabled', true);
};
