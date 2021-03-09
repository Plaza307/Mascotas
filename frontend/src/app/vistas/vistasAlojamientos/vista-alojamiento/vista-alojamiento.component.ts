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
    // if(localStorage.getItem('token') && localStorage.getItem('ROLE') == 'ROLE_ADMIN'){
    //  alert('El usuario puede editar todos los sitios')
    // }else if(localStorage.getItem('token') && localStorage.getItem('ROLE') == 'ROLE_USER') {
    //   alert('El usuario tiene token pero solo puede editar los sitios que él ha creado')
    // } else {
    //   alert('No tiene token')
    // }

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

  ngMostrarBoton(){
    $("#botonEditar").removeClass("btnEditar")
  }

  ngOcultarBoton(){
    $("#botonEditar").addClass("btnEditar");
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
