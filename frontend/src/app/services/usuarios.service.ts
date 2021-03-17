import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modelos/usuario';
import { Observable } from 'rxjs';
import { RegistroUsuario } from '../modelos/registroUsuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  [x: string]: any;

  constructor(private http: HttpClient, private router: Router) { }

  crearUsuario(usuarioM: RegistroUsuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/registrar', usuarioM);
  }

   getLogin(usuarioM: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuarioM);
  }

   getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/getAll');
  }
  
   getUserSesion(): Observable<any> {
     const id_usuario = localStorage.getItem('id')
    return this.http.get('http://localhost:3000/usuarios/'+ id_usuario);
  }

   deleteUser(id_usuario:any): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/'+ id_usuario);
  }

  updateUser(usuario: Usuario, id_usuario:any): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/'+ id_usuario, usuario);
  }
  updatePassword(password: Usuario, id_usuario:any): Observable<any> {
    console.log("contraseña", password);
    console.log("id usuario", id_usuario);
    return this.http.put('http://localhost:3000/usuarios/restartPass/'+ id_usuario, password);
  }

  logIn() {
    return !!localStorage.getItem('id');
  }

  logOut() {
    if(localStorage.length > 0){
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('ROLE');
      alert('El usuario ha cerrado sesión');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }



}
