import { Request, Response, Router } from "express";
import { eliminarVenta } from "../../servicios";

const router = Router();

export const eliminarVentaRuta = () => {
  router.delete("/ventas", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as { ventaId: number };
    try {
      const ventaEliminada = await eliminarVenta(data.ventaId);
      res.status(200).json({ message: "Venta elimada", data: ventaEliminada });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
