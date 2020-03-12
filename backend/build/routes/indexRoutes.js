"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
const sitiosController_1 = require("../controllers/sitiosController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        this.router.get('/alojamientos', sitiosController_1.sitiosController.verAlojamientos);
        this.router.get('/apartamentos', sitiosController_1.sitiosController.verApartamentos);
        this.router.get('/campings', sitiosController_1.sitiosController.verCampings);
        this.router.get('/hoteles', sitiosController_1.sitiosController.verHoteles);
        this.router.post('/publicar/alojamiento', sitiosController_1.sitiosController.publicarAlojamientos);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
