class MontoBrutoAnual {
    constructor(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    };
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(value){
        this.montoBrutoAnual =  value;
    }
};


let montoBruto2023 = new MontoBrutoAnual(10000000)
