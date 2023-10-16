const readline = require("readline-sync");

const input = readline.question("digite um valor");

try{
    
    if(isNaN(input)){
        throw("conversão invalida")
    }
    const numero = parseInt(input)
    console.log("Numero",numero)
}catch(error){
    console.error("conversão invalida")

}

