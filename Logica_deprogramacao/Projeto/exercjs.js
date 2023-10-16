/* Faça um programa que leia o nome do alun, trÊs notas e mostre o nome e a média (aritmética)
do aluno. */

/* const input = require("readline-sync");
let Aluno = input.question("Digite o nome do aluno");
let nota1 = input.questionFloat("Digite a primeira nota");
let nota2 = input.questionFloat("Digite a segunda nota");
let nota3 = input.questionFloat("Digite a terceira nota");

// solicitando a media aritimética
let media = (nota1 + nota2 + nota3) / 3;

console.log(media); */

/* Faça um programa com javascript para verificar se um determine ano, fornecido pelo usuario,
é bissexto. Um ano é bissexto se for divisivel por 400 ou se for divisivel por 4 e não for divisivel
por 100. Ex: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto. */

/* const input = require("readline-sync");
let ano = input.question("Digite um ano");

//Verificar se o ano é bissexto

if (ano % 400 === 0) ano % 4 === 0 && ano % 100 !== 0;
console.log(`O ano é bissexto ${ano}`); */

/* Uma determinada empresa vende seus produtos em quatro diferentes estados.
Cada estado possui uma taxação de imposto diferente sobre o produto (MG 7%, SP 12% RJ 15% MS 8%),
Faça um programa em js, que o usuario entre com o valor e o estado destino do produto e o 
programa retorne o preço final do produto acrescido do imposto correspondente ao estado onde
será vendido. O programa deve mostrar uma mensagem de erro caso o estado fornecido não esteja na 
lista de de estados validos. */

const input = require("readline-sync");

let estado = input.question("Digite o nome do estado").toUpperCase();
let valor = input.questionFloat("Digite o valor");
let precoFinal;

if (estado == "MG") {
    precoFinal = valor * (1 + 0.07);
} else if (estado == "SP") {
    precoFinal = valor * (1 + 0.12);
} else if (estado == "RJ") {
    precoFinal = valor * (1 + 0.15);
} else if (estado == "MS") {
    precoFinal = valor * 0.08;
}
console.log(precoFinal);

/* Faça um programa que calcule e mostre a soma dos 50 primeiros numeros pares.
Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente( for, while, do-while).
Qual das trÊs estruturas é a mais adequada para este programa? porque? */
