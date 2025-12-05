// 1. Crea una variable para cada operación aritmética\
console.log("Ejercicio 1")

let a = 6
let b = 12

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)
console.log(a ** b)

a++
console.log(a)
b--
console.log(b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("Ejercicio 2")

let c = 22
console.log(c)

c += 22
console.log(c)

c -= 22
console.log(c)

c *= 22
console.log(c)

c /= 22
console.log(c)

c %= 22
console.log(c)

c **= 22
console.log(c)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Ejercicio 3")

console.log(10 < 20)
console.log(10 <= 20)
console.log(10 == "10")
console.log("10" === "10")
console.log(10 !== 20)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Ejercicio 4")

console.log(10 > 20)
console.log(10 >= 20)
console.log(10 == "11")
console.log("10" === 11)
console.log(10 !== 10)

// 5. Utiliza el operador lógico and
console.log("Ejercicio 5")

console.log(10 > 20 && 20 < 10)
console.log(10 < 20 && 20 > 10 && 40 > 20)

// 6. Utiliza el operador lógico or
console.log("Ejercicio 6")

console.log(10 >= 20 || 20 <= 10)
console.log(10 <= 20 || 20 >= 10 || 40 >= 20)

// 7. Combina ambos operadores lógicos
console.log("Ejercicio 7")

console.log(10 > 20 && 20 < 10 || 40 < 20)
console.log(10 <= 20 || 20 >= 10 && 40 >= 20)

// 8. Añade alguna negación
console.log("Ejercicio 8")

console.log(!(10 > 20 && 20 < 10 || 40 < 20))
console.log(!(10 <= 20 || 20 >= 10 && 40 >= 20))

// 9. Utiliza el operador ternario
console.log("Ejercicio 9")

let entendiElEjercicio = true
    entendiElEjercicio ? console.log("Si entendi el ejercicio") : console.log("No entedi el ejercicio")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Ejercicio 10")

console.log(!((20 + 20) == 40 && 40 <= (20+20)))