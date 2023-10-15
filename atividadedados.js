const readline = require("readline-sync");

function solicitarValores() {
  const valor1 = parseFloat(readline.question("Digite o primeiro valor: "));
  const valor2 = parseFloat(readline.question("Digite o segundo valor: "));
  return [valor1, valor2];
}

function calcular(operador, valor1, valor2) {
  let resultado;
  let sobra;

  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      sobra = valor1 % valor2;
      break;
    default:
      console.log("Operador inválido");
      return;
  }

  console.log(`Resultado: ${resultado}`);
  if (operador === "/") {
    console.log(`Sobra: ${sobra}`);
  }
}

function main() {
  const [valor1, valor2] = solicitarValores();
  const operador = readline.question("Digite o operador (+, -, *, /): ");
  calcular(operador, valor1, valor2);
}

main();
