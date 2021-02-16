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

  ngOcultarFormulario(id_sitio:any){
    console.log(id_sitio);
    
    $("#"+id_sitio).removeClass("formularioOculto");
  }

  ngMostrarFormulario(){
    $("#divOculto").addClass("formularioOculto");
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
