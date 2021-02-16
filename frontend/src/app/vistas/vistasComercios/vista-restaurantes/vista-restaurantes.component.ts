import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../../services/comercios.service.service';

@Component({
  selector: 'app-vista-restaurantes',
  templateUrl: './vista-restaurantes.component.html',
  styleUrls: ['./vista-restaurantes.component.scss']
})
export class VistaRestaurantesComponent implements OnInit {

  public listaRestaurantes: any;
  constructor(private servicioComercio: ComerciosService) { }

  ngOnInit() {

    this.servicioComercio.getRestaurantes().subscribe(
      res => {
        this.listaRestaurantes = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
