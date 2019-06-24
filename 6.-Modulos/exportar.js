"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = 3.141596542;
function Saludar() {
    console.log("Hola Mundo");
}
exports.Saludar = Saludar;
var Desarrollador = /** @class */ (function () {
    function Desarrollador() {
    }
    return Desarrollador;
}());
exports.Desarrollador = Desarrollador;
/*Creando Alias*/
function NombreCompletoDesarrollador() {
    console.log("Arnaldo Muñoz Mendoza");
}
exports.nomDes = NombreCompletoDesarrollador;
/*Export Default*/
function Trabajo(tarea) {
    console.log("¿Tu tarea es ? " + tarea);
}
exports.default = Trabajo;
