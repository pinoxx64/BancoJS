import { Cuenta } from './clases.js'

document.addEventListener("DOMContentLoaded", function () {
    var tarjetas = []
    var cuenta = new Cuenta("ES21 1465 0100 72 2030876293", 500, tarjetas)
    var ibanInput = document.getElementById("iban")
    var saldoInput = document.getElementById("saldo")
    var btnRetirar = document.getElementById("btn-retirar")
    var btnIngresar = document.getElementById("btn-ingresar")
    var mensajeConfirmacion = document.getElementById("mensaje")
    var error = document.getElementById("error")




    function cargarDatosCuenta() {
        ibanInput.value = cuenta.iban
        ibanInput.readOnly = true

        saldoInput.value = cuenta.saldo
        saldoInput.readOnly = true

        btnRetirar.addEventListener("click", retirarSaldo)
        btnIngresar.addEventListener("click", ingresarSaldo)
    }
    cargarDatosCuenta()

    function comprobarSiNumero(cantidad) {
        var numeroRegex = /\d/
        var objetoComprobacion = { esNumero: false, mensaje: "" }

        if (numeroRegex.test(cantidad)) {
            objetoComprobacion = { esNumero: true, mensaje: "" }
        } else {
            objetoComprobacion = { esNumero: false, mensaje: "Introduce un numero" }
        }

        return objetoComprobacion
    }


    function retirarSaldo() {
        var saldoRetirar = document.getElementById("saldo-retirar")
        var cantidad = parseFloat(saldoRetirar.value)
        var resultadoComprobacion = comprobarSiNumero(cantidad)

        if (resultadoComprobacion.esNumero) {
            if (cuenta.retirar(cantidad)) {
                saldoInput.value = cuenta.saldo
                mensajeConfirmacion.textContent = "Dinero retirado correctamente: " + cantidad + " €"
                eliminarMensaje(mensajeConfirmacion)
            } else {
                error.textContent = "No hay dinero suficiente"
                eliminarMensaje(error)
            }
        } else {
            error.textContent = resultadoComprobacion.mensaje
            eliminarMensaje(error)
        }

    }


    function ingresarSaldo() {
        var saldoIngresar = document.getElementById("saldo-ingresar")
        var cantidad = parseFloat(saldoIngresar.value)
        var resultadoComprobacion = comprobarSiNumero(cantidad)

        if (resultadoComprobacion.esNumero) {
            if (cuenta.ingresar(cantidad)) {
                saldoInput.value = cuenta.saldo
                mensajeConfirmacion.textContent = "Dinero ingresado correctamente: " + cantidad + " €"
                eliminarMensaje(mensajeConfirmacion)

            } else {
                error.textContent = resultadoComprobacion.mensaje
                eliminarMensaje(mensajeConfirmacion)

            }
        } else {
            error.textContent = resultadoComprobacion.mensaje
            eliminarMensaje(error)
        }
    }


})

export function eliminarMensaje(mensajeConfirmacion) {
    setTimeout(function () {
        mensajeConfirmacion.textContent = "";
    }, 1000);
}
