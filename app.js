
alert('Boas Vindas ao jogo do número secreto');

let numeroSecreto = 4;

let chute;

let tentativas = 1;

while ( chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if(numeroSecreto == chute) {
        alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);
    }
    else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
if (tentativas > 1) {
    alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);
}
