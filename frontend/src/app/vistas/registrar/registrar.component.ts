import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Registrousuario } from 'src/app/modelos/registrousuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  private formularioRegistro: FormGroup;
  private modeloRegistro: Registrousuario;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioUsuario: UsuariosService) {
    this.formularioRegistro = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      telefono: [''],
      f_nac: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  submit() {
    this.servicioUsuario.crearUsuario(this.formularioRegistro.value).subscribe(
      res => {
        if (res) {
          alert('Usuario creado correctamente');
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/registrar']);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  get nombre() {
    return this.formularioRegistro.get('nombre');
  }

  get apellidos() {
    return this.formularioRegistro.get('apellidos');
  }

  get email() {
    return this.formularioRegistro.get('email');
  }

  get password() {
    return this.formularioRegistro.get('password');
  }

  get telefono() {
    return this.formularioRegistro.get('telefono');
  }

  get f_nac() {
    return this.formularioRegistro.get('f_nac');
  }

}
