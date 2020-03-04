import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Registrousuario } from '../modelos/registrousuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  crearUsuario(usuarioM: Registrousuario): Observable<any> {
    console.log(usuarioM);
    return this.http.post('http://localhost:3000/usuarios/registrar', usuarioM);
  }

   getLogin(usuarioM: Usuario): Observable<any> {

    return this.http.post('http://localhost:3000/usuarios/login', usuarioM);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
