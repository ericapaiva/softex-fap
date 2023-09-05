//iniciando projeto de cadastro

const aluno1 = {
  matricula: 1,
  nome: "Icaro Lira",
  notas: [8, 7, 6],
};
const aluno2 = {
  matricula: 2,
  nome: "João Daniel Ribeiro",
  notas: [10, 5.5, 6],
};

const alunos = [aluno1, aluno2];
let matriculaBusca;
let loop = true;
let gerador_matricula = 2;

const readline = require("readline-sync");

while (loop) {
  console.log("=== CADASTRO DE ALUNOS ===");
  console.log("=========MENU========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todos os alunos");
  console.log("2 - Cadastrar um novo aluno");
  console.log("3 - Buscar um aluno");
  console.log("4 - Alterar um aluno");
  console.log("5 - Remover um aluno");
  console.log("=======================");
  let opcao = readline.questionInt("Escolha uma opção:");

  switch (opcao) {
    case 1:
      console.log("Listando todos os alunos");
      console.log("------------------");
      for (const a of alunos) {
        let soma = 0;
        console.log(`Matricula: ${a.matricula}`);
        console.log(`Nome: ${a.nome}`);
        for (let i = 0; i < a.notas.length; i++) {
          console.log(`\t - Nota ${i + 1}: ${a.notas[i]}`);
          soma += a.notas[i];
        }
        let media = soma / a.notas.length;
        console.log(`\t - Média: ${media}`);
      }
      break;
    case 2:
      let nomeAluno = readline.question("Digite o nome do aluno");
      let notasAluno = [];
      for (let i = 0; i < 3; i++) {
        notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}:`);
      }
      gerador_matricula++;
      const aluno = {
        matricula: gerador_matricula,
        nome: nomeAluno,
        notas: notasAluno,
      };
      alunos.push(aluno);
      console.log("Aluno cadastrado com sucesso");
      readline.keyInPause();

    case 3:
      matriculaBusca = readline.questionInt(
        " Matricula do aluno que deseja buscar?"
      );
      for (const a of alunos) {
        if (a.matricula === matriculaBusca) {
          console.log("Resultado da busca");
          console.log("--------------");
          console.log(`Matricula: ${a.matricula}`);
          console.log(`Nome: ${a.nome}`);
          for (let i = 0; i < a.notas.length; i++) {
            console.log(`\t - Nota ${i + 1}: ${a.notas[i]}`);
          }
        }
      }

    case 0:
      console.log("saindo do sistema");
      loop = false;
      break;
    default:
      console.log("opção invalida");
      break;
  }
}
