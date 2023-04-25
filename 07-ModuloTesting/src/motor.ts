import { EstadoPartida, partida, puntos } from "./model";

export const obtenerEstadoPartida = (): EstadoPartida => {
  console.log(partida.puntuacion);
  if (partida.puntuacion === puntos.puntosTotales) {
    partida.estado = "JUSTO_MAXIMA";
  } else if (partida.puntuacion > puntos.puntosTotales) {
    partida.estado = "TE_HAS_PASADO";
  }
  return partida.estado;
};

export const generarNumeroAleatorioDeCarta = (): number => {
  let numeroAleatorioDeCarta: number = Math.ceil(Math.random() * 10);
  if (numeroAleatorioDeCarta > puntos.sieteDeCopas) {
    numeroAleatorioDeCarta = numeroAleatorioDeCarta + 2;
  }
  return numeroAleatorioDeCarta;
};

export const sumarPuntuacion = (carta: number) => {
  return carta >= puntos.sota
    ? partida.puntuacion + puntos.medioPunto
    : partida.puntuacion + carta;
};
