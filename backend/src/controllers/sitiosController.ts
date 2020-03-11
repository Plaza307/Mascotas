import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const SECRET_KEY='Tomelloso'

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
        
}

export const sitiosController = new SitiosController();












