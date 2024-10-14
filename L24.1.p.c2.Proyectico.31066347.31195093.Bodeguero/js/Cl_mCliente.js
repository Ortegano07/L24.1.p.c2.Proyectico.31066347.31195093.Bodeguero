
export default class Cl_mClient{
    constructor({cedula, denobillete, cantbillete, sexo}){
        this.cedula = cedula;
        this.denobillete = denobillete;
        this.cantbillete = cantbillete;  
        this.sexo = sexo;  
    }

    set cedula(cedula){
        this._cedula = +cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set denobillete(denobillete){
        this._denobillete = +denobillete;
    }

    get denobillete(){
        return this._denobillete;
    }

    set cantbillete(cantbillete){
        this._cantbillete = +cantbillete;
    }

    get cantbillete(){
        return this._cantbillete;
    }

    set sexo(sexo){
        this._sexo = sexo;
    }

    get sexo(){
        return this._sexo;
    }
    
    montocuentacliente(){
        return this.denobillete * this.cantbillete;
    }

    tiposexo(){
        if (this.sexo == "M")
            return "Masculino";
        else if (this.sexo == "m")
            return "Masculino";
         else if (this.sexo == "F")
           return "Femenino";
         else if (this.sexo == "f")
            return "Femenino";
         else 
            return "Indefinido";
        
    }
}
