/* vamos criar uma lista de objetos usuarios for in*/

const usuarios = [
    {nome: "Robinson", idade: 18}, // posição inicial 0
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maira", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
];
for (item in usuarios){
    console.log(`nome: ${usuarios[item].nome}, Idade: ${usuarios[item].idade} anos.`);
}

