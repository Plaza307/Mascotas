"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sitiosController = void 0;
const database_1 = __importDefault(require("../database"));
// const jwt = require('jsonwebtoken');
// const SECRET_KEY='Tomelloso'
class SitiosController {
    index(req, res) {
        res.json({ 'message': 'Estas en sitios' });
    }
    updateAlojamientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alojamiento = req.body;
            console.log("usuario controlador", alojamiento);
            const idSitio = req.params.id;
            console.log("id sitio controlador", idSitio);
            const idSitioValue = Number.parseInt(idSitio);
            const respuesta = yield database_1.default.query('UPDATE sitios SET ? WHERE id_sitio=?', [alojamiento, idSitioValue]);
            if (respuesta.affectedRows > 0) {
                res.json("Sitio actualizado");
            }
            else {
                res.json("Fallo al actualizar el sitio");
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idSitio = req.params.id;
            const respuesta = yield database_1.default.query('DELETE FROM sitios WHERE id_sitio=?', idSitio);
            if (respuesta.affectedRows > 0) {
                res.json("Sitio eliminado");
            }
            else {
                res.json("Fallo al eliminar sitio");
            }
        });
    }
    /************************************CRUD DE ALOJAMIENTOS************************************************************* */
    verAlojamientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=1 OR id_tipo=4 OR id_tipo=5');
            console.log(listado);
            res.send(listado);
        });
    }
    verApartamentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=4');
            console.log(listado);
            res.send(listado);
        });
    }
    verCampings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=5');
            console.log(listado);
            res.send(listado);
        });
    }
    verHoteles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=1');
            console.log(listado);
            res.send(listado);
        });
    }
    publicarAlojamientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('INSERT INTO sitios set ?', [req.body]);
            if (listado.affectedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    listarCiudades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT id_ciudad, provincia FROM ciudades');
            console.log(listado);
            res.send(listado);
        });
    }
    getTipoSitio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio = 5 OR id_tipositio = 1 OR id_tipositio = 4');
            console.log(listado);
            res.send(listado);
        });
    }
    /************************************CRUD DE COMERCIOS************************************************************* */
    verComercios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=6 OR id_tipo=7 OR id_tipo=8');
            console.log(listado);
            res.send(listado);
        });
    }
    verRestaurantes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=6');
            console.log(listado);
            res.send(listado);
        });
    }
    verTiendas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=7');
            console.log(listado);
            res.send(listado);
        });
    }
    verVeterinarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=8');
            console.log(listado);
            res.send(listado);
        });
    }
    publicarComercios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('INSERT INTO sitios set ?', [req.body]);
            if (listado.affectedRows > 0) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        });
    }
    getTipoComercio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio=6 OR id_tipositio=7 OR id_tipositio=8');
            console.log(listado);
            res.send(listado);
        });
    }
    getTipoAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listado = yield database_1.default.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio=6 OR id_tipositio=7 OR id_tipositio=8 OR id_tipositio=1 OR id_tipositio=4 OR id_tipositio=5 ');
            console.log(listado);
            res.send(listado);
        });
    }
    buscador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const listado = yield database_1.default.query('SELECT * FROM sitios WHERE id_tipo=? AND id_ciudad=?', [req.body.id_tipo, req.body.id_ciudad]);
            console.log("controlador", listado);
            res.send(listado);
        });
    }
    getBuscador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("esto", req.body);
            console.log("aqui", req.body[0]);
            const listado = yield database_1.default.query('SELECT nombre, descripcion, precio, telefono, web FROM sitios WHERE id_tipo=? AND id_ciudad=?', [req.body[0], req.body[1]]);
            console.log(listado);
            res.send(listado);
        });
    }
}
exports.sitiosController = new SitiosController();
