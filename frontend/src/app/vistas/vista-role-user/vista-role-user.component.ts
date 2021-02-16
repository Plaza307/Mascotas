import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../modelos/usuario';

declare var $: any;
@Component({
  selector: 'app-vista-role-user',
  templateUrl: './vista-role-user.component.html',
  styleUrls: ['./vista-role-user.component.scss']
})
export class VistaRoleUserComponent implements OnInit {

  private formularioUpdate: FormGroup;
  listaCampos:any;

  

  constructor(private router: Router, private formBuilder: FormBuilder, private servicioUsuarios: UsuariosService) {
    this.formularioUpdate = formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      f_nac: ['']

    });
   }

  ngOnInit() {
    this.obtenerUsuario();
  }

  submit(id_usuario:any) {
    this.servicioUsuarios.updateUser(this.formularioUpdate.value, id_usuario).subscribe(
      res => {
        if (res) {
          alert('Usuario actualizado correctamente');
          this.router.navigate(['/vistaRoleUser']);
          this.ngOnInit();
        } else {
          alert('No se ha podido actualizar el usuario');
          this.router.navigate(['/vistaRoleUser']);
        }
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  obtenerUsuario(){
    this.servicioUsuarios.getUserSesion().subscribe(
      res => {
        this.listaCampos = res;
        console.log(res);
        console.log("nombre del usuario", res[0].nombre);

      },
      err => {
        console.log(err);
      }
    );
  }

  ngBorrarUsuario(id_usuario:any){
    if(confirm('¿Estás seguro de eliminar el usuario?')){
    this.servicioUsuarios.deleteUser(id_usuario).subscribe(
      res => {
        alert('Usuario borrado correctamente')
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
      }
    );
  }}

  ngOcultarFormulario(id_usuario:any){
    console.log(id_usuario);
    
    $("#"+id_usuario).removeClass("formularioOculto");
    $("#vista"+id_usuario).removeClass("formularioMostrar");
  }

  ngMostrarFormulario(id_usuario:any){
    $("#"+id_usuario).addClass("formularioMostrar");
    $("#vista"+id_usuario).addClass("formularioOculto");
  }
}
