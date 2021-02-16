import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ComerciosService } from '../../services/comercios.service.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private servicioUser: UsuariosService, private servicioComercio: ComerciosService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.ngMostrarBoton();
    } else {
      this.ngOcultarBoton();
    }
  }

  ngMostrarBoton(){
    
    $("#btn-logOut").removeClass("oculto");
  }

  ngOcultarBoton(){
    $("#btn-logOut").addClass("oculto");
  }

  ngClickRedirecciona(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/vistaAdmin']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
