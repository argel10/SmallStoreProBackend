import { RowDataPacket } from "mysql2";
import { pool } from "../../informacionBd";

export const eliminarVenta = async (ventaId: number) => {
  try {
    const [ventaExiste] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM ventas WHERE ventaId = ?",
      [ventaId]
    );

    if (!ventaExiste.length) {
      throw new Error("Venta no encontrada");
    }

    const [deleteResult]: any = await pool.query(
      "DELETE FROM ventas WHERE ventaId = ?",
      [ventaId]
    );

    if (deleteResult.affectedRows !== 1) {
      throw new Error("Error al eliminar la venta");
    }

    return true;
  } catch (error) {
    console.error("Error al eliminar :", error.message);
    return new Error("Error al eliminar.");
  }
};
