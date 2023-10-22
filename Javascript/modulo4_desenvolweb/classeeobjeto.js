/* Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, 
pelo menos trÊs atributos e trÊs métodos para cada tipo de objeto. Para finalizar, 
demonstre esses objetos em js e exemplifique suas caracteristicas e ações. */

/*Objetos Materiais:

  Carro
Atributos:
Cor
Velocidade
Marca
Métodos:
Acelerar
Frear
Pintar */

class Carro {
    constructor(cor, marca) {
      this.cor = cor;
      this.velocidade = 0;
      this.marca = marca;
    }
  
    acelerar(incremento) {
      this.velocidade += incremento;
    }
  
    frear(decremento) {
      this.velocidade -= decremento;
    }
  
    pintar(novaCor) {
      this.cor = novaCor;
    }
  }
  
  const meuCarro = new Carro("Vermelho", "Toyota");
  console.log("Meu carro é da marca " + meuCarro.marca);
  meuCarro.acelerar(50);
  console.log("Velocidade: " + meuCarro.velocidade + " km/h");
  meuCarro.pintar("Azul");
  console.log("Agora meu carro é " + meuCarro.cor);
  

  /* Objetos materiais 2
  Livro
Atributos:
Título
Autor
Número de Páginas
Métodos:
Abrir
Fechar
Trocar de Página */

class Livro {
    constructor(titulo, autor, numPaginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
      this.paginaAtual = 1;
    }
  
    abrir() {
      console.log("Abrindo o livro: " + this.titulo);
    }
  
    fechar() {
      console.log("Fechando o livro: " + this.titulo);
    }
  
    trocarPagina(pagina) {
      if (pagina >= 1 && pagina <= this.numPaginas) {
        this.paginaAtual = pagina;
        console.log("Página atual: " + this.paginaAtual);
      }
    }
  }
  
  const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1000);
  meuLivro.abrir();
  meuLivro.trocarPagina(50);
  meuLivro.fechar();
  

  /*Objetos Abstratos:

Conta Bancária
Atributos:
Saldo
Titular
Número da Conta
Métodos:
Depositar
Sacar
VerificarSaldo */

class ContaBancaria {
    constructor(numeroConta, titular) {
      this.numeroConta = numeroConta;
      this.titular = titular;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente");
      }
    }
  
    verificarSaldo() {
      console.log("Saldo da conta de " + this.titular + ": R$" + this.saldo);
    }
  }
  
  const minhaConta = new ContaBancaria("12345", "João");
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.verificarSaldo();
  
  /* Objetos abstratos 2
  Calendário
Atributos:
Data Atual
Ano Bissexto
Feriados
Métodos:
Avançar um dia
Verificar se é feriado
Definir feriado */

class Calendario {
    constructor(ano) {
      this.dataAtual = new Date(ano, 0, 1);
      this.anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
      this.feriados = [];
    }
  
    avancarUmDia() {
      this.dataAtual.setDate(this.dataAtual.getDate() + 1);
    }
  
    verificarFeriado() {
      const dataStr = this.dataAtual.toLocaleDateString();
      if (this.feriados.includes(dataStr)) {
        return "É feriado!";
      } else {
        return "Não é feriado.";
      }
    }
  
    definirFeriado(data) {
      this.feriados.push(data.toLocaleDateString());
    }
  }
  
  const meuCalendario = new Calendario(2023);
  meuCalendario.definirFeriado(new Date(2023, 0, 1));
  meuCalendario.definirFeriado(new Date(2023, 12, 25));
  meuCalendario.avancarUmDia();
  console.log("Data atual: " + meuCalendario.dataAtual.toLocaleDateString());
  console.log(meuCalendario.verificarFeriado());
  