

function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

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
  