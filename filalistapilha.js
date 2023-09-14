/*Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?*/

const fila = [];

for (const elemento of [3, 7, 9, 1, 0]) {
  fila.push(elemento); // Insere o elemento na fila
}

const sequenciaFila = [];

while (fila.length > 0) {
  const elementoRemovido = fila.shift(); // Remove o primeiro elemento da fila
  sequenciaFila.push(elementoRemovido);
}

console.log(sequenciaFila);

// Lista

const lista = [];

for (const elemento of [3, 7, 9, 1, 0]) {
  lista.push(elemento); // Insere o elemento na lista
}

const sequenciaLista = [];

while (lista.length > 0) {
  const elementoRemovido = lista.shift(); // Remove o primeiro elemento da lista
  sequenciaLista.push(elementoRemovido);
}

console.log(sequenciaLista);

//Pilha
const pilha = [];

for (const elemento of [3, 7, 9, 1, 0]) {
  pilha.push(elemento); // Insere o elemento na pilha
}

const sequenciaPilha = [];

while (pilha.length > 0) {
  const elementoRemovido = pilha.pop(); // Remove o último elemento da pilha
  sequenciaPilha.push(elementoRemovido);
}

console.log(sequenciaPilha);
