import { Router } from "express";
import { crearProductoRuta } from "./crear";
import { ObtenerProductosRuta } from "./listar";
import { editarProductoRuta } from "./editar";
import { eliminarProductoRuta } from "./eliminar";

// Llama a la función para obtener el Router y luego lo agrega al array
const rutasProductos: Router[] = [
  crearProductoRuta(),
  ObtenerProductosRuta(),
  editarProductoRuta(),
  eliminarProductoRuta(),
];

export default rutasProductos;
