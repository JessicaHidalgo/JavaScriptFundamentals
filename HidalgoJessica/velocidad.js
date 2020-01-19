//El límite de velocidad es igual a 70

let v=[90]
function infraction(v){
if (v>70){
    let y    
    y=Math.floor((v-70)/5)+1
    console.log("Cuidado lleva", " ", y, "puntos", "por llevar una velocidad de ", v, "km/h")

if (y>=12){
        console.log("Lo sentidos su licencia ha sido suspendida por exceder los 12 puntos máximos con"," ",v,"km/h"," ","Lo cual representa", " ",y, "puntos")
    }
    return y
    
}
}
console.log(infraction(v));