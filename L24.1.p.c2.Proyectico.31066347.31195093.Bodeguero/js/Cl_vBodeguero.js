export default class Cl_vBodeguero {
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.table = document.getElementById("mainForm_table");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.btCancelar = document.getElementById("mainForm_btCancelar");
        this.lblMonto10 = document.getElementById("mainForm_lblMonto10");
        this.lblMonto20 = document.getElementById("mainForm_lblMonto20");
        this.lblMonto50 = document.getElementById("mainForm_lblMonto50");
        this.lblEntradasdeldia = document.getElementById("mainForm_lblEntradasdeldia");
        this.lblPorcentajeaumento50 = document.getElementById("mainForm_lblPorcentajeaumento50");
        this.lblPorcentajeaumento20 = document.getElementById("mainForm_lblPorcentajeaumento20");
        this.lbltotalBodeguero = document.getElementById("mainForm_lbltotalBodeguero");
        this.salida = document.getElementById("mainForm_salida");
        this.btAgregar.onclick = ()=> controlador.mostrarVistaCliente();
        this.btCancelar.onclick = ()=> controlador.mostrarVistaInicial() || controlador.reset();
        this.ocultar();
    }

    mostrar(){
        this.vista.hidden = false;
    }

    ocultar(){
        this.vista.hidden = true;
    }
    resetBodeguero(){
        this.table.innerHTML = `<tr>
            <th>Cédula</th>
            <th>Sexo</th>
            <th>Denominación</th>
            <th>Cantidad</th>
            <th>Monto Cuenta</th>
        </tr>`;
        this.lblMonto10.innerHTML = 0;
        this.lblMonto20.innerHTML = 0;
        this.lblMonto50.innerHTML = 0;
        this.lblPorcentajeaumento50.innerHTML = 0;
        this.lblPorcentajeaumento20.innerHTML = 0;
        this.lblEntradasdeldia.innerHTML = 0;
        this.lbltotalBodeguero.innerHTML = 0;
    }
    

    
    reportarCliente({
        cedula,
        denobillete,
        cantbillete,
        tiposexo,
        montocuentacliente,
        monto10,
        monto20,
        monto50,
        porcentajeaumento50,
        porcentajeaumento20,
        entradadia,
        total
    }) {
        this.table.innerHTML += `<tr>
        <td>${cedula}</td>
        <td>${tiposexo}</td>
        <td>${denobillete}$</td>
        <td>${cantbillete}</td>
        <td>${montocuentacliente}$</td>
        </tr>`;
        this.lblMonto10.innerHTML = monto10;
        this.lblMonto20.innerHTML = monto20;
        this.lblMonto50.innerHTML = monto50;
        this.lblPorcentajeaumento50.innerHTML = porcentajeaumento50;
        this.lblPorcentajeaumento20.innerHTML = porcentajeaumento20;
        this.lblEntradasdeldia.innerHTML = entradadia;
        this.lbltotalBodeguero.innerHTML = total;
    }
    

     
}