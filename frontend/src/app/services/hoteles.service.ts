import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registroalojamiento } from '../modelos/registroAlojamiento';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http: HttpClient) { }

  getAlojamientos(): Observable<any> {
    return this.http.get('http://localhost:3000/alojamientos');
  }

  getApartamentos(): Observable<any> {
    return this.http.get('http://localhost:3000/apartamentos');
  }
  getCampings(): Observable<any> {
    return this.http.get('http://localhost:3000/campings');
  }
  getHoteles(): Observable<any> {
    return this.http.get('http://localhost:3000/hoteles');
  }
  publicarAlojamiento(alojamientoM: Registroalojamiento): Observable<any> {
    return this.http.post('http://localhost:3000/publicar/alojamiento', alojamientoM);
  }
  //hacer el modelo para el resgitro de hoteles y meterlo como parametro
}
