import { Request, Response, Router } from "express";
import { iniciarSesion } from "../../servicios";

const router = Router();

export const iniciarSesionRuta = () => {
  router.post("/iniciar-sesion", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as { correo: string; contraseña: string };
    try {
      const usuarioLogueado = await iniciarSesion(data.correo, data.contraseña);
      res
        .status(200)
        .json({ message: "Usuario encontrado", data: usuarioLogueado });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
