import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-vista-hoteles',
  templateUrl: './vista-hoteles.component.html',
  styleUrls: ['./vista-hoteles.component.scss']
})
export class VistaHotelesComponent implements OnInit {

  public listaHoteles: any;
  constructor(private servicioHoteles: HotelesService) { }

  ngOnInit() {

    this.servicioHoteles.getHoteles().subscribe(
      res => {
        this.listaHoteles = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
