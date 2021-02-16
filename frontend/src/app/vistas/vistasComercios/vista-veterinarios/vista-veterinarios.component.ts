import { Component, OnInit } from '@angular/core';
import { ComerciosService } from '../../../services/comercios.service.service';

@Component({
  selector: 'app-vista-veterinarios',
  templateUrl: './vista-veterinarios.component.html',
  styleUrls: ['./vista-veterinarios.component.scss']
})
export class VistaVeterinariosComponent implements OnInit {

  public listaVeterinarios: any;
  constructor(private servicioComercio: ComerciosService) { }

  ngOnInit() {

    this.servicioComercio.getVeterinarios().subscribe(
      res => {
        this.listaVeterinarios = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
