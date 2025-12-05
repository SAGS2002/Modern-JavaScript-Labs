//Sistema de Batalla RPG

class Personaje {
    constructor(nombre, vida=100) {
        this.nombre = nombre
        this.vida = vida
    }

    atacar(objetivo) {

    }
}


class Guerrero extends Personaje {

    constructor(nombre, vida, armadura=50, velocidad = 20) {
        super(nombre, vida)
        this.armadura = armadura
        this.velocidad = velocidad
    }

    atacar(objetivo) {
        let dmg = Math.floor(Math.random() * 16) + 10

        if (objetivo.armadura > 0) {
            let diss = (dmg * 0.50) - dmg

            if (diss < 0) {
                console.log(`El personaje: ${objetivo.nombre} recibe: 0 de daño`);
                objetivo.armadura = objetivo.armadura - 25
                console.log(`El personaje: ${objetivo.nombre} pierde armadura total ${objetivo.armadura}`);
            } else {
                objetivo.vida = objetivo.vida - diss


                console.log(`El personaje: ${objetivo.nombre} recibe: ${diss} de daño`);
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }


        } else {
            objetivo.vida = objetivo.vida - dmg
            console.log(`El personaje: ${objetivo.nombre} recibe: ${dmg} de daño`);
            if (objetivo.vida < 0) {
                console.log(`Al personaje ${objetivo.nombre} le queda 0 de vida`);
            } else {
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }
        }
    }

}

class Mago extends Personaje {
    constructor(nombre, vida, mana=50, velocidad = 50) {
        super(nombre, vida)
        this.mana = mana
        this.velocidad = velocidad
    }

    atacar(objetivo) {

        let dmg = Math.floor(Math.random() * 16) + 10

        if (this.mana > 0) {
            dmg = (dmg * 2) + dmg
            this.mana = objetivo.mana - 15
        }

        if (objetivo.armadura > 0) {
            let diss = (dmg * 0.50) - dmg

            if (diss < 0) {
                console.log(`El personaje: ${objetivo.nombre} recibe: 0 de daño`);

                objetivo.armadura = objetivo.armadura - 25
                console.log(`El personaje: ${objetivo.nombre} pierde armadura total ${objetivo.armadura}`);
            } else {
                objetivo.vida = objetivo.vida - diss



                console.log(`El personaje: ${objetivo.nombre} recibe: ${diss} de daño`);
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }


        } else {
            objetivo.vida = objetivo.vida - dmg
            console.log(`El personaje: ${objetivo.nombre} recibe: ${dmg} de daño`);
            if (objetivo.vida < 0) {
                console.log(`Al personaje ${objetivo.nombre} le queda 0 de vida`);
            } else {
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }

        }

    }

}


class Arquero extends Personaje {
    constructor(nombre, vida, critico=50, velocidad = 30) {
        super(nombre, vida)
        this.critico = critico
        this.velocidad = velocidad
    }

    atacar(objetivo) {

        let dmg = Math.floor(Math.random() * 16) + 10

        let prob = Math.floor(Math.random() * 16) + 10
        if (prob > 15) {
            dmg = (dmg * 10) + dmg
            this.mana = this.critico - 25
        }


        if (objetivo.armadura > 0) {
            let diss = (dmg * 0.50) - dmg

            if (diss < 0) {
                console.log(`El personaje: ${objetivo.nombre} recibe: 0 de daño`);

                objetivo.armadura = objetivo.armadura - 25
                console.log(`El personaje: ${objetivo.nombre} pierde armadura total ${objetivo.armadura}`);
            } else {
                objetivo.vida = objetivo.vida - diss



                console.log(`El personaje: ${objetivo.nombre} recibe: ${diss} de daño`);
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }


        } else {
            objetivo.vida = objetivo.vida - dmg
            console.log(`El personaje: ${objetivo.nombre} recibe: ${dmg} de daño`);
            if (objetivo.vida < 0) {
                console.log(`Al personaje ${objetivo.nombre} le queda 0 de vida`);
            } else {
                console.log(`Al personaje ${objetivo.nombre} le queda ${objetivo.vida} de vida`);
            }

        }

    }

}




let personaje1 = new Arquero("MANOLO")

let personaje2 = new Mago("JOSUE")

let turno = 0

while (personaje1.vida > 0 && personaje2.vida > 0) {
    turno++
    console.log(`Turno: ${turno}`);
    console.log(`Personaje 1: ${personaje1.nombre} Vida:${personaje1.vida}`)
    console.log(`Personaje 2: ${personaje2.nombre} Vida:${personaje2.vida}`)

    console.log("==========================================");



    if (personaje1.velocidad >= personaje2.velocidad) {

        if (personaje1.vida > 0) {
            personaje1.atacar(personaje2);
        } else {
            console.log(`El personaje ${personaje1.nombre} a muerto`);
        }

        if (personaje2.vida > 0) {
            personaje2.atacar(personaje1);
        } else {
            console.log(`El personaje ${personaje2.nombre} a muerto`);
        }

    } else {


        if (personaje2.vida > 0) {
            personaje2.atacar(personaje1);
        } else {
            console.log(`El personaje ${personaje2.nombre} a muerto`);
        }

        if (personaje1.vida > 0) {
            personaje1.atacar(personaje2);
        } else {
            console.log(`El personaje ${personaje1.nombre} a muerto`);
        }

        
    }



    console.log("==========================================");
    console.log("==========================================");

    console.log("==========================================");

}

if (personaje1.vida > 0) {
    console.log(`El ganador es el jugador 1 ${personaje1.nombre}`);
} else {
    console.log(`El ganador es el jugador 2 ${personaje2.nombre}`);
}