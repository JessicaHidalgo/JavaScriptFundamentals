let a = [0,1, 2, 3, 4, 5];
function parnon(a) {
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            console.log("El número es non", "",a[i])
        }
        else if (i % 2 === 0) {
                console.log("El número es par", a[i])
            }
        
    }
    return a
}
console.log(parnon(a))