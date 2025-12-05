// 1. Escribe un comentario en una línea

//Hola, esto es un comentario en una sola linea

// 2. Escribe un comentario en varias líneas

/* Y esto es
un comentario 
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let newName = "Sebastián"
let age = 18
let iAmStudent = true
let undefinedValue
let nullValue = null
let newSymbol = Symbol("simbolounico")
let newBigInt = 23271341234781234123412341n

// 4. Imprime por consola el valor de todas las variables
console.log(newName)
console.log(age)
console.log(iAmStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(newSymbol)
console.log(newBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof newName)
console.log(typeof age)
console.log(typeof iAmStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof newSymbol)
console.log(typeof newBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
newName = "Andres"
age = 20
iAmStudent = false
newSymbol = Symbol("nuevosimbolo")
newBigInt = 54443542453245245365n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
newName = Symbol("nuevosimbolo")
age = 564765475756467869n
iAmStudent = "si, lo soy"
newSymbol = false
newBigInt = 18

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName = "Sebastián"
const myAge = 18
const iStudent = true
const nullValue2 = null
const newSymbol2 = Symbol("simbolounico")
const newBigInt2 = 23271341234781234123412341n


// 9. A continuación, modifica los valores de las constantes

// No se puede modificar el valor de una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
myName = "Andres"
console.log(myName)
*/