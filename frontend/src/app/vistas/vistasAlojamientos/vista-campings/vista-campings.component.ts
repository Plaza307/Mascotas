import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-vista-campings',
  templateUrl: './vista-campings.component.html',
  styleUrls: ['./vista-campings.component.scss']
})
export class VistaCampingsComponent implements OnInit {

  public listaCampings: any;

  constructor(private servicioHoteles: HotelesService) { }

  ngOnInit() {
    this.mostrarCampings();
  }

  mostrarCampings() {
    this.servicioHoteles.getCampings().subscribe(
      res => {
        this.listaCampings = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
