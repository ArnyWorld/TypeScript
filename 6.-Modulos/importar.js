"use strict";
exports.__esModule = true;
var exportar_1 = require("./exportar");
console.log(exportar_1.pi);
exportar_1.Saludar();
var FernandoHerrera = new exportar_1.Desarrollador();
FernandoHerrera.nombre = "Fernando";
var victor = {
    nombre: "Victor"
};
console.log(FernandoHerrera, victor);
/*Recuperando Alias*/
var exportar_2 = require("./exportar");
exportar_2.nomDes();
/*Recuperando datos de la exportacion default*/
var exportar_3 = require("./exportar");
exportar_3["default"]("Laravel");
