function fibonacci(n){
    if(n <= 1){
        return n;
    }else{
       return fibonacci(n-1) + fibonacci(n-2);
}
}
let num = 8;
console.log(`o oitavo elemento da sequencia de fibonacci ${num} é ${fibonacci(num)}`);
