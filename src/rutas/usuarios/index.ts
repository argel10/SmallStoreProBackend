import { Router } from "express";
import { crearUsuarioRuta } from "./crear"; // Importa la función
import { iniciarSesionRuta } from "./iniciar-sesion";

// Llama a la función para obtener el Router y luego lo agrega al array
const rutasUsuario: Router[] = [crearUsuarioRuta(), iniciarSesionRuta()];

export default rutasUsuario;
