/*Declaracion de variables*/
let variable;
/*Inicialización de variables*/
variable="Mi primera variable";
/*Declarando e inicializando la variable*/
let mensaje="Hola Mundo";
/**Constantes**/
const pi=3.141596542;

/*Boolean*/
console.log("***Boolean***");
let verdadero:boolean=true;
let falso:boolean=false;   

/*Tabla Lógica*/
//Conjunción
console.log("Conjunción");
console.log("Verdadero y Verdadero",verdadero && verdadero);
console.log("Verdadero y falso",verdadero && falso);
console.log("Falso y verdadero",falso && verdadero);
console.log("Falso y falso",falso && falso);
//Disyunción
console.log("Disyunción");
console.log("Verdadero o verdadero",verdadero || verdadero);
console.log("Verdadero o falso",verdadero || falso);
console.log("Falso o verdadero",falso || verdadero);
console.log("Falso o falso",falso || falso);

console.log(typeof verdadero);

/*Fechas */
console.log("***Fechas***");
let hoy:Date=new Date();
hoy=new Date('2019-05-21');
console.log(hoy);

/*Números */
console.log("***Números***");
let numeroDecimal:number=20.5;
let numeroEntero:number=20;

let numero1:number=15;
let numero2:number=5;

/*Operaciones Aritmeticas */
console.log("Suma", numero1+numero2);
console.log("Resta", numero1-numero2);
console.log("Multiplicación", numero1*numero2);
console.log("División", numero1/numero2);
console.log("Resto", numero1%numero2);

/*Cadenas*/
console.log("***Cadenas***"); 
let cadena:string="Hola Mundo";
let cadena2:string='Hello World';
let cadenaMultilinea=`
Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Perferendis at sit iusto 
 ratione id voluptates. Quia nostrum eum eaque, 
 quasi deleniti expedita placeat ipsam omnis. 
 Aliquid asperiores doloremque reiciendis eligendi?
`;

//Concatenación
let concatenacion:string="Mi primer : "+cadena+" en typescriopt" ;

let template:string=`
    Mi primer ${cadena} en typescript.    
`;
console.log(template);

//Metodos de cadenas
console.log(cadena.charAt(0));
console.log(cadena2.toUpperCase());
console.log(cadena2.toLowerCase());

/*Arrays*/
console.log("***Arrays***"); 
let lista=[20,30,40];
let listaNumeros:number[]=[1,2,3];
let listaArray:Array<number>=[5,6,7];

//Adicionar números
lista.push(50);
console.log(lista);
//Eliminar númros
listaNumeros.pop();
console.log(listaNumeros);

//Array string
let nombres:string[]=["Adalid","Kevin","David"];

//Adicionar cadenas
nombres.push("Cayo");
console.log(nombres);
//Eliminar cadenas
nombres.pop();
console.log(nombres);

/*Tuplas*/
console.log("***Tuplas***");
let primero:[number,number];
let segundo:[number,number];

primero=[2,4];
segundo=[10,15];

let resultado:[number,number]=[primero[0]+segundo[0],primero[1]+segundo[1]];
console.log(resultado);

let tutor:[string,number]=["Arnaldo Muñoz Mendoza",23];

console.log(`El tutor ${tutor[0]} tiene ${tutor[1]} años `);

/*Tipo de dato comodin*/

console.log("***Any***");
let objetoDesconocido:any;
objetoDesconocido=10;
objetoDesconocido="Hola";
objetoDesconocido=true;

console.log(objetoDesconocido);

let listaDesconocida:any=[20,true,"Mundo"];
console.log(listaDesconocida);


