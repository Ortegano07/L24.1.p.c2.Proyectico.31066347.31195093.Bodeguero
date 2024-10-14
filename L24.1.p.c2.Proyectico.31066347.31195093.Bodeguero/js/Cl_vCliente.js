export default class Cl_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("clienteForm");
        this.incedula = document.getElementById("clienteForm_incedula");
        this.inDenobillete = document.getElementById("clienteForm_inDenobillete");
        this.inCantbillete = document.getElementById("clienteForm_inCantbillete");
        this.inSexo = document.getElementById("clienteForm_inSexo");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick =  ()=> controlador.agregarCliente({
                cedula: this.incedula.value, 
                denobillete: this.inDenobillete.value, 
                cantbillete: this.inCantbillete.value,
                sexo: this.inSexo.value
            }) || controlador.resetClientes() ;

        this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    
    resetCliente() {
        this.inSexo.value = "";
        this.incedula.value = "";
        this.inDenobillete.value = "";
        this.inCantbillete.value = "";
    }
}


