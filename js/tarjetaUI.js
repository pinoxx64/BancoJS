import {Tarjeta,Cuenta} from "./clases.js"

document.addEventListener("DOMContentLoaded", function () {
    var boton=document.getElementById('guardar')
    boton.addEventListener('click', guardar)
    function guardar() {
        var tarjetas = []
        var cuenta = new Cuenta("ES21 1465 0100 72 2030876293", 500, tarjetas)
        var num = document.getElementById('tarjeta').value
        var cvv = document.getElementById('cvv').value
        var act = document.getElementById('act').value
        var contTablas=document.getElementById('tablas')
        if (act == true) {
            act = 'Si'
        } else {
            act = 'No'
        }
        var tarje = new Tarjeta(num, cvv, act);
        cuenta.tarjetas.push(tarje);
        console.log(tarje)
        contTablas.innerHTML=""
        var tabla="<table>"
        tabla+="<tr>"
        tabla+="<td>"
        tabla+=cuenta.iban
        tabla+=cuenta.tarjetas.num
        tabla+=cuenta.tarjetas.act 
        tabla+="</td>"
        tabla+="</tr>"
    }

    guardar()
})


