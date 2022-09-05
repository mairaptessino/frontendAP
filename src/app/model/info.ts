export class Info {
    id?: number;
    nombre: string;
    apellido: string;
    imagen: string;
    titulo: string;
    datos: string;

    constructor(nombre:string, apellido:string, imagen:string, titulo:string, datos:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
        this.titulo = titulo;
        this.datos = datos;
    }
}
