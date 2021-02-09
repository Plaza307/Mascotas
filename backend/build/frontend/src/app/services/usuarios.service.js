"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const core_1 = require("@angular/core");
let UsuariosService = class UsuariosService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    crearUsuario(usuarioM) {
        return this.http.post('http://localhost:3000/usuarios/registrar', usuarioM);
    }
    getLogin(usuarioM) {
        return this.http.post('http://localhost:3000/usuarios/login', usuarioM);
    }
    getAll() {
        return this.http.get('http://localhost:3000/usuarios/getAll');
    }
    deleteUser(id_usuario) {
        return this.http.delete('http://localhost:3000/usuarios/' + id_usuario);
    }
    updateUser(usuario, id_usuario) {
        console.log("id del usuaruo servicio", id_usuario);
        console.log(" usuaruo servicio", usuario);
        return this.http.put('http://localhost:3000/usuarios/' + id_usuario, usuario);
    }
    logIn() {
        return !!localStorage.getItem('id');
    }
    logOut() {
        if (localStorage.length > 0) {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            alert('El usuario ha cerrado sesión');
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    getToken() {
        return localStorage.getItem('token');
    }
};
UsuariosService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], UsuariosService);
exports.UsuariosService = UsuariosService;
