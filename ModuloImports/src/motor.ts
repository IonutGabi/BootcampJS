import { partida } from "./model";
import { mostrarCarta, gameOver, muestraPuntuacion } from "./ui";

export const dameCarta = () => {
  let carta = Math.ceil(Math.random() * 10);
  if (carta > 7) {
    carta = carta + 2;
  }
  mostrarCarta(carta);
  if (carta === 10 || carta === 11 || carta === 12) {
    partida.puntuacion = partida.puntuacion + 0.5;
  } else {
    partida.puntuacion = partida.puntuacion + carta;
  }
  gameOver();
  muestraPuntuacion();
};

export function saberPasado() {
  dameCarta();
}
