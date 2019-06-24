/*Get permite obtener cierta información*/
var permiso = true;
var Desarrollador = /** @class */ (function () {
    function Desarrollador() {
    }
    Object.defineProperty(Desarrollador.prototype, "nombreDes", {
        get: function () {
            return this.nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Desarrollador.prototype, "adicionarNombre", {
        set: function (nom) {
            if (permiso) {
                this.nombre = nom;
            }
            else {
                console.log("Sin permiso");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Desarrollador;
}());
var tutor = new Desarrollador();
tutor.nombre = "Arnaldo";
console.log(tutor.nombre);
tutor.adicionarNombre = "Ivan";
console.log(tutor.nombreDes);
