import { RowDataPacket } from "mysql2";
import { pool } from "../../informacionBd";

export const iniciarSesion = async (correo: string, contraseña: string) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?",
      [correo, contraseña]
    );

    if (rows.length === 0) {
      throw new Error("Credenciales incorrectas");
    }

    const usuario = rows[0];

    return {
      usuarioId: usuario.usuarioId,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      rol: usuario.rol
      //No se debe devolver la contraseña en la respuesta por seguridad.
    };
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return new Error("Error al iniciar sesión.");
  }
};
