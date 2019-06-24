var EspacioDeTrabajo;
(function (EspacioDeTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
        }
        return Persona;
    }());
    EspacioDeTrabajo.Persona = Persona;
    EspacioDeTrabajo.repetida = 2;
    console.log("Hola");
})(EspacioDeTrabajo || (EspacioDeTrabajo = {}));
var persona = new EspacioDeTrabajo.Persona();
persona.nombre = "Fernando";
console.log(persona);
// Variable repetida
console.log(EspacioDeTrabajo.repetida);
