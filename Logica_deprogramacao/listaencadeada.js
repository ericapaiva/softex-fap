/*Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null; // Inicialmente, não há referência a um filho
  }

  adicionarFilho(filho) {
    this.filho = filho;
  }

  obterInformacoes() {
    if (this.filho) {
      return `${this.nome}, ${this.idade} anos, tem um filho chamado ${this.filho.nome}`;
    } else {
      return `${this.nome}, ${this.idade} anos`;
    }
  }
}

// Criando pessoas
const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 35);
const pessoa3 = new Pessoa("Carol", 25);

// Estabelecendo relações de filho
pessoa1.adicionarFilho(pessoa2);
pessoa2.adicionarFilho(pessoa3);

// Imprimindo informações
console.log(pessoa1.obterInformacoes()); // Alice, 30 anos, tem um filho chamado Bob
console.log(pessoa2.obterInformacoes()); // Bob, 35 anos, tem um filho chamado Carol
console.log(pessoa3.obterInformacoes()); // Carol, 25 anos
