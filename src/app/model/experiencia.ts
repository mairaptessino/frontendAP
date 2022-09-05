export class Experiencia {
    id? : number;
    nombreE: string;
    descripcionE: string;
    imagenE: string;
    fechadesdeE: string; 
    fechahastaE: string; 

    constructor (nombreE: string, descripcionE: string, imagenE:string, fechadesdeE:string, fechahastaE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenE= imagenE;
        this.fechadesdeE= fechadesdeE;
        this.fechahastaE= fechahastaE;
    }
}
