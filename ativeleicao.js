/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. 
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e,
também, a quantidade de votos de cada candidato, os brancos e nulos.*/

const input = require('readline-sync')

// Inicialização dos votos
let candidato_X = 889;
let candidato_Y = 847;
let candidato_Z = 515;
let votosBranco = 0;
let votosNulos = 0;

// Função para verificar se um valor é um número válido
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Função para exibir os resultados da eleição
function exibirResultados() {
    console.log("Resultados da Eleição:");
    console.log("Candidato X:", candidato_X, "votos");
    console.log("Candidato Y:", candidato_Y, "votos");
    console.log("Candidato Z:", candidato_Z, "votos");
    console.log("Votos em Branco:", votosBranco, "votos");
    console.log("Votos Nulos:", votosNulos, "votos");

    if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
        console.log("Vencedor: Candidato X");
    } else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
        console.log("Vencedor: Candidato Y");
    } else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
        console.log("Vencedor: Candidato Z");
    } else {
        console.log("A eleição terminou em empate ou não houve votos válidos suficientes para um vencedor claro.");
    }
}

// Loop de votação
while (true) {
    const voto = input.question("Digite o número do candidato em quem você deseja votar (ou deixe em branco para finalizar a votação");

    if (voto === "") {
        exibirResultados();
        break;
    } else if (!isNumber(voto)) {
        console.log("Por favor, insira um número válido para votar.");
        continue;
    }

    const votoNum = parseInt(voto);

    if (votoNum === 0) {
        votosBranco++;
    } else if (votoNum === 1) {
        candidato_X++;
    } else if (votoNum === 2) {
        candidato_Y++;
    } else if (votoNum === 3) {
        candidato_Z++;
    } else {
        votosNulos++;
    }
}

