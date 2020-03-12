import { Router } from 'express';
import { indexController } from '../controllers/indexController';
import { sitiosController } from '../controllers/sitiosController';
class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        
        this.router.get('/alojamientos', sitiosController.verAlojamientos);
        this.router.get('/apartamentos', sitiosController.verApartamentos);
        this.router.get('/campings', sitiosController.verCampings);
        this.router.get('/hoteles', sitiosController.verHoteles);
        this.router.post('/publicar/alojamiento', sitiosController.publicarAlojamientos);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;