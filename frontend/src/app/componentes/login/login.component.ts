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

        if (res) {
          this.router.navigate(['/inicio']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
