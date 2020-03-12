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

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioHoteles: HotelesService) {
    this.formularioRegistroAlojamientos = formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      foto: [''],
      precio: ['', [Validators.required]],
      capacidad: [''],
      valoracion: [''],
      telefono: ['', [Validators.required]],
      web: ['']
    });
   }

  ngOnInit() {
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

}
