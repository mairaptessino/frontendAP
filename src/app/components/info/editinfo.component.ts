import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from 'src/app/model/info';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
  info: Info = null;


  constructor(private infoS: InfoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.infoS.detail(id).subscribe(
      data=>{
        this.info = data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.infoS.update(id, this.info).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar la información");
        this.router.navigate(['']);
      }
    )
  }

}
