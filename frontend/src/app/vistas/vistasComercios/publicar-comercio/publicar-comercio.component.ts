import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComerciosService } from '../../../services/comercios.service.service';

@Component({
  selector: 'app-publicar-comercio',
  templateUrl: './publicar-comercio.component.html',
  styleUrls: ['./publicar-comercio.component.scss']
})
export class PublicarComercioComponent implements OnInit {

  private formularioRegistroComercios: FormGroup;
  public listaCiudades: any;
  public listaTipoSitios: any;
  public usuarioLogged: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioComercio: ComerciosService) {
    this.formularioRegistroComercios = formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      foto: [''],
      precio: [''],
      capacidad: [''],
      valoracion: [''],
      telefono: ['', [Validators.required]],
      web: [''],
      id_ciudad: [''],
      id_usuario: [localStorage.getItem('id')],
      id_tipo:['']

    });
   }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.listarCiudades();
      this.listarTipoSitios();
    } else {
      alert('Tienes que iniciar sesión para crear sitios')
      this.router.navigate(['/login']);
    }
  }


  submit() {
    this.servicioComercio.publicarComercio(this.formularioRegistroComercios.value).subscribe(
      res => {
        if (res) {
          alert('Comercio creado correctamente');
          this.router.navigate(['/comercios']);
        } else {
          this.router.navigate(['/publicar/comercio']);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  listarCiudades() {
    this.servicioComercio.listarCiudades().subscribe(
      res => {
        this.listaCiudades= res;
      },
      err => {
        console.log(err);
      }
    );
  }
  usuario() {
    res =>{
      this.usuarioLogged=res
    }
  }
  listarTipoSitios() {
    this.servicioComercio.listarTipoSitios().subscribe(
      res => {
        this.listaTipoSitios= res;
      },
      err => {
        console.log(err);
      }
    );
  }


  get nombre() {
    return this.formularioRegistroComercios.get('nombre');
  }

  get descripcion() {
    return this.formularioRegistroComercios.get('descripcion');
  }

  get foto() {
    return this.formularioRegistroComercios.get('foto');
  }

  get precio() {
    return this.formularioRegistroComercios.get('precio');
  }

  get capacidad() {
    return this.formularioRegistroComercios.get('capacidad');
  }
  get telefono() {
    return this.formularioRegistroComercios.get('telefono');
  }

  get valoracion() {
    return this.formularioRegistroComercios.get('valoracion');
  }

  get web() {
    return this.formularioRegistroComercios.get('web');
  }
 
get ciudades(){
  return this.formularioRegistroComercios.get('id_ciudad');
  
}
  get tipoSitios(){
    return this.formularioRegistroComercios.get('id_tipo');
  }
}
