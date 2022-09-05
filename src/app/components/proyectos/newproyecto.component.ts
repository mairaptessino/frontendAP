import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imagenE: string;
  linkE: string;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() : void{
    const proyectos = new Proyectos(this.nombreE, this.descripcionE, this.imagenE, this.linkE);
    this.proyectosS.save(proyectos).subscribe(
      data=>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']);
      })
    
  }



}
