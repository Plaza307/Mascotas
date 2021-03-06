"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/registrar', usuariosController_1.usuariosController.create);
        this.router.get('/getAll', usuariosController_1.usuariosController.getAll);
        this.router.put('/:id', usuariosController_1.usuariosController.update);
        this.router.put('/restartPass/:id', usuariosController_1.usuariosController.restartPassword);
        this.router.delete('/:id', usuariosController_1.usuariosController.delete);
        this.router.get('/:id', usuariosController_1.usuariosController.getUser);
        this.router.post('/login', usuariosController_1.usuariosController.readLogin);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
