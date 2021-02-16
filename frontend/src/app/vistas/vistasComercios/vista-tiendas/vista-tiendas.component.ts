import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../../services/comercios.service.service';

@Component({
  selector: 'app-vista-tiendas',
  templateUrl: './vista-tiendas.component.html',
  styleUrls: ['./vista-tiendas.component.scss']
})
export class VistaTiendasComponent implements OnInit {

  public listaTiendas: any;
  constructor(private servicioComercio: ComerciosService) { }

  ngOnInit() {

    this.servicioComercio.getTiendas().subscribe(
      res => {
        this.listaTiendas = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
