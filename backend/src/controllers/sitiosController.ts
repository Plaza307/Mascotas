import { Request, Response } from 'express';
import pool from '../database';
// const jwt = require('jsonwebtoken');
// const SECRET_KEY='Tomelloso'

class SitiosController {
    index(
        req: Request,
        res: Response
    ) {
        res.json({ 'message': 'Estas en Usuario' });
    }

    public async verAlojamientos(req: Request, res: Response) {
        const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=1 OR id_tipo=4 OR id_tipo=5');
        
        console.log(listado);
        res.send(listado);
    }
    public async verApartamentos(req: Request, res: Response) {
        const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=4');
        
        console.log(listado);
        res.send(listado);
    }

    public async verCampings(req: Request, res: Response) {
        const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=5');
        
        console.log(listado);
        res.send(listado);
    }
    public async verHoteles(req: Request, res: Response) {
        const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=1');
        
        console.log(listado);
        res.send(listado);
    }

    public async publicarAlojamientos(req: Request, res: Response) {
        const listado = await pool.query('INSERT INTO sitios set ?', [req.body]);
        
        if (listado.affectedRows > 0) {
            res.send(true);
        } else {
            res.send(false);
        }
    }
    public async listarCiudades(req: Request, res: Response) {
        const listado = await pool.query('SELECT id_ciudad, provincia FROM ciudades');
        
        console.log(listado);
        res.send(listado);
    }

    public async getTipoSitio(req: Request, res: Response) {
        const listado = await pool.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio = 5 OR id_tipositio = 1 OR id_tipositio = 4');
        
        console.log(listado);
        res.send(listado);
    }


        
}

export const sitiosController = new SitiosController();












