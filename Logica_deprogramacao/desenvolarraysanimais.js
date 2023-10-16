// Criar uma matriz bidimensional para armazenar informações sobre animais
let animais = [
  ["Leão", "Felino", 5],
  ["Girafa", "Mamífero", 8],
  ["Tigre", "Felino", 6],
  ["Elefante", "Mamífero", 10],
  ["Cobra", "Réptil", 3],
];

// A matriz 'animais' possui 5 linhas, onde cada linha representa um animal com informações de nome, espécie e idade.

// Acessar informações sobre os animais na matriz
console.log("Nome do primeiro animal:", animais[0][0]); // Saída: "Leão"
console.log("Espécie do segundo animal:", animais[1][1]); // Saída: "Mamífero"
console.log("Idade do quarto animal:", animais[3][2]); // Saída: 10

// Adicionar um novo animal à matriz
let novoAnimal = ["Pinguim", "Ave", 2];
animais.push(novoAnimal);

// Imprimir a matriz atualizada
console.log("Matriz de animais atualizada:", animais);
