import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-vista-alojamiento',
  templateUrl: './vista-alojamiento.component.html',
  styleUrls: ['./vista-alojamiento.component.scss']
})
export class VistaAlojamientoComponent implements OnInit {
  private formularioUpdate: FormGroup;
  public listaAlojamientos: any;
  public listaCiudades: any;
  public listaTipoSitios: any;
  constructor(private router: Router, private FormBuilder: FormBuilder, private servicioHoteles: HotelesService) {
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
    

    this.servicioHoteles.getAlojamientos().subscribe(
      res => {
        this.listaAlojamientos = res;
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

  submit(id_sitio:any) {   
    this.servicioHoteles.updateAlojamientos(this.formularioUpdate.value, id_sitio).subscribe(
      res => {
        if (res) {
          alert('Alojamiento actualizado correctamente');
          this.router.navigate(['/alojamientos']);
          this.ngOnInit;
        } else {
          alert('No se ha podido actualizar el alojamiento');
          this.router.navigate(['/alojamientos']);
        }
        console.log(res);
  }, 
      err => {
        console.log(err);
      }
    );
  }

  ngBorrarSitio(id_sitio:any){
    if(confirm('¿Estás seguro de borrarlo?')){
    this.servicioHoteles.deleteSite(id_sitio).subscribe(
      res => {
        alert('Alojamiento borrado correctamente')
        console.log(res);
        this.router.navigate(['/alojamientos']);
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


  get nombre() {
    return this.formularioUpdate.get('nombre');
  }

  get descripcion() {
    return this.formularioUpdate.get('descripcion');
  }

  get foto() {
    return this.formularioUpdate.get('foto');
  }

  get precio() {
    return this.formularioUpdate.get('precio');
  }

  get capacidad() {
    return this.formularioUpdate.get('capacidad');
  }
  get telefono() {
    return this.formularioUpdate.get('telefono');
  }

  get valoracion() {
    return this.formularioUpdate.get('valoracion');
  }

  get web() {
    return this.formularioUpdate.get('web');
  }
 
  get ciudades(){
  return this.formularioUpdate.get('id_ciudad');
  
}
  get tipoSitios(){
    return this.formularioUpdate.get('id_tipo');
  }
}
