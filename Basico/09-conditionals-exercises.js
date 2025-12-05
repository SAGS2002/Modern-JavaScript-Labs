// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("Ejercicio 1:")

let myName = "Sebas"

const miNombre = myName == "Sebas" ? "Mi nombre es Sebas" : "Ese no es mi nombre"

console.log(miNombre)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("Ejercicio 2:")

let usuario = "Sebas"

let password = "Sebas123"

if (usuario == "Sebas" && password == "Sebas123") {
    console.log("Usuario y Contraseña correctos")
}else if(usuario != "Sebas"){
    console.log("El usuario es incorrecto")
}else if(password != "Sebas123"){
    console.log("La contraseña es incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("Ejercicio 3:")

let num1 = 2
let num2 = -2
let num3 = 0

if(num1 >= 2 && num2 <= -1 && num3 == 0) {
    console.log("El numero1 es positivo, el numero2 es negativo y el numero3 es igual a 0")
}else if(num1 <= 1){
    console.log("El numero 1 no es postivo")
}else if(num2 >= -1){
    console.log("El numero 2 no es negativo")
}else if(num3 != 0){
    console.log("El numero 3 no es igual a cero")
}else{
    console.log("El numero1 no es positivo, el numero2 no es negativo y el numero3 no es igual a cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("Ejercicio 4:")

let age = 20

if(age >= 18){
    console.log("Si puede votar y es mayor de edad")
}else{
    console.log(`No puede votar, su edad es ${age}`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("Ejercicio 5:")

const adulto = age >= 18 ? "Es adulto" : "Es menor"
console.log(adulto)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("Ejercicio 6:")

let mes = 3


if(mes >= 3 && mes <= 5){
    console.log("Primavera")
}else if(mes >= 6 && mes <=8){
    console.log("Verano")
}else if(mes >= 9 && mes <=11){
    console.log("Otoño")
}else{
    console.log("Invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("Ejercicio 7:")

if(mes < 1 || mes > 12){
}if(mes === 2){
    console.log("Este mes tiene 28 dias")
}else if(mes === 4 || mes === 6 || mes === 9 || mes === 11 ){
    console.log("este mes tiene 30 dias")
}else{
    console.log("este mes tiene 31 dias")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("Ejecicio 8:")

let idioma = "Italiano"
let saludo

switch (idioma) {
    case "Ingles":
        saludo = "Hello"    
        break
    case "Español":
        saludo = "Hola"    
        break
    case "Italiano":
        saludo = "Ciao"    
        break
    case "Frances":
        saludo = "Bonjour"    
        break
    case "Portugues":
        saludo = "Olá"    
        break
    case "Aleman":
        saludo = "Hallo"    
        break
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("Ejercicio 9:")

let newMes = 3
let estacion

switch (newMes) {
    case 0:
        estacion = "Invierno"
        break;
    case 1:
        estacion = "Invierno"
        break;
    case 2:
        estacion = "Invierno"
        break;
    case 3:
        estacion = "primavera"
        break;
    case 4:
        estacion = "primavera"
        break;
    case 5:
        estacion = "primavera"
        break;
    case 6:
        estacion = "Verano"
        break;
    case 7:
        estacion = "Verano"
        break;
    case 8:
        estacion = "Verano"
        break;
    case 9:
        estacion = "Otoño"
        break;
    case 10:
        estacion = "Otoño"
        break;
    case 11:
        estacion = "Otoño"
        break;

    default:
        estacion = "Numero de mes no existente"
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("Ejercicio 10:")


let dias

switch (newMes) {
    case 0:
        dias = "31 dias"
        break;
    case 1:
        dias = "28 dias"
        break;
    case 2:
        dias = "31 dias"
        break;
    case 3:
        dias = "30 dias"
        break;
    case 4:
        dias = "31 dias"
        break;
    case 5:
        dias = "30 dias"
        break;
    case 6:
        dias = "31 dias"
        break;
    case 7:
        dias = "31 dias"
        break;
    case 8:
        dias = "30 dias"
        break;
    case 9:
        dias = "31 dais"
        break;
    case 10:
        dias = "30 dias"
        break;
    case 11:
        dias = "31 dias"
        break;

    default:
        dias = "Numero de mes no existente"
}
console.log(dias)