import { Request, Response } from 'express';
import pool from '../database';
// const jwt = require('jsonwebtoken');
// const SECRET_KEY='Tomelloso'

class SitiosController {
    index(
        req: Request,
        res: Response
    ) {
        res.json({ 'message': 'Estas en sitios' });
    }

    public async updateAlojamientos(req: Request, res: Response) {
        const idSitio = req.params.id_sitio
        const listado = await pool.query('UPDATE sitios SET ? where id_sitio=?', [req.params, idSitio]);
        
        console.log(listado);
        res.send(listado);
    }
/************************************CRUD DE ALOJAMIENTOS************************************************************* */
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

/************************************CRUD DE COMERCIOS************************************************************* */
        

public async verComercios(req: Request, res: Response) {
    const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=6 OR id_tipo=7 OR id_tipo=8');
    
    console.log(listado);
    res.send(listado);
}
public async verRestaurantes(req: Request, res: Response) {
    const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=6');
    
    console.log(listado);
    res.send(listado);
}

public async verTiendas(req: Request, res: Response) {
    const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=7');
    
    console.log(listado);
    res.send(listado);
}
public async verVeterinarios(req: Request, res: Response) {
    const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=8');
    
    console.log(listado);
    res.send(listado);
}

public async publicarComercios(req: Request, res: Response) {
    const listado = await pool.query('INSERT INTO sitios set ?', [req.body]);
    
    if (listado.affectedRows > 0) {
        res.send(true);
    } else {
        res.send(false);
    }
}

public async getTipoComercio(req: Request, res: Response) {
    const listado = await pool.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio=6 OR id_tipositio=7 OR id_tipositio=8');
    
    console.log(listado);
    res.send(listado);
}
public async getTipoAll(req: Request, res: Response) {
    const listado = await pool.query('SELECT id_tipositio, nombre FROM tipositios WHERE id_tipositio=6 OR id_tipositio=7 OR id_tipositio=8 OR id_tipositio=1 OR id_tipositio=4 OR id_tipositio=5 ');
    
    console.log(listado);
    res.send(listado);
}

public async buscador(req: Request, res: Response) {
    console.log(req.body);
    const listado = await pool.query('SELECT * FROM sitios WHERE id_tipo=? AND id_ciudad=?', [req.body.id_tipo, req.body.id_ciudad]);
    
    console.log("controlador",listado);
    res.send(listado);
}

public async getBuscador(req: Request, res: Response) {
    console.log("esto",req.body);
    console.log(req.body.id_tipo);
    console.log("aqui", req.body[0]);
    const listado = await pool.query('SELECT nombre, descripcion, precio, telefono, web FROM sitios WHERE id_tipo=? AND id_ciudad=?', [req.body[0], req.body[1]]);
    
    console.log(listado);
    res.send(listado);
}











}

export const sitiosController = new SitiosController();












