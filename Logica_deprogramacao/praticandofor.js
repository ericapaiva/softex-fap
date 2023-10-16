/* imprimindos as constantes em arays for in e for of */

const numeros = [150, 100, 200, 250, 50];
const palavras = ["cadeira", "lapis", "caneta","caderno", "mesa"];
const logicos = [true, false, false, true,true];

/* for(let item in numeros){
    console.log(numeros[item]);
}
for( let item in palavras){
    console.log(palavras[item]);
}
for( let item in logicos){
    console.log(logicos[item]);
} */
/* imprimindos as constantes em arays for of */


for (let elemento of numeros){
    console.log(elemento);
}
for (let elemento of palavras){
    console.log(elemento);
}
for (let elemento of logicos){
    console.log(elemento);
}