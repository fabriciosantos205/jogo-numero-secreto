function gerarNumeroAleatorio()
{
    let NumeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeSorteados = listaDeNumerosSorteados.length;
    if (quantidadeSorteados == 10)
    {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}


function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function verificarChute()
{
    let chute = document.querySelector('input').value;
    console.log(chute == numeroAleatorio)
    contador = contador + 1;

    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1', ' acertou numero');
        let palavras_tentativas = contador > 1?'tentativas':'tentativa';
        exibirTextoNaTela('p', `Voce descobriu em ${contador} ${palavras_tentativas}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        limparChute();
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
}


function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparChute();
    contador = 0
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';   
    exibirTextoNaTela('h1', 'numero secreto ');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//main
let listaDeNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let contador = 0
exibirTextoNaTela('h1', 'numero secreto ');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
