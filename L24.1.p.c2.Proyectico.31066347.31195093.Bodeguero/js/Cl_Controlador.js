import Cl_vBodeguero from "./Cl_vBodeguero.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vInicial from "./Cl_vInicial.js";
import Cl_mBodeguero from "./Cl_mBodeguero.js";
import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mInicial from "./Cl_mInicial.js";
export default class Cl_Controlador {
    constructor() {
        this.mBodeguero = new Cl_mBodeguero();
        this.vBodeguero = new Cl_vBodeguero(this);
        this.vCliente = new Cl_vCliente(this);
        this.vInicial = new Cl_vInicial(this);
    }

    mostrarVistaCliente() {
        this.vBodeguero.ocultar();
        this.vCliente.mostrar();
        this.vInicial.ocultar()
    }

    mostrarVistaBodeguero() {
        this.vBodeguero.mostrar();
        this.vCliente.ocultar();
        this.vInicial.ocultar()
    }
    reset() {
        this.vBodeguero.resetBodeguero();
        this.vInicial.resetInicial();
        this.vCliente.resetCliente();
    }
    resetClientes() {
        this.vCliente.resetCliente();
    }

    mostrarVistaInicial() {
        this.vBodeguero.ocultar();
        this.vCliente.ocultar();
        this.vInicial.mostrar();
    }
    continuar({billete10, billete20, billete50}) {
        let inicial = new Cl_mInicial({billete10, billete20, billete50});
        this.vInicial.reportarInicial({
            billete10: inicial.billete10,
            billete20: inicial.billete20,
            billete50: inicial.billete50,
        });
        this.mBodeguero.procesarInicial(inicial);
        this.mostrarVistaBodeguero();
        
     
        
    }

    agregarCliente({cedula, denobillete, cantbillete, sexo}) {
        let cliente = new Cl_mCliente({cedula, denobillete, cantbillete, sexo});
        this.mBodeguero.procesarCliente(cliente);
        this.vBodeguero.reportarCliente({
            cedula: cliente.cedula,
            sexo: cliente.sexo,
            tiposexo: cliente.tiposexo(),
            denobillete: cliente.denobillete,
            cantbillete: cliente.cantbillete,
            montocuentacliente: cliente.montocuentacliente(),
            monto10: this.mBodeguero.monto10(),
            monto20: this.mBodeguero.monto20(),
            monto50: this.mBodeguero.monto50(),
            entradadia: this.mBodeguero.acumentradadeldia,
            porcentajeaumento50: this.mBodeguero.porcentajeaumento50(),
            porcentajeaumento20: this.mBodeguero.porcentajeaumento20(),
            total: this.mBodeguero.totalBodeguero()
            
        });
        this.mostrarVistaBodeguero();
         
    }
       

}