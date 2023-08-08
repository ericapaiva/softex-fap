const input = require("readline-sync")



function exibirSaudacao(nome){
    nome = input.question("Qual seu nome?")
    console.log("Boa tarde", nome)
}
exibirSaudacao()