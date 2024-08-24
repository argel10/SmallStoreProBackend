import { RowDataPacket } from "mysql2";
import { pool } from "../../informacionBd";
import { ActualizarProductoDTO } from "../../entidades";

export const editarProducto = async (data: ActualizarProductoDTO) => {
  try {
    const {
      productoId,
      nombre,
      precio_de_venta,
      stock_actual,
      stock_inicial,
      categoria,
      usuario,
    } = data;

    const [productoExiste] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM productos WHERE productoId = ?",
      [productoId]
    );

    if (!productoExiste.length) {
      throw new Error("Producto no encontrado");
    }

    const [updateResult]: any = await pool.query(
      "UPDATE productos SET nombre = ?, precio_de_venta = ?, stock_actual = ?, stock_inicial = ?, categoria = ?, usuario = ? WHERE productoId = ?",
      [
        nombre,
        precio_de_venta,
        stock_actual,
        stock_inicial,
        categoria,
        usuario,
        productoId,
      ]
    );

    if (updateResult.affectedRows !== 1) {
      throw new Error("Error al actualizar el producto");
    }

    return {
      productoId,
      nombre,
      precio_de_venta,
      stock_actual,
      stock_inicial,
      categoria,
      usuario,
    };
  } catch (error) {
    console.error("Error al actualizar el producto:", error.message);
    return new Error("Error al actualizar el producto.");
  }
};
