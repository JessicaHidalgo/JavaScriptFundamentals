let x=10;
let s=0;
function stars(x) {
    for (let i=0;i<=x;i++)
    {
        s=s+console.log("stars"," ",i,"*".repeat(i))
    }

}
console.log(stars(x));