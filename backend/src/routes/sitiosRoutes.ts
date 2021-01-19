import { Router } from 'express';
import { sitiosController } from '../controllers/sitiosController';
class SitiosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', sitiosController.index);
        
        this.router.get('/alojamientos', sitiosController.verAlojamientos);
        this.router.get('/apartamentos', sitiosController.verApartamentos);
        this.router.get('/campings', sitiosController.verCampings);
        this.router.get('/hoteles', sitiosController.verHoteles);
        this.router.post('/publicar/alojamiento', sitiosController.publicarAlojamientos);
        this.router.get('/listarCiudades', sitiosController.listarCiudades);
        this.router.get('/getTipoSitio', sitiosController.getTipoSitio);
    }
}

const sitiosRoutes = new SitiosRoutes();

export default sitiosRoutes.router;