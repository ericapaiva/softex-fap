const input = require("readline-sync")

const num = input.questionInt("Digite um numero")

function verificarPar(num){
    if (num % 2 == 0){
        console.log("o numero é par")
    }else{
        console.log('numero é impar')
    }
    
}
verificarPar(num)