export default class Cl_mBodeguero {
    constructor() {
        this.acumTotal10 = 0;
        this.acumTotal20 = 0;
        this.acumTotal50 = 0;
        this.cantinicial10;
        this.cantinicial20;
        this.cantinicial50;
        this.acumentradadeldia = 0;

    }
    procesarInicial({billete10, billete20, billete50}) {

        this.cantinicial10 = billete10;
        this.cantinicial20 = billete20;
        this.cantinicial50 = billete50;
        
    }
    procesarCliente(c){
        this.acumentradadeldia += c.montocuentacliente();
        if (c.denobillete == 10)
            this.acumTotal10 += c.cantbillete;
        else if (c.denobillete == 20)
            this.acumTotal20 += c.cantbillete;
        else if (c.denobillete == 50)
            this.acumTotal50 += c.cantbillete;
    }


    monto10(){
        return (this.acumTotal10 + this.cantinicial10) * 10;
    }

    monto20(){
        return (this.acumTotal20 + this.cantinicial20) * 20;
    }

    monto50(){  
        return (this.acumTotal50 + this.cantinicial50) * 50;
    }

    totalBodeguero(){
        return (this.monto10() + this.monto20() + this.monto50());
    }

    porcentajeaumento50(){
        return (this.acumTotal50 / this.cantinicial50) * 100;
    }

    porcentajeaumento20(){
        return (this.acumTotal20 / this.cantinicial20) * 100;
    }


}