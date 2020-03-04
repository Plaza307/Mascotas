import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompruebaTokenService {

  constructor(private compruebaTokenService: UsuariosService) { }
    intercerpt( req: any, next: any) {
      const token = req.clone({
        setHeaders: {
          Authorization: 'miaplicacion' + this.compruebaTokenService.getToken()
        }
      });
      return next.handle(token);
    }
}
