var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nom) {
        this.nombre = nom;
    }
    Persona.prototype.edad = function (edad) {
        console.log(this.nombre + " este a\u00F1o cumplio " + edad + " a\u00F1os");
    };
    return Persona;
}());
var Tutor = /** @class */ (function (_super) {
    __extends(Tutor, _super);
    function Tutor(nombre, especialidad) {
        var _this = _super.call(this, nombre) || this;
        _this.especialidad = especialidad;
        return _this;
    }
    Tutor.prototype.pagar = function () {
        console.log("Pago la deuda");
    };
    return Tutor;
}(Persona));
var Adalid = new Tutor("David", "Desarrollo movil");
Adalid.pagar();
Adalid.edad(23);
