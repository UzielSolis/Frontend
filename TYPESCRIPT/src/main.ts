interface Credenciales {
    email: string;
    password: string;
}

const acceso: Credenciales = {
    email: '',
    password: ''
}

interface IPersona {
    setNombre: (n:string) => void;
    getNombre: () => string;
}

class Persona implements IPersona {
    private nombre: string = '';

    constructor(nombre?:string) {
        if (nombre) {
            this.nombre = nombre;
        }
    }

    setNombre(nombre:string) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }
}

const yo = new Persona();
yo.getNombre();