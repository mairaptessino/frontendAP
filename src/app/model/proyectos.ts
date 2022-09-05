export class Proyectos {
    id?: number;
    nombreE: string;
    descripcionE: string;
    imagenE: string;
    linkE: string;

    constructor (nombreE:string, descripcionE:string, imagenE:string, linkE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenE= imagenE;
        this.linkE= linkE;
    }
}
