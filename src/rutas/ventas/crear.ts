import { Request, Response, Router } from "express";
import { CrearVentaDTO } from "../../entidades";
import { crearVenta } from "../../servicios";

const router = Router();

export const crearVentaRuta = () => {
  router.post("/ventas", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as CrearVentaDTO;
    try {
      const ventaCreada = await crearVenta(data);
      res.status(200).json({ message: "Usuario creado", data: ventaCreada });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
