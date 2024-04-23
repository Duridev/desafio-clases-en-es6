
class Deducciones {
    constructor(deducciones) {
        this._deducciones = deducciones;
    };
    get deducciones() {
        return this._deducciones;
    }
    set deducciones(nuevasDeduciones) {
        this.deducciones = nuevasDeduciones;
    }
};


let deducciones2023 = new Deducciones(4500000)