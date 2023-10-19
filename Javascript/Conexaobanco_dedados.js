const Sequelize = require("sequelize");

//em "storage" informar o nome do banco e o local onde sera salvo.
const sequelize = new Sequelize({
  storage: "./database.sqlite",
  dialect: "sqlite",
});

// Para testar conexao, usar o metodo .authenticate(). Como prerequisito para funcionamento do "await", o codigo precisa se encapsulado com uma funcao IIFE: (async () => {codigo})();
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão realizada com sucesso!!!");
  } catch (error) {
    console.error("Erro na conexão: ", error);
  }
})();
