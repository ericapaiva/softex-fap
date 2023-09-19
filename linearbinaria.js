/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array. */

function buscarValor(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return i; // Retorna o índice do valor se encontrado
    }
  }
  return -1; // Retorna -1 se o valor não for encontrado
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorProcurado = 20;

const indice = buscarValor(array, valorProcurado);

if (indice !== -1) {
  console.log(`O valor ${valorProcurado} foi encontrado no índice ${indice}.`);
} else {
  console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
}
