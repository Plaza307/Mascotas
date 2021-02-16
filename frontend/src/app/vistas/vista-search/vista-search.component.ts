import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../services/comercios.service.service';

@Component({
  selector: 'app-vista-search',
  templateUrl: './vista-search.component.html',
  styleUrls: ['./vista-search.component.scss']
})
export class VistaSearchComponent implements OnInit {
  listaSitios: any

  constructor(private servicioHoteles: ComerciosService) { }

  ngOnInit() {
    this.mostrarBuqueda();
  }
  mostrarBuqueda() {
    this.servicioHoteles.getBuscador().subscribe(
      res => {
        this.listaSitios = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
