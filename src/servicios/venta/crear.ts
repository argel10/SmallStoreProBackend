import { ResultSetHeader } from "mysql2";
import { pool } from "../../informacionBd";
import { CrearVentaDTO } from "../../entidades";

export const crearVenta = async (data: CrearVentaDTO) => {
  try {
    const { usuario, fecha_venta, producto, cantidad, precio, total_venta } =
      data;
    const [rows] = await pool.query<ResultSetHeader>(
      "INSERT INTO ventas ( usuario, fecha_venta, producto, cantidad, precio, total_venta) VALUES (?,?,?,?,?,?)",
      [usuario, fecha_venta, producto, cantidad, precio, total_venta]
    );
    return {
      ventaId: rows.insertId,
      usuario,
      fecha_venta,
      producto,
      cantidad,
      precio,
      total_venta,
    };
  } catch (error) {
    console.error("Error al crear el Venta:", error.message);
    return new Error("Error al crear el Venta.");
  }
};
