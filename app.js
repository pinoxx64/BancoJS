document.addEventListener("DOMContentLoaded", function () {
    function cargarDatos() {
        /*document.getElementById('idPersona').value = persona.id
        document.getElementById('nombre').value = persona.nombre
        document.getElementById('apellido1').value = persona.apellido1
        document.getElementById('apellido2').value = persona.apellido2
        document.getElementById('nacionalidad').value = persona.nacionalidad*/
    }



    function cargarCabecera() {
        var cabecera = document.createElement("header")
        cabecera.innerHTML = `
       <div id="menu">
           <h1>BancoPuertollano</h1>
           <ul>
               <li><a href="index.html">Inicio</a></li>
               <li><a href="infoCuenta.html">Información Cuenta</a></li>
               <li><a href="tarjetas.html">Tarjetas</a></li>
           </ul>
       </div>
       `
        return cabecera
    }
    
    document.body.appendChild(cargarCabecera())



    class Cuenta {
        constructor(iban, saldo) {
            this.iban = iban
            this.saldo = saldo
        }

        ingresar(cantidad) {
            var haySuficiente = true

            if (cantidad > 0) {
                this.saldo = cantidad
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
            mensajeConfirmacion.textContent = ""; 
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





function guardar() {
    var num=document.getElementById('tarjeta').value
    var cvv=document.getElementById('cvv').value
    var act=document.getElementById('act').value
    if(act==true){
        act='Si'
    }else{
        act='No'
    }
    var tarjetas=[]
    var tarje= new Tarjeta(num,cvv,act);
    tarjetas.push(tarje);
    console.log(tarje)
}
class Tarjeta{
    constructor(num,cvv,act){
        this.num=num;
        this.cvv=cvv;
        this.act=act;
    }
}
/*function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(
          "celda en la hilera " + i + ", columna " + j,
        );
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }*/
  