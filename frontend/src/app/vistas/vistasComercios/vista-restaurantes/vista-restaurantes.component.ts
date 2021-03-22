import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComerciosService } from 'src/app/services/comercios.service.service';

declare var $: any;

@Component({
  selector: 'app-vista-restaurantes',
  templateUrl: './vista-restaurantes.component.html',
  styleUrls: ['./vista-restaurantes.component.scss']
})
export class VistaRestaurantesComponent implements OnInit {

  private formularioUpdate: FormGroup;
  public listaRestaurantes: any;
  public listaCiudades: any;
  public listaTipoSitios: any
  constructor(private servicioComercio: ComerciosService, private router: Router, private FormBuilder: FormBuilder, private servicioHoteles: HotelesService ) {
    this.formularioUpdate = FormBuilder.group({
      nombre: [''],
      descripcion: [''],
      foto: [''],
      precio: [''],
      capacidad: [''],
      valoracion: [''],
      telefono: [''],
      web: [''],
      id_ciudad: [''],
      id_usuario: [localStorage.getItem('id')],
      id_tipo:['']
   });
   }

  ngOnInit() {
    this.listarCiudades();
    this.listarTipoSitios();

    this.servicioComercio.getRestaurantes().subscribe(
      res => {
        this.listaRestaurantes = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  submit(id_sitio:any) {   
    this.servicioHoteles.updateAlojamientos(this.formularioUpdate.value, id_sitio).subscribe(
      res => {
        if (res) {
          alert('Restaurante actualizado correctamente');
          this.router.navigate(['/restaurantes']);
          this.ngOnInit;
        } else {
          alert('No se ha podido actualizar el restaurante');
          this.router.navigate(['/restaurantes']);
        }
        console.log(res);
  }, 
      err => {
        console.log(err);
      }
    );
  }

  puedeEditar(id_usuario:any){
    if(localStorage.getItem('id') == id_usuario || localStorage.getItem('ROLE') == 'ROLE_ADMIN') {

      console.log("el local id", localStorage.getItem('id'), "el id usuario es", id_usuario );
     return true;
   } else {
      return false;
     }
  }

  ngBorrarSitio(id_sitio:any){
    if(confirm('¿Estás seguro de borrarlo?')){
    this.servicioHoteles.deleteSite(id_sitio).subscribe(
      res => {
        alert('Restaurante borrado correctamente')
        console.log(res);
        this.router.navigate(['/restaurantes']);
      },
      err => {
        console.log(err);
      }
    );
  }}

      listarCiudades() {
        this.servicioHoteles.listarCiudades().subscribe(
          res => {
            this.listaCiudades= res;
          },
          err => {
            console.log(err);
          }
        );
      }
      listarTipoSitios() {
        this.servicioHoteles.listarTipoSitios().subscribe(
          res => {
            this.listaTipoSitios= res;
          },
          err => {
            console.log(err);
          }
        );
      }

  ngOcultarFormulario(id_sitio:any){
    $("#"+id_sitio).removeClass("formularioOculto");
    $("#vista"+id_sitio).removeClass("formularioMostrar");
  }

  ngMostrarFormulario(id_sitio:any){
    $("#"+id_sitio).addClass("formularioMostrar");
    $("#vista"+id_sitio).addClass("formularioOculto");
  }
}
