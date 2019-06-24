function prueba1(clase:Object){
    console.log("Primer decorador");
}

function prueba2(clase:Object){
    console.log("Segundo decorador");
}

@prueba1
@prueba2
class Tutor {
    especialidad:string="Desarrollo Movil"
}

let docente:Tutor=new Tutor()