import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info : Info[] = [];

  constructor(private infoS: InfoService, private tokenService: TokenService) { }
  isLogged= false;

  ngOnInit(): void {
    this.cargarInfo();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged= false;
    }
  }

  cargarInfo(): void{
    this.infoS.Lista().subscribe(
      data=>{
        this.info = data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.infoS.delete(id).subscribe(
        data=>{
          this.cargarInfo();
        }, err=>{
          alert("No se pudo eliminar");
        }
      )
    }
  }


  
}
