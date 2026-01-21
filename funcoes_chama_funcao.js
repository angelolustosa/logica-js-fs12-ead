// Função para somar dois números
function somar(n1, n2) {
    const resultado = n1 + n2;
    //console.log(`A Soma é: ${resultado}`);

    return resultado;
}

//somar(70, 30);

/* function media(n1, n2) {
    const resultado = (n1 + n2) / 2;
    console.log(`A Média é: ${resultado}`);
} */

//media(85, 52);


//Reescrevendo a função media utilizando a funcao soma
function media(n1, n2) {
    // Quando chamo uma função dentro de outra função, a função que estou chamando precisa ter um return, que neste exemplo é o valor da soma, pois será utilizado para calcular a média. Na função soma acima adicionamos o 'return resultado;'
    const soma = somar(n1, n2);
    console.log(`A soma é: ${soma}`);

    const resultado = soma / 2;
    console.log(`A Média é: ${resultado}`);

    return resultado;
}

console.log(media(85, 52));