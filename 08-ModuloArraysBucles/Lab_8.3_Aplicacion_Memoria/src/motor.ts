import { Carta, Tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  let arrayCopy = [...cartas];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

export const sePuedeVoltearLaCarta = (
  indice: number,
  tablero: Tablero
): boolean => {
  const carta = tablero.cartas[indice];
  return !carta.encontrada && !carta.estaVuelta;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    actualizarEstadoUnaCartaLevantada(tablero, indice);
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    actualizarEstadoDosCartasLevantada(tablero, indice);
  }
};
const actualizarEstadoUnaCartaLevantada = (
  tablero: Tablero,
  indice: number
): void => {
  tablero.estadoPartida = "UnaCartaLevantada";
  tablero.indiceCartaVolteadaA = indice;
};

const actualizarEstadoDosCartasLevantada = (
  tablero: Tablero,
  indice: number
) => {
  tablero.estadoPartida = "DosCartasLevantadas";
  tablero.indiceCartaVolteadaB = indice;
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = esPartidaCompleta(tablero)
    ? "PartidaCompleta"
    : "CeroCartasLevantadas";
};

export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = false;
  tablero.cartas[indiceB].encontrada = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean =>
  tablero.cartas.every((carta) => (carta.encontrada = true));

export const iniciarPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  const cartas: Carta[] = tablero.cartas.map((carta) => ({
    ...carta,
    estaVuelta: false,
    encontrada: false,
  }));
  tablero.cartas = barajarCartas(cartas);
};
