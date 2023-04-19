import { partida } from "./model";

export const generarNumeroAleatorioDeCarta = (): number => {
  let numeroAleatorioDeCarta: number = Math.ceil(Math.random() * 10);
  if (numeroAleatorioDeCarta > 7) {
    numeroAleatorioDeCarta = numeroAleatorioDeCarta + 2;
  }
  return numeroAleatorioDeCarta;
};

export const sumarPuntuacion = (carta: number) => {
  carta >= 10
    ? (partida.puntuacion = partida.puntuacion + 0.5)
    : (partida.puntuacion = partida.puntuacion + carta);
};
