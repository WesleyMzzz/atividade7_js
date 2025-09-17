// Atividade 1

const dolar = 5.20;
const euro = 5.70;

let real = 50.0;

console.log("Preço: "+real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Preço em Dólar: "+(dolar/real).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log("Preço em Euro: "+(euro/real).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));

// Atividade 2

let idade = 19;
let cartao = false;
let responsavel = false;

if ((idade >= 18 && cartao == true) || responsavel == true) {
     mensagem = "Você pode entrar!";
} else {
     mensagem = "Você não pode entrar";
}

console.log(mensagem);

// Atividade 3

let nota = 7.0
let resultado = (nota >= 6) ? "Aprovado" : "Reprovado";

console.log(resultado);
