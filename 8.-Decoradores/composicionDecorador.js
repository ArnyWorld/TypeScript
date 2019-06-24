var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function prueba1(clase) {
    console.log("Primer decorador");
}
function prueba2(clase) {
    console.log("Segundo decorador");
}
var Tutor = /** @class */ (function () {
    function Tutor() {
        this.especialidad = "Desarrollo Movil";
    }
    Tutor = __decorate([
        prueba1,
        prueba2
    ], Tutor);
    return Tutor;
}());
var docente = new Tutor();
