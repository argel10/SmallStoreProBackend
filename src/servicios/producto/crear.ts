import { ResultSetHeader } from "mysql2";
import { pool } from "../../informacionBd";
import { CrearProductoDTO } from "../../entidades";

export const crearProducto = async (data: CrearProductoDTO) => {
  try {
    const {
      nombre,
      precio_de_venta,
      stock_actual,
      stock_inicial,
      categoria,
      usuario,
    } = data;
    const [rows] = await pool.query<ResultSetHeader>(
      "INSERT INTO productos (nombre, precio_de_venta, stock_actual, stock_inicial, categoria, usuario) VALUES (?,?,?,?,?,?)",
      [nombre, precio_de_venta, stock_actual, stock_inicial, categoria, usuario]
    );
    return {
      productoId: rows.insertId,
      nombre,
      precio_de_venta,
      stock_actual,
      stock_inicial,
      categoria,
      usuario,
    };
  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    return new Error("Error al crear el producto.");
  }
};
