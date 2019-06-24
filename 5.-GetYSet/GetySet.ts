/*Get permite obtener cierta información*/
let permiso:boolean=true;
class Desarrollador{
    nombre:string;

    get nombreDes():string{
        return this.nombre;
    }
    set adicionarNombre(nom:string){
        if(permiso){
            this.nombre=nom;
        }
        else{
            console.log("Sin permiso");
        }
    } 

}
let tutor=new Desarrollador();
tutor.nombre="Arnaldo";
console.log(tutor.nombre);

tutor.adicionarNombre="Ivan";
console.log(tutor.nombreDes);



