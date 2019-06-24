interface DatosPersonales{
    nombre:string;
    apellido:string;
}

class Desarrolladores implements DatosPersonales{
    nombre:string;
    apellido:string;
}

let docente = new Desarrolladores();
docente.nombre="David";
docente.apellido="Villca";
console.log(docente);