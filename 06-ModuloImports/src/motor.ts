import {
  SIETE_DE_COPAS,
  SOTA,
  CABALLO,
  REY,
  MEDIO_PUNTO,
  partida,
} from "./model";

export const generarNumeroAleatorioDeCarta = (): number => {
  let numeroAleatorioDeCarta: number = Math.ceil(Math.random() * 10);
  if (numeroAleatorioDeCarta > SIETE_DE_COPAS) {
    numeroAleatorioDeCarta = numeroAleatorioDeCarta + 2;
  }
  return numeroAleatorioDeCarta;
};

export const sumarPuntuacion = (carta: number) => {
  if (carta === SOTA || carta === CABALLO || carta === REY) {
    partida.puntuacion = partida.puntuacion + MEDIO_PUNTO;
  } else {
    partida.puntuacion = partida.puntuacion + carta;
  }
};
