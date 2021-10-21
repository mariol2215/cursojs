let sumarNumeros = [10,20,10]
var suma =0
var promedio =0

for (var i= 0; i < sumarNumeros.length; i++)
{
        suma = suma + sumarNumeros[i]
    
}
promedio = suma/sumarNumeros.length
console.log("la suma del vector es " +suma)
console.log("el promedio del vector es " +promedio)

let personas = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]   
let contador = 0
let contador2 = 0

for (const age of personas) {
    if (age > 18)
    {
    contador++
    } 
    else {
        contador2++
    }
}
console.log("mayor", contador)
console.log("menor", contador2)
