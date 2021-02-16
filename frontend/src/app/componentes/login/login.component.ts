import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      email: ['',[Validators.required]],
      password:  ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }


  submit() {
    this.servicioUsuario.getLogin(this.formLogin.value).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/inicio']);
          localStorage.setItem('token', res[1]);
          localStorage.setItem('id', res[0].id_usuario);
          localStorage.setItem('ROLE', res[0].tipo_usuario);
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

  logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          this.router.navigate(['/login']);
        }

  }

