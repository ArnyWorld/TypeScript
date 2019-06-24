abstract class SuperClase{
    abstract Modificar():void;
    saludar():void{
        console.log("Hola Mundo");
    }
} 
class claseDerivada extends SuperClase{
    constructor(){
        super();
    }
    Modificar():void{
        console.log("Codigo nuevo");
    }
}
let instancia=new claseDerivada();
instancia.saludar();
instancia.Modificar();

