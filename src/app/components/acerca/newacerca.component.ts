import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-newacerca',
  templateUrl: './newacerca.component.html',
  styleUrls: ['./newacerca.component.css']
})
export class NewacercaComponent implements OnInit {
  info: string='';
  

  constructor(private acercaS: AcercaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acerca = new Acerca(this.info);
    this.acercaS.save(acerca).subscribe(
      data=>{
        alert("Información añadida correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']);
      })
  }

}
