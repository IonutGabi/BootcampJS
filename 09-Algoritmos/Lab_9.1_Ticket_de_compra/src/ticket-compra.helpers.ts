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

const calculoDelIva = (
  lineasTicket: LineaTicket[],
  ticket: LineaTicket,
  acc: number
) => {
  return (
    (calculaSubTotal(lineasTicket) * tipoIvaAAplicar(ticket.producto.tipoIva)) /
      100 +
    acc
  );
};

const devuelveLosValoresDeLaInterfazResultadoLineaTicket = (
  ticket: LineaTicket,
  subTotal: number,
  totalIva: number
): ResultadoLineaTicket => {
  return {
    nombre: ticket.producto.nombre,
    cantidad: ticket.cantidad,
    precioSinIva: subTotal,
    tipoIva: ticket.producto.tipoIva,
    precioConIva: Number((subTotal + totalIva).toFixed(2)),
  };
};

export const calculaTotalDelProducto = (
  lineasTicket: LineaTicket[]
): ResultadoTotalTicket => {
  if (!lineasTicket) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  const subTotal = calculaSubTotal(lineasTicket);
  const totalIva = lineasTicket.reduce(
    (acumulador, ticket) => calculoDelIva(lineasTicket, ticket, acumulador),
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
    (acumulador, ticket) => calculoDelIva(lineasTicket, ticket, acumulador),
    0
  );
  return devuelveArrayResultadoTicket(lineasTicket, subTotal, totalIva);
};

const devuelveArrayResultadoTicket = (
  lineasTicket: LineaTicket[],
  subTotal: number,
  totalIva: number
): ResultadoLineaTicket[] => {
  return lineasTicket.map((ticket) =>
    devuelveLosValoresDeLaInterfazResultadoLineaTicket(
      ticket,
      subTotal,
      totalIva
    )
  );
};

const devuelveElTipoDeIvaDeCadaProducto = (
  lineasTicket: LineaTicket[],
  tipoDeIva: TipoIva
) => lineasTicket.filter((ticket) => ticket.producto.tipoIva === tipoDeIva);

export const agregaTipoDeIvaAlProducto = (
  lineasTicket: LineaTicket[],
  tiposDeIva: TipoIva[]
): totalPorTipoIva[] => {
  if (!lineasTicket || !tiposDeIva) {
    throw new Error("Los parámetros de salida no son correctos");
  }
  return tiposDeIva
    .map((tipoDeIva) => mapeaTotalDeIva(lineasTicket, tipoDeIva))
    .filter((totalPorTipoIva) =>
      existeElTipoDeIvaDelProducto(lineasTicket, totalPorTipoIva)
    );
};

const mapeaTotalDeIva = (
  lineasTicket: LineaTicket[],
  tipoDeIva: TipoIva
): totalPorTipoIva => {
  const productosConIvaFiltrado = devuelveElTipoDeIvaDeCadaProducto(
    lineasTicket,
    tipoDeIva
  );

  return {
    tipoIva: tipoDeIva,
    cuantia: productosConIvaFiltrado.reduce(
      (acumulador, producto) =>
        calculoDelIva(lineasTicket, producto, acumulador),
      0
    ),
  };
};

const existeElTipoDeIvaDelProducto = (
  lineasTicket: LineaTicket[],
  totalPorTipoIva: totalPorTipoIva
): boolean =>
  lineasTicket.some(
    (ticket) => ticket.producto.tipoIva === totalPorTipoIva.tipoIva
  );
