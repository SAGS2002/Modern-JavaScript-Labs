/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function err(a,b) {
    if (a<b) {
        console.log("Funciona a es menor que b")
    }else{
        console.error("Error: A no es menor que B", new Error("a siempre debe ser menor que B"))
    }
}

err(23,13)


// 2. Crea una función que utilice warn correctamente

function warn(a,b) {
    if (a<b) {
        console.log("Funciona a es menor que b")
    }else{
        console.warn("Advertencia: A no es menor que B")
    }
}

warn(23,13)


// 3. Crea una función que utilice info correctamente

// 4. Utiliza table

let data = [
    {user:"Sebas", age:18},
    {user:"Andres", age:19}

]
console.table(data)

// 5. Utiliza group

console.group("To-do list:")
console.log("Practicar js")
console.log("Practicar js 2")
console.log("Practicar js 3")
console.groupEnd("To-do list")

// 6. Utiliza time
console.time("tiempo de ejecucion")
for (let index = 0; index < 100; index++) {
}
console.timeEnd("tiempo de ejecucion")


// 7. Valida con assert si un número es positivo
let a=-1

console.assert(a>0, "No es numero positivo")

// 8. Utiliza count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// 10. Utiliza clear

console.clear()