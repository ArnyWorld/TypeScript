/*Funciones*/
function Saludar(nombre) {
    return "Hola " + nombre;
}
var saludo = Saludar("Arnaldo");
console.log(saludo);
function Sumar(x, y) {
    return x + y;
}
var resultado = Sumar(5, 3);
console.log(resultado);
/*Parametros obligatorios*/
function programar(nombre) {
    var mensaje;
    mensaje = nombre + " esta programando en TypeScript";
    console.log(mensaje);
}
programar("Oso");
/*Parametro opcional*/
function desarrollar(nombre, programa1, programa2) {
    if (programa1 === void 0) { programa1 = "Java"; }
    var mensaje;
    if (programa2) {
        mensaje = nombre + " esta desarrollando en " + programa1 + " y no con " + programa2;
    }
    else {
        mensaje = nombre + " esta desarrollando en " + programa1 + " ";
    }
    console.log(mensaje);
}
desarrollar("Oso", "Java");
desarrollar("Oso", "Java", "Kotlin");
/*Parametros REST*/
console.log("***PARAMETROS REST***");
function lenguajes(persona) {
    var lenguajes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lenguajes[_i - 1] = arguments[_i];
    }
    return persona + " desarrolla en los lenguajes " + lenguajes.join(",");
}
console.log(lenguajes("Cayo", "Ruby", "Java", "Python"));
