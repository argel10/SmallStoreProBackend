import { Request, Response, Router } from "express";
import { CrearProductoDTO } from "../../entidades";
import { crearProducto } from "../../servicios";

const router = Router();

export const crearProductoRuta = () => {
  router.post("/productos", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as CrearProductoDTO;
    try {
      const productoCreado = await crearProducto(data);
      res.status(200).json({ message: "Usuario creado", data: productoCreado });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
