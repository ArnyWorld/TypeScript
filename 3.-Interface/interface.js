/*interface*/
console.log("***Interface***");
function contrato(desarrollador) {
    console.log("Se contratara al desarrollador " + desarrollador.nombre);
}
var fullStack = {
    nombre: "Arnaldo",
    especialidad: "Desarrollo Web"
};
contrato(fullStack);
function taller(docente) {
    if (docente.experiencia) {
        return "El tutor " + docente.nombre + " dara un taller de " + docente.materia + " tiene una experiencia de  " + docente.experiencia + " a\u00F1os";
    }
    else {
        return "El tutor " + docente.nombre + " dara un taller de " + docente.materia;
    }
}
console.log(taller({ nombre: "Kevin", materia: "Desarrollo Web", experiencia: 2 }));
console.log(taller({ nombre: "Kevin", materia: "Desarrollo Web" }));
var leer = {
    nombre: "Arnaldo",
    edad: 24
};
//leer.nombre="Arni";
console.log(leer.nombre);
