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

        
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        
        const respuesta = await pool.query('insert into usuarios set ?', [req.body]);

        if (respuesta.insertId > 0) {
            res.json("Usuario insertado");
        } else {
            res.json("Fallo al insertar usuario");
        }
    }

    public async getAll(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios');

        res.json(usuarios);
    }


    public async update(req: Request, res: Response) {

        const user = req.body;
        console.log("usuario controlador", user);
        
        const idUser: string = req.params.id;
        console.log("id usuario controlador", idUser);

        const idUserValue: number = Number.parseInt(idUser);

        const respuesta = await pool.query('UPDATE usuarios SET ? WHERE id_usuario=?', [user, idUserValue]);

        if (respuesta.affectedRows > 0) {
            res.json("Usuario actualizado");
        } else {
            res.json("Fallo al actualizar usuario");
        }
    }

    public async delete(req: Request, res: Response) {
        const idUsuario = req.params.id;
        console.log("id del usuario controlador", idUsuario);
        const respuesta = await pool.query('DELETE FROM usuarios WHERE id_usuario=?', idUsuario);
        

        if (respuesta.affectedRows > 0) {
            res.json("Usuario eliminado");
        } else {
            res.json("Fallo al eliminar usuario");
        }
    }

    


    public async getUser(req: Request, res: Response) {
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

    

    public async restartPassword(req: Request, res: Response){
        const passwordEncrypt = bcrypt.hashSync(req.body.password, 10);
        
            const idUser: string = req.params.id
            const idUserValue: number = Number.parseInt(idUser)
            console.log(passwordEncrypt);
            
            const respuesta = await pool.query('UPDATE usuarios set password = ? WHERE id_usuario=?', [passwordEncrypt, idUserValue]);
    
            if (respuesta.insertId > 0) {
                res.json("Contraseña cambiada");
            } else {
                res.json("Fallo al cambiar la contraseña");
            }
        
    
    }
}
export const usuariosController = new UsuarioController();