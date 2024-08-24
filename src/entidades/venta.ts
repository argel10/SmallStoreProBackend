export interface Venta {
  ventaId: number;
  usuario: string;
  fecha_venta: string;
  producto: string;
  cantidad: number;
  precio: number;
  total_venta: number;
}

export type CrearVentaDTO = Omit<Venta, "ventaId">;
export type ActualizarVentaDTO = Partial<Venta>;
