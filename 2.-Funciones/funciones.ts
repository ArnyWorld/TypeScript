/*Funciones*/
function Saludar(nombre:string):string{
    return "Hola "+nombre;
}
let saludo=Saludar("Arnaldo");
console.log(saludo);

function Sumar(x:number,y:number):number{
    return x+y;
}
let resultado=Sumar(5,3);
console.log(resultado);

/*Parametros obligatorios*/
function programar(nombre:string) {
    let mensaje:string;
    mensaje = `${nombre} esta programando en TypeScript`;
    console.log(mensaje);
}
programar("Oso");
/*Parametro opcional*/
function desarrollar(nombre:String,programa1:string="Java",programa2?:string){
	let mensaje:string;
	if(programa2){
		mensaje=`${nombre} esta desarrollando en ${programa1} y no con ${programa2}`;
	}
	else{
		mensaje=`${nombre} esta desarrollando en ${programa1} `;	
	}

	console.log(mensaje);
 }

 desarrollar("Oso","Java");

 desarrollar("Oso","Java","Kotlin");

 /*Parametros REST*/
 console.log("***PARAMETROS REST***");
 function lenguajes(persona:string, ...lenguajes:string[]):string{
    return `${persona} desarrolla en los lenguajes ${lenguajes.join(",")}`;
 
}
console.log(lenguajes("Cayo","Ruby","Java","Python"));