// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("Ejercicio 1")

for (let i = 1; i <= 20; i++) {
    console.log(`Numero ${i}`)
}                                                                                  

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("Ejercicio 2")

let suma = 0 

for(let i = 0; i <= 100; i++){
    suma += i; 
}
console.log(`el resultado es:` + suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("Ejercicio 3")


for (let i = 1; i <= 50; i++){
    if (i % 2 === 0){
        console.log(`los numero pares son:` + i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("Ejercicio 4")

let nombres = ["Sebastian", "Andres", "Elianny", "Grisel"]

for(let value of nombres){
    console.log(value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("Ejercicio 5")

let vocals = "vocales";
let contador = 0;
const vocales = "aeiouAEIOU"; 

for (let i = 0; i < vocals.length; i++) {
  if (vocales.indexOf(vocals[i]) !== -1) {
    contador++;
  }
}

console.log(`El número de vocales es: ${contador}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
//console.log("Ejercicio 6")

let nums = [2, 3, 5, 6, 7, 12]

for(let valor = nums; valor * nums;){
    console.log(valor)
}


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
//console.log("Ejercicio 7")

let tabla = 5

for(let i = 1; i <= 10; i++){
    console.log(`${tabla} x ${i} = ` + tabla * i)
}


// 8. Usa un bucle para invertir una cadena de texto
console.log("Ejercicio 8")

let invert = "Sebas"
let textoInvert = ""

for (let i = invert.length - 1; i >= 0; i--) {
    textoInvert += invert[i];
  }
  console.log(textoInvert)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("Ejercicio 9")

let secuencia = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < 10; i++) {
    secuencia.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  console.log(secuencia)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("Ejercicio 10")

let newNums = [2, 30 ,4, 50, 6, 10, 3, 12]

let mayores = []

for (let i = 0; i < newNums.length; i++) {
    if(newNums[i] >= 10){
        mayores.push(newNums[i])
    }
    
}
console.log(mayores )