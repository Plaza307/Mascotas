export interface RegistroUsuario {
    id: number;
    nombre: string;
    apellidos: string;
    password: string;
    email: string
    telefono: number;
    f_nac: Date;
    tipo_usuario: string; /*El tipo de usuario guardado en bd se insertará en blanco, lo que es lo mismo que un usuario normal.
                            Solo habrá un tipo de usuario admin y se deberá configurar desde allí */

}
