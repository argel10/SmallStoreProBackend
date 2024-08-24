import { Request, Response, Router } from "express";
import { eliminarProducto } from "../../servicios";

const router = Router();

export const eliminarProductoRuta = () => {
  router.delete(
    "/productos/:productoId",
    async (req: Request, res: Response) => {
      const { params } = req;
      const { productoId } = params as { productoId: string };
      try {
        const productoEliminado = await eliminarProducto(Number(productoId));
        res
          .status(200)
          .json({ message: "Producto eliminado", data: productoEliminado });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      }
    }
  );
  return router;
};
