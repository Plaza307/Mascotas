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
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    index(req, res) {
        res.json({ 'message': 'Estas en Usuario' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('insert into usuarios set ?', [req.body]);
            if (respuesta.insertId > 0) {
                res.json("Usuario insertado");
            }
            else {
                res.json("Fallo al insertar usuario");
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = req.params.id;
            const respuesta = yield database_1.default.query('update usuarios set ? where id=?', [req.params, idUsuario]);
            if (respuesta.affectedRows > 0) {
                res.json("Usuario actualizado");
            }
            else {
                res.json("Fallo al actualizar usuario");
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = req.params.id;
            const respuesta = yield database_1.default.query('delete from usuarios where id_usuario=?', [idUsuario]);
            if (respuesta.affectedRows > 0) {
                res.json("Usuario eliminado");
            }
            else {
                res.json("Fallo al eliminar usuario");
            }
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = req.params.id;
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE id_usuario=?', [idUsuario]);
            res.json(usuario);
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE email=? AND password=?', [req.body.email, req.body.password]);
            if (usuario.length == 0) {
                res.send(false);
            }
            res.send(usuario[0]);
        });
    }
}
exports.usuariosController = new UsuarioController();
