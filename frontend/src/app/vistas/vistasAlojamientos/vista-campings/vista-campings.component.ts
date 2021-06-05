import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-vista-campings',
  templateUrl: './vista-campings.component.html',
  styleUrls: ['./vista-campings.component.scss']
})
export class VistaCampingsComponent implements OnInit {

  public listaCampings: any;

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
    this.mostrarCampings();
    this.listarCiudades();
    this.listarTipoSitios();
  }

  mostrarCampings() {
    this.servicioHoteles.getCampings().subscribe(
      res => {
        this.listaCampings = res;
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
          alert('Camping actualizado correctamente');
          this.router.navigate(['/campings']);
          this.ngOnInit;
          window.location.reload();
        } else {
          alert('No se ha podido actualizar el camping');
          this.router.navigate(['/campings']);
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
        alert('camping borrado correctamente')
        console.log(res);
        this.router.navigate(['/campings']);
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
