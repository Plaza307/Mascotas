import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VistaHomeComponent } from './vistas/vista-home/vista-home.component';
import { RegistrarComponent } from './vistas/registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: VistaHomeComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }