
const input = require("readline-sync")

function calculadora(){

let operacao, resultado;

    while (true) {
        console.log("Iniciar calculadora");


        console.log("Operações disponíveis:");
        console.log("1: Soma");
        console.log("2: Subtração");
        console.log("3: Divisão");
        console.log("4: Multiplicação");
        console.log("0: Sair");
        let operacao = input.questionInt("Digite o número da operação desejada: ");
        
        if (operacao <= 0){
            console.log("Saindo...");
            break;
        } 
            let num1 = input.questionFloat("Digite o primeiro valor: ");
            let num2 = input.questionFloat("Digite o segundo valor: ");
            console.log("===================")


            switch(operacao){
             case 1:
                operacao = 'SOMA';
            resultado = (num1 + num2);
                console.log(`O Resultado da ${operacao} é ${resultado}`);
                break;


                case 2:
                operacao = 'SUBTRACAO';
            resultado = (num1 - num2);
                console.log(`O Resultado da ${operacao} é ${resultado}`);
                break;

                case 3:
                operacao = 'DIVISAO';
            resultado = (num1 / num2);
                console.log(`O Resultado da ${operacao} é ${resultado}`);
                break;

                case 4:
                operacao = 'MULTIPLICACAO';
                 resultado = (num1 * num2);
                console.log(`O Resultado da ${operacao} é ${resultado}`);
                break;
            } 
                
                }
            }



calculadora();