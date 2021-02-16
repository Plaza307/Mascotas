import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroSitios } from '../modelos/registroAlojamiento';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {

  constructor(private http: HttpClient) { }

  getComercios(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/comercios');
  }

  getRestaurantes(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/restaurantes');
  }
  getTiendas(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/tiendas');
  }
  getVeterinarios(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/veterinarios');
  }
  publicarComercio(comercioM: RegistroSitios): Observable<any> {
    
    return this.http.post('http://localhost:3000/sitios/publicar/comercio/', comercioM);
  } 

  listarCiudades(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/listarCiudades');
  } 

  listarTipoSitios(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/getTipoComercio');
  } 
  getTipoAll(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/getTipoAll');
  }
  buscador(result: RegistroSitios): Observable<any> {
  console.log("resultado q envia", result);
   localStorage.setItem("id_tipo", JSON.stringify(result.id_tipo));
   localStorage.setItem("id_ciudad", JSON.stringify(result.id_ciudad));
    return this.http.post('http://localhost:3000/sitios/resultBusqueda/', result);
  }
  getBuscador(): Observable<any> { 

    const tipo = JSON.parse(localStorage.getItem("id_tipo"))
    const ciudad = JSON.parse(localStorage.getItem("id_ciudad"))
    return this.http.post('http://localhost:3000/sitios/busqueda', [tipo, ciudad]);
  }



  getUsuario() {
    return localStorage.getItem('id');
  }  
}