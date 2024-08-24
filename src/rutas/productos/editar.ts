import { Request, Response, Router } from "express";
import { ActualizarProductoDTO } from "../../entidades";
import { editarProducto } from "../../servicios";

const router = Router();

export const editarProductoRuta = () => {
  router.put("/productos", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as ActualizarProductoDTO;
    try {
      const productoEditado = await editarProducto(data);
      res
        .status(200)
        .json({ message: "Producto editado", data: productoEditado });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
