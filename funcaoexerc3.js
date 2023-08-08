const input = require("readline-sync")

function exibirSaudacao(nome, idade, dia, mes, ano){
    nome = input.question("Qual seu nome?")
    idade = input.question("Qual sua idade?")
    dia = input.question("que dia é hoje?")
    mes = input.question("qual mês estamos?")
    ano = input.question("Em que ano estamos?")
    console.log(`Boa tarde ${nome}, notei que você tem ${idade} anos. Hoje é ${dia} de ${mes} de ${ano} `)
}
exibirSaudacao()