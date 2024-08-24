import { Request, Response, Router } from "express";
import { ActualizarVentaDTO } from "../../entidades";
import { editarVenta } from "../../servicios";

const router = Router();

export const editarVentasRuta = () => {
  router.put("/ventas", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as ActualizarVentaDTO;
    try {
      const ventaEditada = await editarVenta(data);
      res.status(200).json({ message: "Venta editada", data: ventaEditada });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
