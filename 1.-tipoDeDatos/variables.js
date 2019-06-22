/*Declaracion de variables*/
var variable;
/*Inicialización de variables*/
variable = "Mi primera variable";
/*Declarando e inicializando la variable*/
var mensaje = "Hola Mundo";
/**Constantes**/
var pi = 3.141596542;
/*Boolean*/
console.log("***Boolean***");
var verdadero = true;
var falso = false;
/*Tabla Lógica*/
//Conjunción
console.log("Conjunción");
console.log("Verdadero y Verdadero", verdadero && verdadero);
console.log("Verdadero y falso", verdadero && falso);
console.log("Falso y verdadero", falso && verdadero);
console.log("Falso y falso", falso && falso);
//Disyunción
console.log("Disyunción");
console.log("Verdadero o verdadero", verdadero || verdadero);
console.log("Verdadero o falso", verdadero || falso);
console.log("Falso o verdadero", falso || verdadero);
console.log("Falso o falso", falso || falso);
console.log(typeof verdadero);
/*Fechas */
console.log("***Fechas***");
var hoy = new Date();
hoy = new Date('2019-05-21');
console.log(hoy);
/*Números */
console.log("***Números***");
var numeroDecimal = 20.5;
var numeroEntero = 20;
var numero1 = 15;
var numero2 = 5;
/*Operaciones Aritmeticas */
console.log("Suma", numero1 + numero2);
console.log("Resta", numero1 - numero2);
console.log("Multiplicación", numero1 * numero2);
console.log("División", numero1 / numero2);
console.log("Resto", numero1 % numero2);
/*Cadenas*/
console.log("***Cadenas***");
var cadena = "Hola Mundo";
var cadena2 = 'Hello World';
var cadenaMultilinea = "\nLorem ipsum dolor sit amet consectetur\n adipisicing elit. Perferendis at sit iusto \n ratione id voluptates. Quia nostrum eum eaque, \n quasi deleniti expedita placeat ipsam omnis. \n Aliquid asperiores doloremque reiciendis eligendi?\n";
//Concatenación
var concatenacion = "Mi primer : " + cadena + " en typescriopt";
var template = "\n    Mi primer " + cadena + " en typescript.    \n";
console.log(template);
//Metodos de cadenas
console.log(cadena.charAt(0));
console.log(cadena2.toUpperCase());
console.log(cadena2.toLowerCase());
/*Arrays*/
console.log("***Arrays***");
var lista = [20, 30, 40];
var listaNumeros = [1, 2, 3];
var listaArray = [5, 6, 7];
//Adicionar números
lista.push(50);
console.log(lista);
//Eliminar númros
listaNumeros.pop();
console.log(listaNumeros);
//Array string
var nombres = ["Adalid", "Kevin", "David"];
//Adicionar cadenas
nombres.push("Cayo");
console.log(nombres);
//Eliminar cadenas
nombres.pop();
console.log(nombres);
/*Tuplas*/
console.log("***Tuplas***");
var primero;
var segundo;
primero = [2, 4];
segundo = [10, 15];
var resultado = [primero[0] + segundo[0], primero[1] + segundo[1]];
console.log(resultado);
var tutor = ["Arnaldo Muñoz Mendoza", 23];
console.log("El tutor " + tutor[0] + " tiene " + tutor[1] + " a\u00F1os ");
/*Tipo de dato comodin*/
console.log("***Any***");
var objetoDesconocido;
objetoDesconocido = 10;
objetoDesconocido = "Hola";
objetoDesconocido = true;
console.log(objetoDesconocido);
var listaDesconocida = [20, true, "Mundo"];
console.log(listaDesconocida);
