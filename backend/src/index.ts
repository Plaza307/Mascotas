import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';
import sitiosRoutes from './routes/sitiosRoutes';


class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/usuarios', usuariosRoutes)
        this.app.use('/sitios', sitiosRoutes)
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Funciona por el puerto: " + this.app.get('port'));
        });
    }
}

const server = new Server();

server.start();