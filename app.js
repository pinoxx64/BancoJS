

function cargarDatos() {
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}



function cargarCabecera(dest) {
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}



document.addEventListener("DOMContentLoaded", function () {
    class Cuenta {
        constructor(iban, saldo) {
            this.iban = iban
            this.saldo = saldo
        }

        ingresar(cantidad) {
            var haySuficiente = true

            if (cantidad > 0) {
                this.saldo += cantidad
                haySuficiente = true
            } else {
                haySuficiente = false
            }

            return haySuficiente
        }

        retirar(cantidad) {
            var haySuficiente = true
            if (cantidad < this.saldo && cantidad > 0) {
                this.saldo -= cantidad
                haySuficiente = true
            } else {
                haySuficiente = false
            }

            return haySuficiente
        }
    }




    var cuenta = new Cuenta("ES21 1465 0100 72 2030876293", 500)


    var ibanInput = document.getElementById("iban")
    var saldoInput = document.getElementById("saldo")
    var btnRetirar = document.getElementById("btn-retirar")
    var btnIngresar = document.getElementById("btn-ingresar")
    var mensajeConfirmacion = document.getElementById("mensaje")
    var error = document.getElementById("error")


    ibanInput.value = cuenta.iban
    ibanInput.readOnly = true

    saldoInput.value = cuenta.saldo
    saldoInput.readOnly = true



    function eliminarMensaje(mensajeConfirmacion) {
        setTimeout(function () {
            mensajeConfirmacion.textContent = ""; // Borra el contenido del mensajeConfirmacion
        }, 1000);
    }


    btnRetirar.addEventListener("click", retirarSaldo)
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
                mensajeConfirmacion.textContent = "No hay dinero suficiente"
                eliminarMensaje(mensajeConfirmacion)
            }
        } else {
            error.textContent = resultadoComprobacion.mensaje
            eliminarMensaje(error)
        }

    }

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

    btnIngresar.addEventListener("click", ingresarSaldo)

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

        }
    }




})





