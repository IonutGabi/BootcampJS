import { LineaTicket, TicketFinal } from "./modelo";
import {
  resultadoTicket,
  calculaTotalDelProducto,
  desgloseIva,
} from "./ticket-compra.helpers";

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
