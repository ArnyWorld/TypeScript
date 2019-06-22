/*******Interface********/
console.log("***Interface***");
interface Desarrollador{
        //Atributo
    nombre:string;
    especialidad:string;
}
function contrato(desarrollador:Desarrollador):void{
    console.log(`Se contratara al desarrollador ${desarrollador.nombre}`);
}

let fullStack:Desarrollador={
    nombre:"Arnaldo",
    especialidad:"Desarrollo Web"
}
contrato(fullStack);

/*****Interface con parametros opcionales******/

interface tutor{
    nombre:string,
    materia:string
    //Atributo opcional
    experiencia?:number
}

function taller(docente:tutor):string{
    if(docente.experiencia){
        return `El tutor ${docente.nombre} dara un taller de ${docente.materia} tiene una experiencia de  ${docente.experiencia} años`;
    }
    else{
        return `El tutor ${docente.nombre} dara un taller de ${docente.materia}`;
    }
}

console.log(taller({nombre:"Kevin",materia:"Desarrollo Web",experiencia:2}));
console.log(taller({nombre:"Kevin",materia:"Desarrollo Web"}));

/*** Interface con parametros de lectura******/
interface lectura{
    readonly nombre:string,
    readonly edad:number
}

let leer:lectura={
    nombre:"Arnaldo",
    edad:24    
}
//leer.nombre="Arni";
console.log(leer.nombre);


/******Interface con funciones*******/
interface verificar{
    (experiencia:number,edad:number):boolean;
}
let dato:verificar;

dato=function(exp:number,ed:number){
    if(exp>2 && ed>23){
        return true;
    }
    else{
        return false;
    }
}

