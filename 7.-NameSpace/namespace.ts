namespace EspacioDeTrabajo{
    export class Persona{
        nombre:string
    }
    export let repetida:number=2
    
    console.log("Hola");
}

let persona = new EspacioDeTrabajo.Persona();
persona.nombre="Fernando";
console.log(persona);
// Variable repetida
console.log(EspacioDeTrabajo.repetida);