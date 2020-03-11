import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaHomeComponent } from './vistas/vista-home/vista-home.component';
import { VistaHotelesComponent } from './vistas/vistasAlojamientos/vista-hoteles/vista-hoteles.component';
import { VistaRestaurantesComponent } from './vistas/vista-restaurantes/vista-restaurantes.component';
import { VistaActividadesComponent } from './vistas/vista-actividades/vista-actividades.component';
import { VistaConsejosComponent } from './vistas/vista-consejos/vista-consejos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarComponent } from './vistas/registrar/registrar.component';
import { VistaApartamentosComponent } from './vistas/vistasAlojamientos/vista-apartamentos/vista-apartamentos.component';
import { VistaCampingsComponent } from './vistas/vistasAlojamientos/vista-campings/vista-campings.component';
import { VistaAlojamientoComponent } from './vistas/vistasAlojamientos/vista-alojamiento/vista-alojamiento.component';
import { PublicarAlojamientoComponent } from './vistas/vistasAlojamientos/publicar-alojamiento/publicar-alojamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    VistaHomeComponent,
    VistaHotelesComponent,
    VistaRestaurantesComponent,
    VistaActividadesComponent,
    VistaConsejosComponent,
    RegistrarComponent,
    VistaApartamentosComponent,
    VistaCampingsComponent,
    VistaAlojamientoComponent,
    PublicarAlojamientoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
