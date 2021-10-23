// Importamos nuestro array
const movies = require('./movies')


//EJERCICIO 1
   function cuentaMuestra (pelis,anio) {

     let contador = 0
   movies.forEach((movies) => {
      if (movies.Year==anio) {
         contador++
      }
      
   })
   console.log("la cantidad de peliculas del año ",anio, "es ",contador)
   
}
function ejercicio1 () {
  
for (let j=2005;j<2018;j++){
cuentaMuestra(movies,j)
}
console.log("\n")
}

//EJERCICIO 2
function ejercicio2 () {
var nameMovie = movies.map(function (movies) {
   return movies.Title

})

console.log("los títulos de las películas son: ",nameMovie,"\n")
}

//EJERCICIO 3
function ejercicio3 () {

   let contadorImag = 0

   movies.forEach((movies) => {

   console.log("el total de imágenes de ", movies.Title, "es: ",movies.Images.length)
     contadorImag = contadorImag + movies.Images.length
           
   })
console.log("el total de imágenes de todas las películas es: ",contadorImag, "\n")
}

//EJERCICIO 4 y 5
function ejercicio4_5 () {
let porcentajePeliEstrenada = 0
let peliSinEstrenar = 0
let contPelis = 0
movies.forEach((movies) => {

   contPelis++

   if (movies.ComingSoon) {
      peliSinEstrenar ++
   }
           
   })
   porcentajePeliEstrenada = (peliSinEstrenar *100)/contPelis
   console.log("el total de películas es : ",contPelis)
   console.log("el total de películas sin estrenar es : ",peliSinEstrenar)
   console.log("el % de películas sin estrenar es : ",porcentajePeliEstrenada.toFixed(2),"%") 
}
console.log("\n")
console.log("EJERCICIO 1 \n")
   ejercicio1()
console.log("EJERCICIO 2 \n")
   ejercicio2()
console.log("EJERCICIO 3 \n")
   ejercicio3()
console.log("EJERCICIOS 4 y 5 \n")
   ejercicio4_5()
console.log("\n")


// Ejecucion
