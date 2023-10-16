/* Dado um array de números [3, 7,2,9,5].Crie um loop 'for' que itere pelo array e exiba cada elemento no console. */

/* const numeros = [3, 7, 2, 9, 5];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
} */

/* Suponha que você tenha um objeto com valores númericos:{a: 10, b: 20, c: 30, d: 40}. 
Utilize um laço 'for...in'  para iterar pelas chaves do objeto e calcular a 
soma de todos os valores. */

/* const valores = {a: 10, b: 20, c: 30, d: 40};
let soma = 0;

for(let elemento in valores){
    soma += (valores[elemento])

}
console.log(soma); */

/* Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop ' for '
que itere pelo array, verificando se cada número é par. Se for par,
adcione-o um novo array. No final, exiba o novo array com os numeros pares.  */

/* const numeros = [12, 5, 8, 21, 16, 7];
const numPares =[];

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        numPares.push(numeros[i]);
    }
 

}
console.log(numPares);
 */

/* Considere um objeto com informações de estudantes : const estudantes = {Alice: 18, Bob: 20, Carol: 10, David: 21}; 
Utilize um loop 'for...in' para verificar se há um estudantecom idade de 19 anos. se sim , exiba 
' Nome do estudante : idade' no comsole. */

/* const estudantes = {Alice: 18, Bob: 20, Carol: 19, David: 21};

for(const nome in estudantes){
    if(estudantes[nome] === 19){
        console.log(`${nome}: ${estudantes}[nome]`);
    }
} */

/* Imagine que você tem uma matriz bidimensional representando uma grade de ponto: 
const pontos = [[2,5,8], [3,9,12], [4,6,10]]; Utilize dois loops 'for' aninhados para calcular
a soma de todos os elementos da matriz e exibir o resultado. */

const colchetes = [[2,5,8], [3,9,12], [4,6,10]];


let soma = 0;

 for( let colchete of colchetes){
    soma = soma + colchete[0]+ colchete[1]+ colchete[2]

}
console.log(soma); 

for( let colchete in colchetes){
    soma = soma + colchetes[colchete][0]+ colchetes[colchete][1]+ colchetes[colchete][2]

}
console.log(soma);

const numerooos = [4,6,2,7,9];
let somaa = 0
for (let item in numerooos){
    somaa = somaa+numerooos[item]

}
console.log(somaa);




    


