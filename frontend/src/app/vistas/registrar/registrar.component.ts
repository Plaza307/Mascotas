import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegistroUsuario } from 'src/app/modelos/registrousuario';
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
  private modeloRegistro: RegistroUsuario;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioUsuario: UsuariosService) {
    this.formularioRegistro = formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', [Validators.minLength(9)]],
      f_nac: ['', [Validators.required]],
      tipo_usuario: ['ROLE_USER']
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
  get tipo_usuario() {
    return this.formularioRegistro.get('tipo_usuario');
  }

}
