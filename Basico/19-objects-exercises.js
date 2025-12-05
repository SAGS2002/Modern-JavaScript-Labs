// 1. Crea un objeto con 3 propiedades
console.log("Ejercicio 1");

let person = {
    name: "Sebastian",
    age: 18,
    email: "holasebastian@gmail.com"
}

// 2. Accede y muestra su valor
console.log("Ejercicio 2");

console.log(person)
console.log(person.name + " " + person.age + " " + person.email)


// 3. Agrega una nueva propiedad
console.log("Ejercicio 3");

person.phone = "3104512345"
console.log(person)


// 4. Elimina una de las 3 primeras propiedades
console.log("Ejercicio 4");

delete person.phone
console.log(person)

// 5. Agrega una función e invócala
console.log("Ejercicio 5");

person.carrer = function (name, carrera) {
    console.log(`El estudiante ${name} estudia la carrera ${carrera}`)
}

person.carrer("Sebastián", "Analisis de sistemas")

console.log(person);

// 6. Itera las propiedades del objeto
console.log("Ejercicio 6");

for (key in person){
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado
console.log("Ejercicio 7");

person.notes = {
    logic: 20,
    adminRed: 19,
    mates: 14
}
console.log(person)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("Ejercicio 8");

console.log(`Tu nota en logica es ${person.notes.logic}`)

// 9. Comprueba si los dos objetos creados son iguales
console.log("Ejercicio 9");

console.log(person == person.notes)


// 10. Comprueba si dos propiedades diferentes son iguales
console.log("Ejercicio 10");

console.log(person.age === person.notes.logic)
