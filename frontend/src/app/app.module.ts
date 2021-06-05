import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaHomeComponent } from './vistas/vista-home/vista-home.component';
import { VistaHotelesComponent } from './vistas/vistasAlojamientos/vista-hoteles/vista-hoteles.component';
import { VistaActividadesComponent } from './vistas/vista-actividades/vista-actividades.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarComponent } from './vistas/registrar/registrar.component';
import { VistaApartamentosComponent } from './vistas/vistasAlojamientos/vista-apartamentos/vista-apartamentos.component';
import { VistaCampingsComponent } from './vistas/vistasAlojamientos/vista-campings/vista-campings.component';
import { VistaAlojamientoComponent } from './vistas/vistasAlojamientos/vista-alojamiento/vista-alojamiento.component';
import { PublicarAlojamientoComponent } from './vistas/vistasAlojamientos/publicar-alojamiento/publicar-alojamiento.component';
import { VistaTiendasComponent } from './vistas/vistasComercios/vista-tiendas/vista-tiendas.component';
import { VistaVeterinariosComponent } from './vistas/vistasComercios/vista-veterinarios/vista-veterinarios.component';
import { PublicarComercioComponent } from './vistas/vistasComercios/publicar-comercio/publicar-comercio.component';
import { VistaRestaurantesComponent } from './vistas/vistasComercios/vista-restaurantes/vista-restaurantes.component';
import { VistaComerciosComponent } from './vistasComercios/vista-comercios/vista-comercios.component';
import { VistaSearchComponent } from './vistas/vista-search/vista-search.component';
import { VistaUsuarioComponent } from './vistas/vista-usuario/vista-usuario.component';
import { VistaRoleUserComponent } from './vistas/vista-role-user/vista-role-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    VistaHomeComponent,
    VistaHotelesComponent,
    VistaActividadesComponent,
    RegistrarComponent,
    VistaApartamentosComponent,
    VistaCampingsComponent,
    VistaAlojamientoComponent,
    PublicarAlojamientoComponent,
    VistaTiendasComponent,
    VistaVeterinariosComponent,
    PublicarComercioComponent,
    VistaRestaurantesComponent,
    VistaComerciosComponent,
    VistaSearchComponent,
    VistaUsuarioComponent,
    VistaRoleUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
