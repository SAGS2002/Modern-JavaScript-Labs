// 1. Crea una clase que reciba dos propiedades

class Me{
    constructor(name, age){
        this.name=name
        this.age=age
    }

}


let yo = new Me("Sebastian",18)

console.log(yo);


// 2. Añade un método a la clase que utilice las propiedades

class Me2 {
    constructor(name, age){
        this.name=name
        this.age=age
    }

    saludar(){

        console.log(`Hola!, mi nombre es ${this.name} y tengo ${this.age} años`)
    }
}

let yo2 = new Me2("Sebastian", 18)

yo2.saludar()


// 3. Muestra los valores de las propiedades e invoca a la función

console.log(yo2.name);
console.log(yo2.age);

yo2.saludar()



// 4. Añade un método estático a la primera clase

Me.sum = function(a, b){
    console.log(`La suma de ${a} mas ${b} es igual a ${a+b}`)
} 


// 5. Haz uso del método estático

Me.sum(23,512)


// 6. Crea una clase que haga uso de herencia

class Student extends Me2{

    constructor(name, age, id){
        super(name, age)
        this.id=id
    }

    saludar(){
        console.log(`Hola!, mi nombre es ${this.name} y tengo ${this.age} años y mi id de estudiante es ${this.id}`)
    }
}

let estudiante = new Student("sebastian", 18, 256138)

estudiante.saludar()


// 7. Crea una clase que haga uso de getters y setters

class PrivateData{
    #name
    #age
    #id

    constructor(name, age, id){
        this.#name=name
        this.#age=age
        this.#id=id
    }


    get name(){
        return this.#name
    }

    set id(id){
        this.#id = id
    }

    get id(){
        return this.#id
    }
    
}


let private = new PrivateData("Sebas", 18, "232312")

private.id="23123"

console.log(private.name);
console.log(private.id);

// 8. Modifica la clase con getters y setters para que use propiedades privadas




// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 