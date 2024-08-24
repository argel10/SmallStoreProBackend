import { Request, Response, Router } from "express";
import { ObtenerTodasLasVentas } from "../../servicios";

const router = Router();

export const ObtenerVentasRuta = () => {
  router.get("/ventas", async (req: Request, res: Response) => {
    try {
      const listaDeVentas = await ObtenerTodasLasVentas();
      res
        .status(200)
        .json({ message: "Ventas obtenidas", data: listaDeVentas });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
