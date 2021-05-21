import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.scss']
})
export class VistaUsuarioComponent implements OnInit {

  private formularioUpdate: FormGroup;
  private formularioPassword: FormGroup;
  private listaUsuarios: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioUsuarios: UsuariosService) { 
    this.formularioUpdate = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      f_nac: ['']

    });

    this.formularioPassword = formBuilder.group({
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    if (localStorage.getItem('ROLE') == 'ROLE_ADMIN'){
      console.log("usuario administrador");

      this.obtenerTodos();

    } else {
      console.log("usuario normal");
      this.router.navigate(['/vistaRoleUser'])
    }
  }

  submit(id_usuario:any) {
    this.servicioUsuarios.updateUser(this.formularioUpdate.value, id_usuario).subscribe(
      res => {
        if (res) {
          alert('Usuario actualizado correctamente');
          this.router.navigate(['/vistaAdmin']);
          this.ngOnInit();
        } else {
          alert('No se ha podido actualizar el usuario');
          this.router.navigate(['/vistaAdmin']);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngBorrarUsuario(id_usuario:any){
    if(confirm('¿Estás seguro de borrar el usuario?')){
    this.servicioUsuarios.deleteUser(id_usuario).subscribe(
      res => {
        alert('Usuario borrado correctamente')
        console.log(res);
        this.router.navigate(['/vistaAdmin']);
      },
      err => {
        console.log(err);
      }
    );
  }}

  ngRestartPassword(id_usuario:any){
    this.servicioUsuarios.updatePassword(this.formularioPassword.value, id_usuario).subscribe(
      res => {
        console.log("respuesta del component", res);
        if (res) {
          alert('Contraseña actualizada correctamente');
          this.router.navigate(['/vistaAdmin']);
          this.ngOnInit();
        } else {
          alert('No se ha podido actualizar la contraseña');
          this.router.navigate(['/vistaAdmin']);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
      }

  ngOcultarFormulario(id_usuario:any){
    console.log(id_usuario);
    
    $("#"+id_usuario).removeClass("formularioOculto");
    $("#vista"+id_usuario).removeClass("formularioMostrar");
    $("#password"+id_usuario).removeClass("formularioMostrar");
  }

  ngMostrarFormulario(id_usuario:any){
    $("#"+id_usuario).addClass("formularioMostrar");
    $("#vista"+id_usuario).addClass("formularioOculto");
    $("#password"+id_usuario).addClass("formularioOculto");
  }

  ngOcultarFormulario1(id_usuario:any){
    $("#vista"+id_usuario).removeClass("formularioMostrar");
    $("#password"+id_usuario).removeClass("formularioOculto");
  }

  ngMostrarFormulario1(id_usuario:any){
    
    $("#vista"+id_usuario).addClass("formularioOculto");
    $("#password"+id_usuario).addClass("formularioMostrar");
  }
  
  
obtenerTodos(){
  this.servicioUsuarios.getAll().subscribe(
    res => {
      this.listaUsuarios = res;
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );
}


get nombre() {
  return this.formularioUpdate.get('nombre');
}

get apellidos() {
  return this.formularioUpdate.get('apellidos');
}

get email() {
  return this.formularioUpdate.get('email');
}

get telefono() {
  return this.formularioUpdate.get('telefono');
}
get f_nac() {
  return this.formularioUpdate.get('f_nac');
}


}
