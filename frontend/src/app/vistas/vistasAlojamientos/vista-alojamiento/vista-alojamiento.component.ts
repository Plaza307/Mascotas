import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-vista-alojamiento',
  templateUrl: './vista-alojamiento.component.html',
  styleUrls: ['./vista-alojamiento.component.scss']
})
export class VistaAlojamientoComponent implements OnInit {

  public listaAlojamientos: any;
  constructor(private servicioHoteles: HotelesService) { }

  ngOnInit() {

    this.servicioHoteles.getAlojamientos().subscribe(
      res => {
        this.listaAlojamientos = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
