//Sumas de los múltiplos de 3 y de 5
let variable = 20;
let y = 0;
let j = 0;
function multiplos (variable){
let x = Math.floor((variable) / 3)
console.log("Los múltiplos de 3 que están en el número 10 son",x)
let z = Math.floor((variable) / 5)
console.log("Los múltiplos de 5 que están en el número 10 son",z)
for (let h = 1; h <= z; h++) {
    j =j+ h * 5;
    console.log("h*5",j)
}
for (let i = 1; i <= x; i++) {
    y = y + i * 3
    console.log("i*5",y)
}
let suma=j+y
return suma
}
console.log(multiplos(variable));
