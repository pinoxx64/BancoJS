import {Persona} from "./clases"

function cargarDatos() {
    var persona = new Persona('David', 'Gutierrez', 'Lopez', 'Marroqui')
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.ape1
    document.getElementById('apellido2').value = persona.ape2
    document.getElementById('nacionalidad').value = persona.nac
}