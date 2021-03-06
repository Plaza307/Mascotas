import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { VistaHomeComponent } from './vistas/vista-home/vista-home.component';
import { RegistrarComponent } from './vistas/registrar/registrar.component';
import { HotelesService } from './services/hoteles.service';
import { VistaHotelesComponent } from './vistas/vistasAlojamientos/vista-hoteles/vista-hoteles.component';
import { VistaApartamentosComponent } from './vistas/vistasAlojamientos/vista-apartamentos/vista-apartamentos.component';
import { VistaCampingsComponent } from './vistas/vistasAlojamientos/vista-campings/vista-campings.component';
import { VistaAlojamientoComponent } from './vistas/vistasAlojamientos/vista-alojamiento/vista-alojamiento.component';
import { PublicarAlojamientoComponent } from './vistas/vistasAlojamientos/publicar-alojamiento/publicar-alojamiento.component';
import { PublicarComercioComponent } from './vistas/vistasComercios/publicar-comercio/publicar-comercio.component';
import { VistaVeterinariosComponent } from './vistas/vistasComercios/vista-veterinarios/vista-veterinarios.component';
import { VistaTiendasComponent } from './vistas/vistasComercios/vista-tiendas/vista-tiendas.component';
import { VistaRestaurantesComponent } from './vistas/vistasComercios/vista-restaurantes/vista-restaurantes.component';
import { VistaComerciosComponent } from './vistasComercios/vista-comercios/vista-comercios.component';
import { VistaSearchComponent } from './vistas/vista-search/vista-search.component';
import { VistaRoleUserComponent } from './vistas/vista-role-user/vista-role-user.component';
import { VistaUsuarioComponent } from './vistas/vista-usuario/vista-usuario.component';

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
    path: 'alojamientos',
    component: VistaAlojamientoComponent
  },
  {
    path: 'apartamentos',
    component: VistaApartamentosComponent
  },
  {
    path: 'campings',
    component: VistaCampingsComponent
  },
  {
    path: 'hoteles',
    component: VistaHotelesComponent
  },
  {
    path: 'comercios',
    component: VistaComerciosComponent
  },
  {
    path: 'restaurantes',
    component: VistaRestaurantesComponent
  },
  {
    path: 'tiendas',
    component: VistaTiendasComponent
  },
  {
    path: 'veterinarios',
    component: VistaVeterinariosComponent
  },
  {
    path: 'publicar/comercio',
    component: PublicarComercioComponent
  },
  {
    path: 'publicar/alojamiento',
    component: PublicarAlojamientoComponent
  },
  {
    path: 'resultBusqueda',
    component: VistaSearchComponent
  },
  {
    path: 'vistaAdmin',
    component: VistaUsuarioComponent
  },
  {
    path: 'vistaRoleUser',
    component: VistaRoleUserComponent
  },
  {
    path: 'navBar',
    component: NavbarComponent
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