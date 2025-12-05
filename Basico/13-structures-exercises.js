// 1. Crea un array que almacene cinco animales
console.log("Ejercicio 1")

let animals = ["perro", "gato", "leon", "lobo", "tigre"]

console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
console.log("Ejercicio 2")

animals.push("pantera")
animals.unshift("Leopardo")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
console.log("Ejercicio 3")

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
console.log("Ejercicio 4")

let libs = new Set()

libs = new Set(["lib1", "lib2", "lib3", "lib4", "lib5"])
console.log(libs)

// 5. Añade dos más. Uno de ellos repetido
console.log("Ejercicio 5")

libs.add("lib6")
libs.add("lib5")
console.log(libs)

// 6. Elimina uno concreto a tu elección
console.log("Ejercicio 6")

libs.delete("lib4")
console.log(libs)

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("Ejercicio 7")
let mes = new Map()


mes = new Map([
    [1, "Enero"], 
    [2, "Febrero"],
    [3, "Marzo"], 
    [4, "Abril"],
    [5, "Mayo"], 
    [6, "Junio"],
    [7, "Julio"], 
    [8, "Agosto"],
    [9, "Septiembre"], 
    [10, "Octubre"],
    [11, "Noviembre"], 
    [12, "Diciembre"],
    
])
console.log(mes)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("Ejercicio 8")

console.log(mes.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("Ejercicio 9")

mes.set("meses de verano", ["junio", "julio", "agosto"])

console.log(mes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("Ejercicio 10")

let myArray = ["Sebastian", "Gallardo", 18]

let mySet = new Set()

mySet = new Set(myArray)

let myMap = new Map([
    ["Mis datos", mySet]
])
console.log(myMap)