import { RowDataPacket } from "mysql2";
import { Producto } from "../../entidades";
import { pool } from "../../informacionBd";

export const ObtenerTodosLosProductos = async () => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM productos");

    const productos: Producto[] = rows.map((row: RowDataPacket) => ({
      productoId: row.productoId,
      nombre: row.nombre,
      precio_de_venta: row.precio_de_venta,
      stock_actual: row.stock_actual,
      stock_inicial: row.stock_inicial,
      categoria: row.categoria,
      usuario: row.usuario,
    }));

    return productos;
  } catch (error) {
    return new Error("Error al obtener todos los productos: " + error);
  }
};
