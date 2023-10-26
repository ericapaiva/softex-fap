const readline = require("readline-sync");

try {
  // Solicitar dois números ao usuário
  let numero1 = readline.questionFloat("Informe o primeiro número:");
  let numero2 = readline.questionFloat("Informe o segundo número:");

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Você precisa fornecer números válidos.");
  }

  // Tentar realizar a divisão
  let resultado = numero1 / numero2;

  if (isNaN(resultado) || !isFinite(resultado)) {
    throw new Error("A divisão resultou em um valor indefinido.");
  }

  console.log(`O resultado da divisão é: ${resultado}`);
} catch (erro) {
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {
  console.log("Fim da execução.");
}
