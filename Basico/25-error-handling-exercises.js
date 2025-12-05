// 1. Captura una excepción utilizando try-catch
console.log("Ejercicio 1")


function capturarError() {
    try {

        console.log("Comenzando el bloque try.");
        
        funcionQueNoExiste(); 
        
        console.log("El código en try se ejecutó completamente."); 
        
    } catch (error) {
        console.log("Tipo de Error:", error.name);
        console.log("Mensaje de Error:", error.message);
        console.error("El programa ha manejado el error y puede continuar.");
    }
}

capturarError();

// 2. Captura una excepción utilizando try-catch y finally
console.log("==================================================================")
console.log("Ejercicio 2")

function ejecutarCodigoConError() {
    try {

        console.log("Comenzando el bloque try.");
        
        funcionQueNoExiste(); 
        
        console.log("El código en try se ejecutó completamente."); 
        
    } catch (error) {
        console.log("Tipo de Error:", error.name);
        console.log("Mensaje de Error:", error.message);
        console.error("El programa ha manejado el error y puede continuar.");
    }finally{
        console.log("Mensaje que siempre se mostrara al final de la captura haya o no error")
    }
}

ejecutarCodigoConError()

// 3. Lanza una excepción genérica
console.log("==================================================================")
console.log("Ejercicio 3")

function lanzamientoGenerico() {
    try {

        console.log("Comenzando el bloque try.");
        
        funcionQueNoExiste(); 
        
        console.log("El código en try se ejecutó completamente."); 

        throw new Error()
        
    } catch (error) {
        console.log("Tipo de Error:", error.name);
        console.log("Mensaje de Error:", error.message);
        console.error("El programa ha manejado el error y puede continuar.");
    }finally{
        console.log("Mensaje que siempre se mostrara al final de la captura haya o no error")
    }
}

lanzamientoGenerico()


// 4. Crea una excepción personalizada
console.log("==================================================================")
console.log("Ejercicio 4")


class ErrorPersonalizado extends Error{
    constructor(message, alert){
        super(message)
        
    }
}

// 5. Lanza una excepción personalizada
console.log("==================================================================")
console.log("Ejercicio 5")

try {
    
    asdassa()
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
}



// 6. Lanza varias excepciones según una lógica definida
console.log("==================================================================")
console.log("Ejercicio 6")

function procesarOrden(nombreProducto, cantidad) {
    
    // --- Lógica de Validación 1: Producto ---
    if (!nombreProducto || nombreProducto.trim() === "") {
        // Lanzamos un error de tipo estándar con un mensaje descriptivo
        throw new Error("El nombre del producto no puede estar vacío.");
    }
    
    // --- Lógica de Validación 2: Cantidad numérica ---
    if (typeof cantidad !== 'number' || isNaN(cantidad)) {
        // Lanzamos un TypeError si el tipo de dato no es un número
        throw new TypeError("La cantidad debe ser un valor numérico.");
    }

    // --- Lógica de Validación 3: Cantidad positiva ---
    if (cantidad <= 0) {
        // Lanzamos otro error estándar para una regla de negocio
        throw new Error("La cantidad ordenada debe ser mayor a cero.");
    }

    // --- Si todas las validaciones son correctas ---
    return `Orden procesada: ${cantidad} unidades de "${nombreProducto}".`;
}

console.log(procesarOrden("Pan","sda"))


// 7. Captura varias excepciones en un mismo try-catch
console.log("==================================================================")
console.log("Ejercicio 7")



// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("==================================================================")
console.log("Ejercicio 8")




// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("==================================================================")
console.log("Ejercicio 9")



// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log("==================================================================")
console.log("Ejercicio 10")
