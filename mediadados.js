const imput = require("readline-sync");

// Solicitar que o usuário insira as três notas
let nota1 = imput.questionFloat("Digite a primeira nota (0 a 10):");
let nota2 = imput.questionFloat("Digite a segunda nota (0 a 10):");
let nota3 = imput.questionFloat("Digite a terceira nota (0 a 10):");

// Verificar se as notas estão dentro do intervalo de 0 a 10
if (
  nota1 >= 0 &&
  nota1 <= 10 &&
  nota2 >= 0 &&
  nota2 <= 10 &&
  nota3 >= 0 &&
  nota3 <= 10
) {
  // Calcular a média
  let media = (nota1 + nota2 + nota3) / 3;

  // Exibir o resultado no console
  console.log("A média das notas é: " + media.toFixed(2)); // Arredondar para 2 casas decimais
} else {
  console.log("Por favor, insira notas válidas de 0 a 10.");
}
