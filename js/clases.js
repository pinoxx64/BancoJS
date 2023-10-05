export class Cuenta {
    constructor(iban, saldo, tarjetas) {
        this.iban = iban
        this.saldo = saldo
        this.tarjetas = tarjetas
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
        if (cantidad <= this.saldo && cantidad > 0) {
            this.saldo -= cantidad
            haySuficiente = true
        } else {
            haySuficiente = false
        }

        return haySuficiente
    }
}

export class Persona {
    constructor(nombre, ape1, ape2, nac) {
        this.nombre = nombre
        this.ape1 = ape1
        this.ape2 = ape2
        this.nac = nac
    }
}

export class Tarjeta {
    constructor(num, cvv, act) {
        this.num = num;
        this.cvv = cvv;
        this.act = act;
    }
}
