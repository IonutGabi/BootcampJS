import {
  LineaTicket,
  TipoIva,
  ResultadoTotalTicket,
  ResultadoLineaTicket,
  totalPorTipoIva,
} from "./modelo";

const calculaSubTotal = (lineasTicket: LineaTicket[]): number => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de entrada no son correctos");
  }
  return lineasTicket.reduce(
    (acumulador, ticket) =>
      ticket.cantidad * ticket.producto.precio + acumulador,
    0
  );
};
const tipoIvaAAplicar = (tipoIva: TipoIva): number => {
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
  return devuelveArrayResultadoTicket(lineasTicket, subTotal, totalIva);
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

const devuelveArrayResultadoTicket = (
  lineasTicket: LineaTicket[],
  subTotal: number,
  totalIva: number
): ResultadoLineaTicket[] => {
  return lineasTicket.map((ticket) => ({
    nombre: ticket.producto.nombre,
    cantidad: ticket.cantidad,
    precioSinIva: subTotal,
    tipoIva: ticket.producto.tipoIva,
    precioConIva: Number((subTotal + totalIva).toFixed(2)),
  }));
};
