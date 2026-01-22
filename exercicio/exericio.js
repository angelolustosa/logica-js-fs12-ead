//2
console.log("5" + 2);
//3

function tipoDado(valor) {
    const tipo = typeof valor
    console.log(tipo)
  return ;
}

tipoDado(42); // "number"
tipoDado("Hello"); // "string"
tipoDado(true); // "boolean"
tipoDado(false); // "boolean"
tipoDado(1234n); // "bigint"
tipoDado(Symbol()); // "symbol"

//5
const nome = "Ana";
const saudacao = `Olá, ${nome}`;

console.log(saudacao); // "Olá, Ana"

//6
function podeDirigir(idade) {
  return idade >= 18;
}

//7
let x = 5; 
let y = 10; 
console.log('7:', y - x)

console.log(podeDirigir(20)); // true
console.log(podeDirigir(16)); // false

//8
let meuNome = "Angelo Lustosa";
console.log(meuNome)

//9
function apresentar(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(apresentar("Angelo", 30)); // "Meu nome é Angelo e tenho 30 anos."