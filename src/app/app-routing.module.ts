import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercaComponent } from './components/acerca/editacerca.component';
import { NewacercaComponent } from './components/acerca/newacerca.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditskillComponent } from './components/hys/editskill.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { EditinfoComponent } from './components/info/editinfo.component';
import { NewinfoComponent } from './components/info/newinfo.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent },
  {path: 'editedu/:id', component: EditeducacionComponent },
  {path: 'nuevaskill', component: NewskillComponent },
  {path: 'editskill/:id', component: EditskillComponent },
  {path: 'nuevoproyecto', component: NewproyectoComponent },
  {path: 'editproyecto/:id', component: EditproyectoComponent },
  {path: 'nuevainfo', component: NewinfoComponent },
  {path: 'editinfo/:id', component: EditinfoComponent },
  {path: 'nuevaacerca', component: NewacercaComponent },
  {path: 'editacerca/:id', component: EditacercaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
