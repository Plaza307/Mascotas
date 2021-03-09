import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroSitios } from '../modelos/registroAlojamiento';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http: HttpClient) { }

  updateAlojamientos(alojamiento: RegistroSitios, id_sitio:any): Observable<any> {
    return this.http.put('http://localhost:3000/sitios/'+ id_sitio, alojamiento);
  }
  getAlojamientos(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/alojamientos');
  }

  getApartamentos(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/apartamentos');
  }
  getCampings(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/campings');
  }
  getHoteles(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/hoteles');
  }
  publicarAlojamiento(alojamientoM: RegistroSitios): Observable<any> {
    
    return this.http.post('http://localhost:3000/sitios/publicar/alojamiento/', alojamientoM);
  } 

  listarCiudades(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/listarCiudades');
  } 

  listarTipoSitios(): Observable<any> {
    return this.http.get('http://localhost:3000/sitios/getTipoSitio');
  } 

  getUsuario() {
    return localStorage.getItem('id');
  } 
}
