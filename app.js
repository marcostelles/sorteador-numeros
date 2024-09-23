function geraNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraBotao(){
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  }else{
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value); 
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);
    let numeros = [];
    let numero;

    for (let i = 0; i < quantidadeNumeros;i++){

        numero = geraNumeroAleatorio(numeroMin,numeroMax);
        while (numeros.includes(numero)){
            numero = geraNumeroAleatorio(numeroMin,numeroMax);
        }
        numeros.push(numero);
    }

    let resultato = document.getElementById('resultado');
    resultato.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros}</label>`;

    alteraBotao();
}



function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    
    let resultato = document.getElementById('resultado');
    resultato.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    alteraBotao();
}

