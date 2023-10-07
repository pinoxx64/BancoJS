import { Persona } from "./clases.js"
import { eliminarMensaje } from "./cuentaUI.js"

document.addEventListener("DOMContentLoaded", function () {
    var persona = cargarDatos(); // Cargar datos guardados, si los hay

    var nombreInput = document.getElementById('nombre');
    var apellido1Input = document.getElementById('apellido1');
    var apellido2Input = document.getElementById('apellido2');
    var nacionalidadInput = document.getElementById('nacionalidad');
    var error = document.getElementById("error");
    var mensajeConfirmacion = document.getElementById("mensaje");

    if (persona) {
        nombreInput.value = persona.nombre;
        apellido1Input.value = persona.ape1;
        apellido2Input.value = persona.ape2;
        nacionalidadInput.value = persona.nac;
    }

    var btnModificar = document.getElementById("btn-modificar");

    btnModificar.addEventListener("click", modificarDatos);

    function modificarDatos() {
        var regex1 = /^[A-Za-zñ].{3,20}$/;
        var nacionalidadRegex = /^[A-Za-zñ].{3,15}$/;

        var nombre = nombreInput.value;
        var ap1 = apellido1Input.value;
        var ap2 = apellido2Input.value;
        var nac = nacionalidadInput.value;

        var campoValido = true;

        if (!regex1.test(nombre)) {
            error.textContent = "El nombre debe contener entre 3 y 20 caracteres";
            campoValido = false;
            eliminarMensaje(error);
        } else {
            persona.nombre = nombre;
        }

        if (!regex1.test(ap1)) {
            error.textContent = "El primer apellido debe contener entre 3 y 20 caracteres";
            campoValido = false;
            eliminarMensaje(error);
        } else {
            persona.ape1 = ap1;
        }

        if (!regex1.test(ap2)) {
            error.textContent = "El segundo apellido debe contener entre 3 y 20 caracteres";
            campoValido = false;
            eliminarMensaje(error);
        } else {
            persona.ape2 = ap2;
        }

        if (!nacionalidadRegex.test(nac)) {
            error.textContent = "La nacionalidad debe contener entre 3 y 15 caracteres";
            campoValido = false;
            eliminarMensaje(error);
        } else {
            persona.nac = nac;
        }

        if (campoValido) {
            guardarDatos(persona); // Guardar datos actualizados
            mensajeConfirmacion.textContent = "Guardado los datos correctamente";
            eliminarMensaje(mensajeConfirmacion);
        }
    }

    // Función para cargar datos desde el almacenamiento local
    function cargarDatos() {
        persona = new Persona('David', 'Gutierrez', 'Lopez', 'Marroqui');
        var datosGuardados = localStorage.getItem('datosPersona');
        return datosGuardados ? JSON.parse(datosGuardados) : persona;
    }

    // Función para guardar datos en el almacenamiento local
    function guardarDatos(datos) {
        localStorage.setItem('datosPersona', JSON.stringify(datos));
    }
});
