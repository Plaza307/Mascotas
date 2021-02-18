import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';

class UsuariosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/registrar', usuariosController.create);
        this.router.get('/getAll', usuariosController.getAll);
        this.router.put('/:id', usuariosController.update);
        this.router.put('/restartPass/:id', usuariosController.restartPassword);
        this.router.delete('/:id', usuariosController.delete);
        this.router.get('/:id', usuariosController.getUser);
        this.router.post('/login', usuariosController.readLogin);
    }

}

const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router;