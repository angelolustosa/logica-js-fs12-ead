const n1 = 20;
const n2 = 30;

//console.log(n1+n2);

const soma = n1+n2;

//console.log(soma);

//const media = (n1 + n2) / 2;
const media = soma / 2;

//console.log(media);

//Utilizando função
// 1 - Função Anônima (não possui nome)
/* function () {

}
 */

// 2 - Função com nome tem a importância de ser chamada e executada quando chamado pelo nome. Ex: somar()
/* function somar() {
    let n1 = 80;
    let n2 = 40;

    const resultado = n1 + n2;
    console.log(resultado)
}  */

//somar();// Chamando a função

// Parâmetros ou Argumentos
function somar(n1, n2) {
    const resultado = n1 + n2;
    console.log(resultado);
}

// chamando a função e passando os parâmetros
/*somar(80, 40);
somar(100, 400);
somar(80.69, 8957);
somar(879545, 40.65);
somar(96254157, 8888);*/

/* 
Criar uma função para calcular a média de 2 números e exibir no console a desta forma

A Soma é: 45
A média é: 25

media(85, 52)

 */

function media2numeros(numero1, numero2) {
    const soma = numero1 + numero2;
    console.log('A Soma é:', soma);

    const media = soma / 2;
    console.log('A média é:', media);
}

media2numeros(85, 52);

// Concatenar Strings no console.
// 1- Utilizando vírgula(texto, separado de outro texto ou variável por vírgula)
console.log('A média é:', media);
console.log('A média é:', ' não temos média');

// 2- Utilizando o sinal de +
console.log('A média é: ' + media);
console.log('A média é: ' + ' não temos média');

// 3- Interpolação de string, dentro das chaves é javascript, posso colocar uma varíavel, uma condição (algo que retorne true ou false), função, ...
console.log(`A média é: ${media}`);
console.log(`A média é: ${1>2}`);
console.log(`A média é: ${media2numeros(85, 52)}`);