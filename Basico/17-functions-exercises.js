// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("Ejercicio 1:")

function sum(a=0 , b=0, c=0){
    console.log(a + b + c)
}

sum(12, 14, 39)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("Ejercicio 2:")


function may(numeros) {
    if (!numeros || numeros.length === 0) {
        return undefined;
      }

    let mayor = numeros[0]      
    for (let i = 1; i < numeros.length; i++) {
        if(numeros[i]> mayor){
            mayor = numeros[i]
        }
        
    }
    return mayor
}
const lista1 = [50, 123, 574, 1, 2,78]
const mayor1 = may(lista1)
console.log(`el numero mayor de ${lista1} es ${mayor1}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("Ejercicio 3:")

function voc(cadena) {  

let contador = 0;
const vocales = "aeiouAEIOU"; 

for (let i = 0; i < cadena.length; i++) {
  if (vocales.indexOf(cadena[i]) !== -1) {
    contador++;
  }
}
    return contador
}

let texto = "Hola Mundo"
let numeroVocales = voc(texto)
console.log(`El número de vocales en "${texto}" es: ${numeroVocales}`);

let texto2 = "Javascript es genial"
let numeroVocales2 = voc(texto2)
console.log(`El número de vocales en "${texto2}" es: ${numeroVocales2}`)


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("Ejercicio 4:")


let text = []
let newText

text = ["hola a todos", "esto es un array", "en mayuscula"]


function mayus(text){

        text = `${text}`
        newText = text
        newText = [newText.toUpperCase()]
        console.log(newText)    

}   
mayus(text)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("Ejercicio 5")



function prim(primo) {



    if(primo <=1){
        return false
    }
    if(primo <= 3){
        return true
    }
    if(primo % 2 === 0 || primo % 3 === 0){
        return false
    }

    let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false
    }
    i += 6;
  }
  return true
}
let primo = 9
console.log(prim(primo))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("ejercicio 6");

let newArray = []

function comun(array1, array2) {
   
    const elementosComunes = []
    for (const elemento of array1) {

        if (array2.includes(elemento) && !elementosComunes.includes(elemento)) {
            elementosComunes.push(elemento)
          }
    }
    return elementosComunes
}

const cadena1 = [14,9,6,8,5,123]
const cadena2 = [1,9,6,12,0,123]
const iguales = comun(cadena1, cadena2)
console.log(`los valores iguales de ambas cadenas son ${iguales}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("ejercicio 7")


function pares(array3){

    let suma = 0 

    for(const nums of array3) {
        if(nums % 2 === 0){
            suma += nums
        }
    }
    return suma
}

const arraysSum = [2,6,7,9,10]
const sumaArray = pares(arraysSum)
console.log(`la suma de los numeros pares de ${arraysSum} es: ${sumaArray}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("ejercicio 8");

function cuadrado(array4){

    let cuadrados = []

    for(const nums of array4) {
        cuadrados.push(nums*nums)
    }
    return cuadrados
}

const numeros2 = [2,5,7,3,4]
const alCuadrado = cuadrado(numeros2)
console.log(alCuadrado)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


function textRevers(txt) {  
        let caden= txt.split('')
        let rever = caden.reverse()
        let cadenRever = rever.join()
        cadenRever= cadenRever.replaceAll(",","")
        return cadenRever
}
const oneTxt = "Esta es una cadena de ejemplo"
const textoInvertido = textRevers(oneTxt)
console.log(`Cadena original: ${oneTxt}`)
console.log(`Cadena con palabras invertidas: ${textoInvertido}`)

// 10. Crea una función que calcule el factorial de un número dado
console.log("ejercicio 10")


function factorial(factor) {

    if (factor < 0) {
        throw new Error("El factorial no está definido para números negativos.")
      }
      if (factor === 0) {
        return 1
      }


    let factorTot = 1
    for (let i = 1; i <= factor; i++) {
        factorTot *= i
        
    }
    return factorTot
}


console.log(factorial(7))

