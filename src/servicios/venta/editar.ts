import { RowDataPacket } from "mysql2";
import { pool } from "../../informacionBd";
import { ActualizarVentaDTO } from "../../entidades";

export const editarVenta = async (data: ActualizarVentaDTO) => {
  try {
    const {
      ventaId,
      usuario,
      fecha_venta,
      producto,
      cantidad,
      precio,
      total_venta,
    } = data;

    const [ventaExiste] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM ventas WHERE ventaId = ?",
      [ventaId]
    );

    if (!ventaExiste.length) {
      throw new Error("venta no encontrado");
    }

    const [updateResult]: any = await pool.query(
      "UPDATE ventas SET usuario = ?, fecha_venta = ?, producto = ?, cantidad = ?, precio = ?, total_venta = ? WHERE ventaId = ?",
      [usuario, fecha_venta, producto, cantidad, precio, total_venta, ventaId]
    );

    if (updateResult.affectedRows !== 1) {
      throw new Error("Error al actualizar el producto");
    }

    return {
      ventaId,
      usuario,
      fecha_venta,
      producto,
      cantidad,
      precio,
      total_venta,
    };
  } catch (error) {
    console.error("Error al actualizar la venta:", error.message);
    return new Error("Error al actualizar la venta.");
  }
};
