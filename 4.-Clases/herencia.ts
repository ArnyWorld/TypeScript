class Persona{

    nombre:string;

    constructor(nom:string){
        this.nombre=nom;
    }

    edad(edad:number):void{
        console.log(`${this.nombre} este año cumplio ${edad} años`);
    }
}
class Tutor extends Persona{
    especialidad:string;

    constructor(nombre:string,especialidad:string){
        super(nombre);
        this.especialidad=especialidad;
    }

    pagar():void{
        console.log("Pago la deuda");
    }
}

let Adalid=new Tutor("David","Desarrollo movil");
Adalid.pagar();
Adalid.edad(23);