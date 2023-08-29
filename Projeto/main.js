// format on save  => check
// formatter prettier => prettier
// Auto save  => off
/* function name(params) {
        console.log("olá mundo!");
        console.log("olá mundo!");
        console.log("olá mundo!");
} */
/* Crie um objeto vazio chamado pessoa em js*/
let pessoa = {};

console.log(pessoa);

/*Adicione a propriedade "nome"com o valor "João" ao objeto pessoa*/

pessoa.nome = "João";

console.log(pessoa);

/* Acesse o o valor da propriedade "idade" de um objeto chamado "usuario" */

var usuario = {
        nome: "Julio",
        idade: 25,
};
let idadeDoUsuario = usuario.idade;

console.log(idadeDoUsuario);

/* Suponha que você tenha um objeto "produto" com a propriedade "preço" definida como 50,
como vc altera o valor dessa propriedade para 75? */

let produto = {
        preço: 50,
};
produto.preço = 75;

console.log(produto);

/* como você remove a propriedade "email" de um objeto chamado "contato" */

let contato = {
        nome: "maria",
        email: "maria.lima@hotmail.com",
};
delete contato.email;
console.log(contato);

/* Como você adciona uma propriedade "endereço" com o valor  "Rua A, 123" a um objeto existente 
chamado "cliente" */

let cliente = {};

cliente.endereço = " Rua A, 123";

console.log(cliente);

/* Se vc tem um objeto "empresa" com uma propriedade "departamentos" como vc
acessa o nome do primeiro departamento? */

let empresa = {
        departamentos: ["vendas", "financeiro", "rh"],
};
console.log(empresa.departamentos[0]);

/*suponha que vc está desenvolvendo um app de agendamento e precisa representar os dias da semana. 
Como vc usaria enums para isso e qual seria o beneficio? */

let diasDaSemana = {
        DOMINGO: "Domimgo",
        SEGUNDA: "Segunda-feira",
        TERCA: "Terça-feira",
        QUARTA: "Quarta-feira",
        QUINTA: "Quinta-Feira",
        SEXTA: "Sexta-feira",
        SABADO: "Sabado",
};
let dia = diasDaSemana.TERCA;
console.log(dia);

/* Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. 
Como você usaria enums para essa situação? */

let tiposDeInimigos = {
        Soldado: 1,
        Mago: 2,
        Monstrodolagonesse: 3,
};
let tipoInimigo = tiposDeInimigos.Monstrodolagonesse;
console.log(tipoInimigo);

/* vc está criando um app de reserva de passagens aereas e precisa representar os diferentes
tipos de classe(Econômica, executiva, primeira classe.)Como vc usaria enums para isso? */

let tiposDeClasse = {
        ECONOMICA: "Classe economica",
        EXECUTIVA: "Classe executiva",
        PRIMEIRACLASSE: "Primeira classe",
};
let classe = tiposDeClasse.PRIMEIRACLASSE;
console.log(classe);
