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
