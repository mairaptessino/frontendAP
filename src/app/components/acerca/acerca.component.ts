import { Component, OnInit } from '@angular/core';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  acerca: Acerca[]=[];

  constructor(private acercaS: AcercaService, private tokenService: TokenService) { }
  isLogged= false;

  ngOnInit(): void {
    this.cargarAcerca();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  cargarAcerca(): void{
    this.acercaS.lista().subscribe(
      data=>{
        this.acerca = data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.acercaS.delete(id).subscribe(
        data=>{
          this.cargarAcerca();
        }, err=>{
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
