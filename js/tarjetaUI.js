import {Tarjeta} from "./clases"

function guardar() {
    var num = document.getElementById('tarjeta').value
    var cvv = document.getElementById('cvv').value
    var act = document.getElementById('act').value
    if (act == true) {
        act = 'Si'
    } else {
        act = 'No'
    }
    var tarjetas = []
    var tarje = new Tarjeta(num, cvv, act);
    tarjetas.push(tarje);
    console.log(tarje)
}