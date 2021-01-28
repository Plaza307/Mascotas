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

        
        this.router.get('/comercios', sitiosController.verComercios);
        this.router.get('/restaurantes', sitiosController.verRestaurantes);
        this.router.get('/tiendas', sitiosController.verTiendas);
        this.router.get('/veterinarios', sitiosController.verVeterinarios);
        this.router.post('/publicar/comercio', sitiosController.publicarComercios);
        this.router.get('/getTipoComercio', sitiosController.getTipoComercio);
        this.router.get('/getTipoAll', sitiosController.getTipoAll);
        this.router.post('/resultBusqueda', sitiosController.buscador);
        this.router.post('/busqueda', sitiosController.getBuscador);

    }
}

const sitiosRoutes = new SitiosRoutes();

export default sitiosRoutes.router;