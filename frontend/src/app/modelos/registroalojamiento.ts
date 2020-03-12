export interface Registroalojamiento {
    id: number;
    nombre: string;
    descripcion: string;
    foto?: string;
    precio: number;
    capacidad: number;
    valoracion: number;
    telefono: number;
    web: String;
    //meter id_ciudad y id_tipo, el id_usuario lo coge del que este iniciada sesion
}