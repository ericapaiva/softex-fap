const readline= require('readline-sync')
// Solicita um numero no teclado

try{
    //tentando dividir por zero
    if(numero === 0){
        throw("error: divisão por zero não é permitida")
    }
    const numero =  readline.questionFloat("Digite um numero");
    const resultado = numero / 0;
    console.log("Resultado:",resultado);
}catch(error){
    //captura o erro e exibe a mensagem apropriada
    console.error("divisão por zero não é permitida");

}