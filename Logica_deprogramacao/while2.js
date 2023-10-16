const readline = require('readline-sync');
let parada = readline.questionInt('Ate que numero você quer somar ');
let contador = 1;
let soma = 0;
while(contador <= parada){
    soma = soma + contador;
contador++
}
console.log(soma);
