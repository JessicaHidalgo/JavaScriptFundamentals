
let x=20;

function primes (x){
for (let i=2;i<=x;i++){
    if (i%2===0||i%3===0||i%5===0||i%7===0||i%11===0||i%13===0){
continue 
}
console.log(i+" ");
}
}
console.log(primes(x));