import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../services/comercios.service.service';

@Component({
  selector: 'app-vista-comercios',
  templateUrl: './vista-comercios.component.html',
  styleUrls: ['./vista-comercios.component.scss']
})
export class VistaComerciosComponent implements OnInit {

  public listaComercios: any;
  constructor(private servicioHoteles: ComerciosService) { }

  ngOnInit() {

    this.servicioHoteles.getComercios().subscribe(
      res => {
        this.listaComercios = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
