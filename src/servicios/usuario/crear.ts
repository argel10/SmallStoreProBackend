import { ResultSetHeader } from "mysql2";
import { pool } from "../../informacionBd";
import { CrearUsuarioDTO, Usuario } from "../../entidades";

export const crearUsuario = async (
  data: CrearUsuarioDTO
): Promise<Usuario | Error> => {
  try {
    const { nombre, apellido, correo, contraseña, rol } = data;
    const [rows] = await pool.query<ResultSetHeader>(
      "INSERT INTO usuarios (nombre, apellido, correo, contraseña, rol) VALUES (?,?,?,?,?)",
      [nombre, apellido, correo, contraseña]
    );
    return { usuarioId: rows.insertId, nombre, apellido, correo, contraseña, rol };
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    return new Error("Error al crear el usuario.");
  }
};
