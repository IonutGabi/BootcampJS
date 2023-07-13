import { LineaTicket, TipoIva } from "./modelo";
export const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

export const tipoDeIva: TipoIva[] = [
  "general",
  "reducido",
  "superreducidoA",
  "superreducidoB",
  "superreducidoC",
  "sinIVa",
];
