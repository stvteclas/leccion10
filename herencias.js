class Persona{
    static contadorPersonas=0;

    constructor(nombre, apellido, edad){
            this._idPersona=++Persona.contadorPersonas;
            this._nombre=nombre;
            this._apellido=apellido;
            this._edad=edad;

    }
    get idPersona(){
        this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    nombreCompleto(){
        return this.idPersona+ ' ' + this._nombre+ ' '+ this._apellido;
    }
    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }


}


