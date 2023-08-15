
function somaRecursiva(n){
    if(n === 1){
        return 1;
    }else{
        return n + somaRecursiva(n - 1);

    }
    
}
const num = 8;
console.log(`a somaRecursiva de 1 até ${num} é ${somaRecursiva(num)}`);