export interface RegistroSitios {
    id: number;
    nombre: string;
    descripcion: string;
    foto?: string;
    precio: number;
    capacidad: number;
    valoracion: number;
    telefono: number;
    web: String;
    ciudad: String[];
    id_ciudad: number;
    id_tipo: number;
    id_usuario: number;

}