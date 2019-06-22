var Desarrollador = /** @class */ (function () {
    function Desarrollador(nom, edad_, exp, esp, proy) {
        this.proyectos = 0;
        this.nombre = nom;
        this.edad = edad_;
        this.experiencia = exp;
        this.especialidad = esp;
        this.proyectos = proy;
        console.log(this, "Datos");
    }
    Desarrollador.prototype.GanarExperiencia = function () {
        this.experiencia = this.experiencia + 1;
    };
    return Desarrollador;
}());
var fullStack = new Desarrollador("Arnaldo", 24, 2, "Desarrollo Web", 4);
fullStack.GanarExperiencia();
console.log(fullStack.experiencia, "experiencia ");
