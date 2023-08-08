const input = require("readline-sync")

const inicio = input.question("Digite um numero");
const fim = input.question("digite um numero");

function mostrarNumeros (inicio, fim ){
    while ( inicio <= fim){
        console.log(inicio)
        inicio++

    }
}
mostrarNumeros(inicio, fim)

