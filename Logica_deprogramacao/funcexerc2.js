const input = require ("readline-sync")

function dobro(num){
    num = input.questionFloat("Qual numero você quer o resultado do dobro?")
    console.log("o dobro é",num * 2)
}
dobro()