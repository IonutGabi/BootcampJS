import { LineaTicket, TipoIva } from "./ticket-compra.constantes";

export const calculaSubTotal = (lineasTicket: LineaTicket[]): number => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de entrada no son correctos");
  }
  return lineasTicket.reduce(
    (acumulador, ticket) =>
      ticket.cantidad * ticket.producto.precio + acumulador,
    0
  );
};
export const tipoIvaAAplicar = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 21;
    case "reducido":
      return 10;
    case "superreducidoA":
      return 5;
    case "superreducidoB":
      return 4;
    case "superreducidoC":
      return 0;
    case "sinIVa":
      return 0;
  }
};
