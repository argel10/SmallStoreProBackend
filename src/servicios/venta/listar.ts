import { RowDataPacket } from "mysql2";
import { Venta } from "../../entidades";
import { pool } from "../../informacionBd";

export const ObtenerTodasLasVentas = async () => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM ventas");

    const ventas: Venta[] = rows.map((row: RowDataPacket) => ({
      ventaId: row.ventaId,
      usuario: row.usuario,
      fecha_venta: row.fecha_venta,
      producto: row.producto,
      cantidad: row.cantidad,
      precio: row.precio,
      total_venta: row.total_venta,
    }));

    return ventas;
  } catch (error) {
    return new Error("Error al obtener: " + error);
  }
};
