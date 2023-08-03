const readline = require("readline-sync");
let num = readline.questionInt('Digite um numero ')
let contador = 1;

while(contador <= num){
    console.log(contador)
    contador++
}