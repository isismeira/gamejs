alert('Boas Vindas ao jogo do número secreto');

// A função Mathrandom() exibe um número pseudoaleatório entre 0 e 1 (ex. 0.82444[...])
// Multiplicando por cem (*100) o resultado seria algo como  (ex. 82.444[...])
// O parseInt tira as casas decimais e faz o número se tornar inteiro (ex. 82)
// O (+ 1) tem como objetivo fazer com que seja impossivel que números 0 apareçam 
let numeroSecreto = parseInt(Math.random() * 100 + 1)

let chute;

let tentativas = 1;

//enquanto o chute não for igual ao número sorteado
while ( chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    //Se o chute for igual ao número sorteado...
    if(numeroSecreto == chute) {
        //... quebre o loop e vá para a parte das tentativas 
        break;
    }
    //Se o chute não for igual ao número sorteado...
    else{
        //... vai indicar se você chutou para mais ou para menos 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1 (uma tentativa foi contabilizada)
        tentativas++;
    }
}

//O loop foi quebrado (você acertou) e uma mensagem será exibida de acordo com o número de tentativas
//Operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
