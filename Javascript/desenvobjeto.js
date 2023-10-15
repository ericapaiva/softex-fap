/*Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus metodos dever ser : Buscar saldo, depósito, saque e numero da conta.
observaçoes: 
- buscar saldo deve retornar o valor do saldo;
- para o deposito, você deverá passar um valor como parâmetro e adcioná-lo no saldo final do objeto;
- para saque , você deverá passar um valor como parâmetro e subtrai-lo no saldo final do objeto;
- o numero da conta deve retornar o numero da conta.*/

// Definindo o objeto Banco
const Banco = {
  conta: "12345-6",
  saldo: 1000,
  tipoDeConta: "Corrente",
  agencia: "7890",

  // Método para buscar o saldo
  buscarSaldo: function () {
    return this.saldo;
  },

  // Método para realizar um depósito
  deposito: function (valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    } else {
      return "O valor do depósito deve ser maior que zero.";
    }
  },

  // Método para realizar um saque
  saque: function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    } else if (valor <= 0) {
      return "O valor do saque deve ser maior que zero.";
    } else {
      return "Saldo insuficiente para realizar o saque.";
    }
  },

  // Método para retornar o número da conta
  numeroDaConta: function () {
    return this.conta;
  },
};

// Exemplo de uso do objeto Banco
console.log(`Número da conta: ${Banco.numeroDaConta()}`);
console.log(`Saldo atual: R$ ${Banco.buscarSaldo()}`);
console.log(Banco.deposito(500));
console.log(Banco.saque(300));
console.log(`Saldo atual: R$ ${Banco.buscarSaldo()}`);
