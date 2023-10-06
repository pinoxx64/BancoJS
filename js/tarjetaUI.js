import {Tarjeta,Cuenta} from "./clases.js"


document.addEventListener("DOMContentLoaded", function () {
    var boton=document.getElementById('guardar')
    boton.addEventListener('click', guardar)
    var tarjetas = []
    var cuenta = new Cuenta("ES21 1465 0100 72 2030876293", 500, tarjetas)
    var tarjeta=[]

    function guardar() {

        var num = document.getElementById('tarjeta').value
        var cvv = document.getElementById('cvv').value
        var act = document.getElementById('act').checked
        var contTablas=document.getElementById('tablas')
        if (act == true) {
            act = 'Si'
        } else {
            act = 'No'
        }
        var tarje = new Tarjeta(num, cvv, act);
        tarjeta.push(tarje)
        cuenta.tarjetas.push(tarje);
        console.log(tarje)
        var tabla="<table>"
        tabla+="<br>"
        for (let i = 0; i < tarjeta.length; i++) {
            tabla+="<tr>"
            tabla+="<td>"
            tabla+=cuenta.iban + " " +tarjetas[i].num+" " +tarjetas[i].act 
            tabla+="</td>"
            tabla+="</tr>"
        }
        console.log(tarjeta.length)
        tabla+="</table>"
        contTablas.innerHTML=tabla
    }

   
})


