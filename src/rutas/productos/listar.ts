import { Request, Response, Router } from "express";
import { ObtenerTodosLosProductos } from "../../servicios";

const router = Router();

export const ObtenerProductosRuta = () => {
  router.get("/productos", async (req: Request, res: Response) => {
    try {
      const listaDeProductos = await ObtenerTodosLosProductos();
      res
        .status(200)
        .json({ message: "Productos obtenidos", data: listaDeProductos });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
