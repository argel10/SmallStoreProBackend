import { Router } from "express";
import rutasUsuario from "./usuarios";
import rutasProductos from "./productos";
import rutasVentas from "./ventas";

const registerRoutes = (router: Router) => {
  router.use(rutasUsuario);
  router.use(rutasProductos);
  router.use(rutasVentas);
};

export default registerRoutes;
