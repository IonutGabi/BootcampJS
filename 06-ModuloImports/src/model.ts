export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";

interface Partida {
  puntuacion: number;
  estado: EstadoPartida;
}

interface PuntoDeJuego {
  puntosTotales: number;
  medioPunto: number;
  cuatroDeCopas: number;
  cincoDeCopas: number;
  seisDeCopas: number;
  sieteDeCopas: number;
  sota: number;
}

export const partida: Partida = {
  puntuacion: 0,
  estado: "POR_DEBAJO_MAXIMO",
};

export const puntos: PuntoDeJuego = {
  puntosTotales: 7.5,
  medioPunto: 0.5,
  cuatroDeCopas: 4,
  cincoDeCopas: 5,
  seisDeCopas: 6,
  sieteDeCopas: 7,
  sota: 10,
};
