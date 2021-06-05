import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComerciosService } from 'src/app/services/comercios.service.service';

declare var $: any;


@Component({
  selector: 'app-vista-tiendas',
  templateUrl: './vista-tiendas.component.html',
  styleUrls: ['./vista-tiendas.component.scss']
})
export class VistaTiendasComponent implements OnInit {

  private formularioUpdate: FormGroup;
  public listaTiendas: any;
  public listaCiudades: any;
  public listaTipoSitios: any
  constructor(private servicioComercio: ComerciosService, private router: Router, private FormBuilder: FormBuilder, private servicioHoteles: HotelesService ) {
    this.formularioUpdate = FormBuilder.group({
      id_sitio:[null],
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

    this.servicioComercio.getTiendas().subscribe(
      res => {
        this.listaTiendas = res;
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
          alert('Tienda actualizada correctamente');
          this.router.navigate(['/tiendas']);
          this.ngOnInit;
          window.location.reload();
        } else {
          alert('No se ha podido actualizar la tienda');
          this.router.navigate(['/tiendas']);
          window.location.reload();
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
    if(confirm('¿Estás seguro de borrarla?')){
    this.servicioHoteles.deleteSite(id_sitio).subscribe(
      res => {
        alert('Tienda borrada correctamente')
        console.log(res);
        this.router.navigate(['/tiendas']);
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
