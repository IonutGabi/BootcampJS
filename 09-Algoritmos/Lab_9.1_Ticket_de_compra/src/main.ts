import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TicketFinal,
  totalPorTipoIva,
} from "./ticket-compra.constantes";
import { calculaSubTotal, tipoIvaAAplicar } from "./ticket-compra.helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal[] => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  return [
    {
      lineas: resultadoTicket(lineasTicket),
      total: calculaTotalDelProducto(lineasTicket),
      desgloseIva: desgloseIva(lineasTicket),
    },
  ];
};

export const calculaTotalDelProducto = (
  lineasTicket: LineaTicket[]
): ResultadoTotalTicket => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  const subTotal = calculaSubTotal(lineasTicket);
  const totalIva = lineasTicket.reduce(
    (acumulador, ticket) =>
      (calculaSubTotal(lineasTicket) *
        tipoIvaAAplicar(ticket.producto.tipoIva)) /
        100 +
      acumulador,
    0
  );
  return {
    totalSinIva: subTotal,
    totalConIva: Number((subTotal + totalIva).toFixed(2)),
    totalIva: totalIva,
  };
};
export const resultadoTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }

  const subTotal = calculaSubTotal(lineasTicket);
  const totalIva = lineasTicket.reduce(
    (acumulador, ticket) =>
      (calculaSubTotal(lineasTicket) *
        tipoIvaAAplicar(ticket.producto.tipoIva)) /
        100 +
      acumulador,
    0
  );

  return lineasTicket.map((ticket) => ({
    nombre: ticket.producto.nombre,
    cantidad: ticket.cantidad,
    precioSinIva: subTotal,
    tipoIva: ticket.producto.tipoIva,
    precioConIva: Number((subTotal + totalIva).toFixed(2)),
  }));
};

export const desgloseIva = (lineasTicket: LineaTicket[]): totalPorTipoIva[] => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  return lineasTicket.map((ticket) => ({
    tipoIva: ticket.producto.tipoIva,
    cuantia: tipoIvaAAplicar(ticket.producto.tipoIva),
  }));
};
