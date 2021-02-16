import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../services/comercios.service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-home',
  templateUrl: './vista-home.component.html',
  styleUrls: ['./vista-home.component.scss']
})
export class VistaHomeComponent implements OnInit {

  private formularioBusqueda: FormGroup;
  public listaTipoSitios: any;
  public listaCiudades: any;

  constructor(private router: Router,  private formBuilder: FormBuilder, private servicioHoteles: ComerciosService) {
    
    this.formularioBusqueda = formBuilder.group({
      id_tipo:['', [Validators.required]],
      id_ciudad: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this.listarTipoAll();
    this.listarCiudades();
  }

  submit() {
    this.servicioHoteles.buscador(this.formularioBusqueda.value).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/resultBusqueda']);
          localStorage.setItem('resultado nombre', res[0].nombre);
        } else {
          alert("No hay sitios registrados con esos parámetros")
          this.router.navigate(['/inicio']);
        }
        console.log("esta es la respuesta", res);
      },
      err => {
        console.log(err);
      }
    );
  }

  listarTipoAll() {
    this.servicioHoteles.getTipoAll().subscribe(
      res => {
        this.listaTipoSitios= res;
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

  // search(){
  //   this.servicioHoteles.getAll().subscribe(
  //   res => {
  //     for (let i = 0; i < res.length; i++){
  //       this.buscadorSitios=res[i].nombre;
  //       console.log("esto es el buscador", res[i].nombre);
  //     }
      
  //   },
  //   err => {
  //     console.log(err);
  //    }
  //   );
  // }
  

  get tipoSitios(){
    return this.formularioBusqueda.get('id_tipo');
  }
  get busquedas(){
    return this.formularioBusqueda.get('id_ciudad');
  }
}
