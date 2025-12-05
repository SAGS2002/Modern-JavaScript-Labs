// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("Ejercicio 1");

myArray= [1,2,3,4]
myArray2= [5,6,7,8]

let [num1, num2] = myArray
console.log(num1, num2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("Ejercicio 2");

let [num3 = 0, num4 = 0, num5 = 0, num6 = 0, num7 = 0] = myArray
console.log(num3, num4, num5, num6, num7)


// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("Ejercicio 3");

let person = {
    name: "Sebastian",
    age: 18,
    alias: "Sebas",
    job: {
        name: "Programador",
        exp: 15,
    }
}

let person2={
    carrer: "Analisis de sitemas",
    period: "Segundo semestre",
}

let {name, age, alias} = person

console.log(`Nombre: ${name} Edad:${age} Alias:${alias}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("Ejercicio 4");

let {name:name2, age:age2} = person

console.log(name2, age2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("Ejercicio 5");

let {job: {name:name3, exp:exp2} } = person

console.log(name3, exp2)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("Ejercicio 6");

myArray3=[...myArray, ...myArray2]

console.log(myArray3);

// 7. Usa propagación para crear una copia de un array
console.log("Ejercicio 7");

myArray4=[...myArray]
console.log(myArray4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("Ejercicio 8");

person3 = {
    ...person,
    ...person2
}
console.log(person3);

// 9. Usa propagación para crear una copia de un objeto
console.log("Ejercicio 9");

let person4 = {
    ...person3
}
console.log(person4);

// 10. Combina desestructuración y propagación
console.log("Ejercicio 10");


let person5 = {
    ...person4
}
let {name:name4, age:age3, job: {name:name5}, carrer } = person

console.log(person5);
console.log(name4, age3, name5, carrer);