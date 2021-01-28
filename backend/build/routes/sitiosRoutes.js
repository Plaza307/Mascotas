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
        this.router.get('/comercios', sitiosController_1.sitiosController.verComercios);
        this.router.get('/restaurantes', sitiosController_1.sitiosController.verRestaurantes);
        this.router.get('/tiendas', sitiosController_1.sitiosController.verTiendas);
        this.router.get('/veterinarios', sitiosController_1.sitiosController.verVeterinarios);
        this.router.post('/publicar/comercio', sitiosController_1.sitiosController.publicarComercios);
        this.router.get('/getTipoComercio', sitiosController_1.sitiosController.getTipoComercio);
        this.router.get('/getTipoAll', sitiosController_1.sitiosController.getTipoAll);
        this.router.post('/resultBusqueda', sitiosController_1.sitiosController.buscador);
        this.router.post('/busqueda', sitiosController_1.sitiosController.getBuscador);
    }
}
const sitiosRoutes = new SitiosRoutes();
exports.default = sitiosRoutes.router;
