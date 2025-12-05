let dias = 2
let horas = 24
let minutos = 40
let segundos = 80


function miniDias(dia) {
    let hora = dia*24
    let min = hora*60
    let seg = min*60
    let mili = (seg*1000)
    console.log(`En la cantidad de dias ${dia} hay en total ${mili} milisegundo`)
}

function miniHoras(hora) {
    let min = hora*60
    let seg = min*60
    let mili = (seg*1000)
    console.log(`En la cantidad de horas ${hora} hay en total ${mili} milisegundo`)
}

function miniMinuts(min) {
    let seg = min*60
    let mili = (seg*1000)
    console.log(`En la cantidad de minutos ${min} hay en total ${mili} milisegundo`)
}

function miniSegs(seg) {
    let mili = (seg*1000)
    console.log(`En la cantidad de segundos ${seg} hay en total ${mili} milisegundo`)
}

let resultDay = miniDias(dias)
let resultHours = miniHoras(horas)
let resultMin = miniMinuts(minutos)
let resultSeg = miniSegs(segundos)