// Criar listas
var nomes = [
  "Ana",
  "João",
  "Maria",
  "Pedro",
  "Luiza",
  "Carlos",
  "Isabel",
  "Rafael",
  "Sofia",
  "Daniel",
];
var idades = [25, 30, 22, 35, 28, 29, 27, 33, 26, 31];
var coresFavoritas = [
  "Azul",
  "Vermelho",
  "Verde",
  "Amarelo",
  "Roxo",
  "Laranja",
  "Rosa",
  "Cinza",
  "Preto",
  "Branco",
];

// Imprimir as listas originais
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);

// Modificar uma cor e uma idade
coresFavoritas[2] = "Marrom"; // Alterando a terceira cor favorita para "Marrom"
idades[1] = 31; // Alterando a idade da segunda pessoa para 31 anos

// Imprimir as listas modificadas
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores Favoritas:", coresFavoritas);
