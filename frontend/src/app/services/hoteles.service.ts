import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
