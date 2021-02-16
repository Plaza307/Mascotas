import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

}
