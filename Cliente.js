class Cliente extends Persona{
    static contadorClientes=0;

    constructor(fechaRegistro){
        this._idCliente=++Cliente.contadorClientes;
        this._fechaRegistro=fechaRegistro;

    }
    get _idCliente(){
        this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}
