import { Router } from "express";
import { crearVentaRuta } from "./crear";
import { ObtenerVentasRuta } from "./listar";
import { editarVentasRuta } from "./editar";
import { eliminarVentaRuta } from "./eliminar";

// Llama a la función para obtener el Router y luego lo agrega al array
const rutasVentas: Router[] = [
  crearVentaRuta(),
  ObtenerVentasRuta(),
  editarVentasRuta(),
  eliminarVentaRuta(),
];

export default rutasVentas;
