import { Request, Response } from 'express';
import pool from '../database';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mascotoken';

class UsuarioController {
    index(
        req: Request,
        res: Response
    ) {
        res.json({ 'message': 'Estas en Usuario' });
    }

    public async create(req: Request, res: Response) {

        const passwordHash = bcrypt.hashSyncs(req.body.password, 10);
        const respuesta = await pool.query('insert into usuarios set ?', [passwordHash]);

        if (respuesta.insertId > 0) {
            res.json("Usuario insertado");
        } else {
            res.json("Fallo al insertar usuario");
        }
    }

    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);

        res.json(usuarios);
    }


    public async update(req: Request, res: Response) {
        const idUsuario = req.params.id;
        const respuesta = await pool.query('update usuarios set ? where id=?', [req.params, idUsuario]);

        if (respuesta.affectedRows > 0) {
            res.json("Usuario actualizado");
        } else {
            res.json("Fallo al actualizar usuario");
        }
    }

    public async delete(req: Request, res: Response) {
        const idUsuario = req.params.id;
        const respuesta = await pool.query('delete from usuarios where id_usuario=?', [idUsuario]);

        if (respuesta.affectedRows > 0) {
            res.json("Usuario eliminado");
        } else {
            res.json("Fallo al eliminar usuario");
        }
    }


    public async readOne(req: Request, res: Response) {
        const idUsuario = req.params.id;

        const usuario = await pool.query('SELECT * FROM usuarios WHERE id_usuario=?', [idUsuario]);

        res.json(usuario);
    }

    public async readLogin(req: Request, res: Response) {
        // // const passwordHash = bcrypt.hashSync(req.body.password, 10);
        // console.log("password encriptada ",passwordHash)
        const usuario = await pool.query('SELECT password FROM usuarios WHERE email=?', [req.body.email])

        
        const ValorLogin=req.body.password;

        const ValorBD = usuario[0].password

        // const passwordCrypt = bcrypt.hashSync(ValorLogin, salt)
        const comparacion1 = bcrypt.compareSync(ValorLogin, ValorBD)
        

        if(comparacion1==true){
            const user = await pool.query('SELECT * FROM usuarios WHERE email=? ', [req.body.email])

            const expiraEn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.email }, SECRET_KEY, { expiresIn: expiraEn });
        res.send([user[0], accessToken]);
        } else {
            res.send(false);
        }
}
}
export const usuariosController = new UsuarioController();