
export const pi:number=3.141596542;

export function Saludar():void{
    console.log("Hola Mundo");
}
export class Desarrollador{
    nombre:string;
}
export interface Operador{
    nombre:string;
}

/*Creando Alias*/

function NombreCompletoDesarrollador(){
    console.log("Arnaldo Muñoz Mendoza");
}

export {NombreCompletoDesarrollador as nomDes}

/*Export Default*/

export default function Trabajo(tarea:string){
    console.log("¿Tu tarea es ? "+tarea);
}