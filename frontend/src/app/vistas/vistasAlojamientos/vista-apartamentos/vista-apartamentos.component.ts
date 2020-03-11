import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-vista-apartamentos',
  templateUrl: './vista-apartamentos.component.html',
  styleUrls: ['./vista-apartamentos.component.scss']
})
export class VistaApartamentosComponent implements OnInit {

  public listaApartamentos: any;

  constructor(private servicioHoteles: HotelesService) { }

  ngOnInit() {
    this.mostrarApartamentos();
  }

  mostrarApartamentos() {
    this.servicioHoteles.getApartamentos().subscribe(
      res => {
        this.listaApartamentos = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
