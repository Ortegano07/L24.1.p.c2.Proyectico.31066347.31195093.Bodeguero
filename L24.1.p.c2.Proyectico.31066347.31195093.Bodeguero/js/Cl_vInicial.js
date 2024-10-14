export default class Cl_vInicial {
    constructor(controlador) {
        this.vista = document.getElementById("InicialForm");
        this.salida = document.getElementById("InicialForm_salida");
        this.lblbillete10 = document.getElementById("InicialForm_lblbillete10");
        this.lblbillete20 = document.getElementById("InicialForm_lblbillete20");
        this.lblbillete50 = document.getElementById("InicialForm_lblbillete50");
        this.inbillete10 = document.getElementById("InicialForm_inbillete10");
        this.inbillete20 = document.getElementById("InicialForm_inbillete20");
        this.inbillete50 = document.getElementById("InicialForm_inbillete50");
        this.btContinuar = document.getElementById("InicialForm_btContinuar");
        this.btContinuar.onclick =  ()=> controlador.continuar({
            billete10: this.inbillete10.value,
            billete20: this.inbillete20.value,
            billete50: this.inbillete50.value,
    });
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }
    resetInicial() {
        this.inbillete10.value = "";
        this.inbillete20.value = "";
        this.inbillete50.value = "";
        this.lblbillete10.innerHTML = 0;
        this.lblbillete20.innerHTML = 0;
        this.lblbillete50.innerHTML = 0;
    }
    
    reportarInicial({
        billete10,
        billete20,
        billete50,
    }) {
        this.lblbillete10.innerHTML = billete10;
        this.lblbillete20.innerHTML = billete20;
        this.lblbillete50.innerHTML = billete50;
    
    }
}