import { RowDataPacket } from "mysql2";
import { pool } from "../../informacionBd";

export const eliminarProducto = async (productoId: number) => {
  try {
    const [productoExiste] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM productos WHERE productoId = ?",
      [productoId]
    );

    if (!productoExiste.length) {
      throw new Error("Producto no encontrado");
    }

    const [deleteResult]: any = await pool.query(
      "DELETE FROM productos WHERE productoId = ?",
      [productoId]
    );

    if (deleteResult.affectedRows !== 1) {
      throw new Error("Error al eliminar el producto");
    }

    return true;
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    return new Error("Error al eliminar el producto.");
  }
};
