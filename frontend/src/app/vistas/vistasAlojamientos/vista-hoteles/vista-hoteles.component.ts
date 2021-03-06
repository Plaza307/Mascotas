import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-vista-hoteles',
  templateUrl: './vista-hoteles.component.html',
  styleUrls: ['./vista-hoteles.component.scss']
})
export class VistaHotelesComponent implements OnInit {

  public listaHoteles: any;
  private formularioUpdate: FormGroup;
  public listaAlojamientos: any;
  public listaCiudades: any;
  public listaTipoSitios: any;
  constructor(private router: Router, private FormBuilder: FormBuilder, private servicioHoteles: HotelesService) {
    this.formularioUpdate = FormBuilder.group({
      id_sitio: [null],
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

    this.servicioHoteles.getHoteles().subscribe(
      res => {
        this.listaHoteles = res;
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
          alert('Hotel actualizado correctamente');
          this.router.navigate(['/hoteles']);
          window.location.reload();
          this.ngOnInit;
        } else {
          alert('No se ha podido actualizar el hotel');
          this.router.navigate(['/hoteles']);
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
     return true;
   } else {
      return false;
     }
  }


  ngBorrarSitio(id_sitio:any){
    if(confirm('¿Estás seguro de borrarlo?')){
    this.servicioHoteles.deleteSite(id_sitio).subscribe(
      res => {
        alert('Hotel borrado correctamente')
        console.log(res);
        this.router.navigate(['/hoteles']);
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
