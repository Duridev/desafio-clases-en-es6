class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    };
    // Getters
    get nombre(){
        return this._nombre;
    };
    get impuesto(){
        return this._impuesto;
    };

    // Setters
    set nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    set impuesto(nuevoImpuesto) {
        this.impuesto =  nuevoImpuesto;
    };
    // Método para calcular el impuesto
    calculaImpuesto() {
    }
};
