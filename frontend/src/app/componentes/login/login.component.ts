import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formLogin: FormGroup;
  private modeloUsuario: Usuario;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioUsuario: UsuariosService) {
    this.formLogin = formBuilder.group({
      email: [''],
      password: ['']
    });
   }

  ngOnInit() {
  }


  submit() {
    this.servicioUsuario.getLogin(this.formLogin.value).subscribe(
      res => {
        console.log(res);

        if (res[0]) {
          this.router.navigate(['/inicio']);
          localStorage.setItem('token', res[1]);
        } else {
          this.router.navigate(['/login']);
          alert('El login es incorrecto, revisa el email y el password');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
