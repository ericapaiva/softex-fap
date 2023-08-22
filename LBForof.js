/* vamos criar uma lista de objetos usuarios for of*/

const usuarios = [
    {nome: "Robinson", idade: 18}, // posição inicial 0
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maira", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
];
// estou imprimindo nome e idade 
/* for (let item of usuarios){
    console.log(item.nome);
    console.log(item.idade);
} */

for (let item of usuarios){
    console.log(`nome: ${item.nome}, Idade: ${item.idade} anos.`);
}