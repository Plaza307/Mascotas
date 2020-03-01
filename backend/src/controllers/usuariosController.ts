import { Request, Response } from 'express';
import pool from '../database';

class UsuarioController {
    index(
        req: Request,
        res: Response
    ) {
        res.json({ 'message': 'Estas en Usuario' });
    }

    public async create(req: Request, res: Response) {
        const respuesta = await pool.query('insert into usuarios set ?', [req.body]);

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
        const usuario = await pool.query('SELECT * FROM usuarios WHERE email=? AND password=?', [req.body.email, req.body.password]);
        if(usuario.length == 0){
            res.send(false);
        }

        res.send(usuario[0]);


    }
}

export const usuariosController = new UsuarioController();