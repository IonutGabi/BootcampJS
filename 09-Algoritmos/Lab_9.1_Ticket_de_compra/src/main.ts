import { LineaTicket, TicketFinal } from "./modelo";
import { tiposDeIva } from "./ticket-compra.constantes";
import {
  resultadoTicket,
  calculaTotalDelProducto,
  agregaTipoDeIvaAlProducto,
} from "./ticket-compra.helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  return {
    lineas: resultadoTicket(lineasTicket),
    total: calculaTotalDelProducto(lineasTicket),
    desgloseIva: agregaTipoDeIvaAlProducto(lineasTicket, tiposDeIva),
  };
};
