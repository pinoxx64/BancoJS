export function comprobarSiNumero(cantidad) {
    var numeroRegex = /\d/
    var objetoComprobacion = { esNumero: false, mensaje: "" }

    if (numeroRegex.test(cantidad)) {
        objetoComprobacion = { esNumero: true, mensaje: "" }
    } else {
        objetoComprobacion = { esNumero: false, mensaje: "Introduce un numero" }
    }

    return objetoComprobacion
}

