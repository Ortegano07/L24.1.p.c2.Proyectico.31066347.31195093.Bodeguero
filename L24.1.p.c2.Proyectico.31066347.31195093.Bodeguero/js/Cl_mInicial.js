export default class Cl_mInicial {
    constructor({billete10, billete20, billete50}) {
        this.billete10 = billete10;
        this.billete20 = billete20;
        this.billete50 = billete50;
    }

    set billete10(billete10) {
        this._billete10 = +billete10;
    }

    set billete20(billete20) {
        this._billete20 = +billete20;
    }

    set billete50(billete50) {
        this._billete50 = +billete50;
    }

    get billete10() {
        return this._billete10;
    }

    get billete20() {    
        return this._billete20;
    }   

    get billete50() {    
        return this._billete50;
    }

}