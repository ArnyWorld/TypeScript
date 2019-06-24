import { Saludar } from "../6.-Modulos/exportar";

function imprimir(clase:Function){
    clase.prototype.nombre="Cayo"
    console.log(clase.prototype)
}

@imprimir
class Persona{
    mensaje:string="Hola Mundo"
    Saludar(){
        console.log(this.mensaje)
    }
}

let yo:Persona=new Persona();
yo.Saludar()

let tu:Persona=new Persona();
tu.Saludar()