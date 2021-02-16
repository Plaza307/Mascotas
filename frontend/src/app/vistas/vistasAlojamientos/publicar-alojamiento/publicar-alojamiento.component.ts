import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';



@Component({
  selector: 'app-publicar-alojamiento',
  templateUrl: './publicar-alojamiento.component.html',
  styleUrls: ['./publicar-alojamiento.component.scss']
})
export class PublicarAlojamientoComponent implements OnInit {

  private formularioRegistroAlojamientos: FormGroup;
  public listaCiudades: any;
  public listaTipoSitios: any;
  public usuarioLogged: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private servicioHoteles: HotelesService) {
    this.formularioRegistroAlojamientos = formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      foto: [''],
      precio: ['', [Validators.required]],
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
    this.servicioHoteles.publicarAlojamiento(this.formularioRegistroAlojamientos.value).subscribe(
      res => {
        if (res) {
          alert('Alojamiento creado correctamente');
          this.router.navigate(['/alojamientos']);
        } else {
          this.router.navigate(['/publicar/alojamiento']);
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
  usuario() {
    res =>{
      this.usuarioLogged=res
    }
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


  get nombre() {
    return this.formularioRegistroAlojamientos.get('nombre');
  }

  get descripcion() {
    return this.formularioRegistroAlojamientos.get('descripcion');
  }

  get foto() {
    return this.formularioRegistroAlojamientos.get('foto');
  }

  get precio() {
    return this.formularioRegistroAlojamientos.get('precio');
  }

  get capacidad() {
    return this.formularioRegistroAlojamientos.get('capacidad');
  }
  get telefono() {
    return this.formularioRegistroAlojamientos.get('telefono');
  }

  get valoracion() {
    return this.formularioRegistroAlojamientos.get('valoracion');
  }

  get web() {
    return this.formularioRegistroAlojamientos.get('web');
  }
 
  get ciudades(){
  return this.formularioRegistroAlojamientos.get('id_ciudad');
  
}
  get tipoSitios(){
    return this.formularioRegistroAlojamientos.get('id_tipo');
  }

}
