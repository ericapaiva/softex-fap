const readline = require('readline-sync');

// Função tradicional sem parâmetros que coleta a idade do usuário
function obterIdade() {
  const idade = parseInt(readline.question('Digite a sua idade: '));
  return idade;
}

// Função tradicional com parâmetros e retorno que calcula a categoria etária
function calcularCategoriaEtaria(idade) {
  if (idade < 18) {
    return 'Menor de idade';
  } else if (idade >= 18 && idade <= 64) {
    return 'Adulto';
  } else {
    return 'Idoso';
  }
}

// Arrow function com parâmetros e retorno que calcula a categoria etária
const categorizarIdade = (idade) => {
  if (idade < 18) {
    return 'Menor de idade';
  } else if (idade >= 18 && idade <= 64) {
    return 'Adulto';
  } else {
    return 'Idoso';
  }
};

function resultado() {
  const idade = obterIdade();
  const categoria1 = calcularCategoriaEtaria(idade);
  const categoria2 = categorizarIdade(idade);

  console.log(`Categoria etária (função tradicional com parâmetros): ${categoria1}`);
  console.log(`Categoria etária (arrow function com parâmetros): ${categoria2}`);
}

resultado();
