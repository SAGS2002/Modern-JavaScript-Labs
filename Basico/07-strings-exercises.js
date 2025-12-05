// 1. Concatena dos cadenas de texto
console.log("Ejercicio 1:")

let myName = "Sebastian"

console.log("Hola, " + myName + "!")

// 2. Muestra la longitud de una cadena de texto
console.log("Ejercicio 2:")

console.log(myName.length)

// 3. Muestra el primer y último carácter de un string
console.log("Ejercicio 3:")

console.log(myName[0])
console.log(myName[8])

// 4. Convierte a mayúsculas y minúsculas un string
console.log("Ejercicio 4:")

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log("Ejercicio 5:")

console.log(`Hola, esto es 
una cadena
de texto en varia lineas`)

// 6. Interpola el valor de una variable en un string
console.log("Ejercicio 6:")

let email = "gallardosebas8668@gmail.com"

console.log(`Hola ${myName}
tu correo es: ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log("Ejercicio 7:")

let algo = "esto es un string con guieones en los espacios en blanco"

console.log(algo.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Ejercicio 8:")

console.log(algo.includes("string"))

// 9. Comprueba si dos strings son iguales
console.log("Ejercicio 9:")

console.log(myName === algo)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("Ejercicio 10")

console.log(myName.length == algo.length)
