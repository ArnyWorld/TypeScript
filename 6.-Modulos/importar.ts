import {pi,Saludar,Desarrollador,Operador} from "./exportar"

console.log(pi);

Saludar();

let FernandoHerrera=new Desarrollador();
FernandoHerrera.nombre="Fernando"
let victor:Operador={
    nombre:"Victor"
}

console.log(FernandoHerrera,victor);

/*Recuperando Alias*/
import {nomDes} from "./exportar"
nomDes();

/*Recuperando datos de la exportacion default*/
import Trabajo from "./exportar"

Trabajo("Laravel");