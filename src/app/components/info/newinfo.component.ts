import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-newinfo',
  templateUrl: './newinfo.component.html',
  styleUrls: ['./newinfo.component.css']
})
export class NewinfoComponent implements OnInit {
  nombre: string='';
  apellido: string='';
  titulo: string='';
  datos: string='';
  imagen: string='';

  constructor(private infoS: InfoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const info = new Info(this.nombre, this.apellido, this.imagen, this.titulo, this.datos);
    this.infoS.save(info).subscribe(
      data=>{
        alert("Información añadida correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
