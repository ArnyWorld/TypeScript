class Desarrollador{
    nombre:string;
    edad:number;
    experiencia:number;
    especialidad:string;
    proyectos:number=0;

    constructor(nom:string,edad_:number,exp:number,esp:string,proy:number){
        this.nombre=nom;
        this.edad=edad_;
        this.experiencia=exp;
        this.especialidad=esp;
        this.proyectos=proy;
        console.log(this,"Datos");
    }
    
    GanarExperiencia(){
        this.experiencia=this.experiencia+1;
    }

}
let fullStack=new Desarrollador("Arnaldo",24,2,"Desarrollo Web",4);
fullStack.GanarExperiencia();
console.log(fullStack.experiencia,"experiencia ");

