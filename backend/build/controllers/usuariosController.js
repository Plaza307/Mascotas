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
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mascotoken';
class UsuarioController {
    index(req, res) {
        res.json({ 'message': 'Estas en Usuario' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const respuesta = yield database_1.default.query('insert into usuarios set ?', [req.body]);
            if (respuesta.insertId > 0) {
                res.json("Usuario insertado");
            }
            else {
                res.json("Fallo al insertar usuario");
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            console.log("usuario controlador", user);
            const idUser = req.params.id;
            console.log("id usuario controlador", idUser);
            const idUserValue = Number.parseInt(idUser);
            const respuesta = yield database_1.default.query('UPDATE usuarios SET ? WHERE id_usuario=?', [user, idUserValue]);
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
            console.log("id del usuario controlador", idUsuario);
            const respuesta = yield database_1.default.query('DELETE FROM usuarios WHERE id_usuario=?', idUsuario);
            if (respuesta.affectedRows > 0) {
                res.json("Usuario eliminado");
            }
            else {
                res.json("Fallo al eliminar usuario");
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = req.params.id;
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE id_usuario=?', [idUsuario]);
            res.json(usuario);
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // // const passwordHash = bcrypt.hashSync(req.body.password, 10);
            // console.log("password encriptada ",passwordHash)
            const usuario = yield database_1.default.query('SELECT password FROM usuarios WHERE email=?', [req.body.email]);
            const ValorLogin = req.body.password;
            const ValorBD = usuario[0].password;
            // const passwordCrypt = bcrypt.hashSync(ValorLogin, salt)
            const comparacion1 = bcrypt.compareSync(ValorLogin, ValorBD);
            if (comparacion1 == true) {
                const user = yield database_1.default.query('SELECT * FROM usuarios WHERE email=? ', [req.body.email]);
                const expiraEn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.email }, SECRET_KEY, { expiresIn: expiraEn });
                res.send([user[0], accessToken]);
            }
            else {
                res.send(false);
            }
        });
    }
    restartPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordEncrypt = bcrypt.hashSync(req.body.password, 10);
            const idUser = req.params.id;
            const idUserValue = Number.parseInt(idUser);
            console.log(passwordEncrypt);
            const respuesta = yield database_1.default.query('UPDATE usuarios set password = ? WHERE id_usuario=?', [passwordEncrypt, idUserValue]);
            if (respuesta.insertId > 0) {
                res.json("Contraseña cambiada");
            }
            else {
                res.json("Fallo al cambiar la contraseña");
            }
        });
    }
}
exports.usuariosController = new UsuarioController();
