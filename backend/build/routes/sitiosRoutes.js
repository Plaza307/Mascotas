"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sitiosController_1 = require("../controllers/sitiosController");
class SitiosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sitiosController_1.sitiosController.index);
        this.router.get('/alojamientos', sitiosController_1.sitiosController.verAlojamientos);
        this.router.get('/apartamentos', sitiosController_1.sitiosController.verApartamentos);
        this.router.get('/campings', sitiosController_1.sitiosController.verCampings);
        this.router.get('/hoteles', sitiosController_1.sitiosController.verHoteles);
        this.router.post('/publicar/alojamiento', sitiosController_1.sitiosController.publicarAlojamientos);
        this.router.get('/listarCiudades', sitiosController_1.sitiosController.listarCiudades);
        this.router.get('/getTipoSitio', sitiosController_1.sitiosController.getTipoSitio);
    }
}
const sitiosRoutes = new SitiosRoutes();
exports.default = sitiosRoutes.router;
