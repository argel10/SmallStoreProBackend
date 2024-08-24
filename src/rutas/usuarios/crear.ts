import { Request, Response, Router } from "express";
import { CrearUsuarioDTO } from "../../entidades";
import { crearUsuario } from "../../servicios";

const router = Router();

export const crearUsuarioRuta = () => {
  router.post("/registrarse", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as CrearUsuarioDTO;
    try {
      const usuarioCreado = await crearUsuario(data);
      res.status(200).json({ message: "Usuario creado", data: usuarioCreado });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
