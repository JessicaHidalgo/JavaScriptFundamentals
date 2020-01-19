//FizzBuzz algoritmo
let x =15; 
function fb (x) {
if (x%3===0 && x%5===0){
    console.log("Fizz Buzz")
}
    else if (x%5===0)
    
    {
    console.log("Buzz")
    }
    else if(x%3===0){
        console.log("Fizz")
    }
    else if (x!=Number)
    {
        console.log("Parece que esto no es un número, por favor digita un número :-)"," ","El tipo de variable es un  ",typeof(x))
    }
}
console.log(fb(x))