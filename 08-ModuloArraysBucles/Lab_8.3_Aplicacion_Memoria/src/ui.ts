import { Tablero, tablero } from "./modelo";
import {
  iniciarPartida,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
} from "./motor";

const btnEmpezarPartida = document.getElementById("boton");
btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement
  ? btnEmpezarPartida.addEventListener("click", () => iniciarPartida(tablero))
  : console.error(
      "btnEmpezarPartida: No se ha encontrado el elemento id buton"
    );

const laCartaSePuedeVoltear = (indice: number, tablero: Tablero) => {
  sePuedeVoltearLaCarta(indice, tablero);
};

const crearTablero = (tablero: Tablero) => {
  const tableroContenedor = document.getElementById("tablero");
  if (tableroContenedor && tableroContenedor instanceof HTMLDivElement) {
    tablero.cartas.forEach((_, indice) => {
      const div = document.querySelector(`div[data-indice-array="${indice}"]`);
      if (div && div instanceof HTMLDivElement) {
        div.addEventListener("click", () => mostrarCarta(tablero, indice, div));
      }
    });
  }
};

const mostrarImagen = (tablero: Tablero, indice: number) => {
  const imagen = document.querySelector(`img[data-indice-imagen="${indice}"]`);
  if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = tablero.cartas[indice].imagen;
  }
};
const mostrarCarta = (
  tablero: Tablero,
  indice: number,
  div: HTMLDivElement
): void => {
  laCartaSePuedeVoltear(indice, tablero);
  voltearLaCarta(tablero, indice);
  mostrarImagen(tablero, indice);
  div.classList.add("carta-volteada");
  compruebaSiEstamosEnLaPrimeraCarta(tablero);
  compruebaSiEstamosEnLaSegundaCarta(tablero);
  compruebaSisonPareja(tablero);
  esPareja(tablero);
  noEsPareja(tablero);
};

const compruebaSiEstamosEnLaPrimeraCarta = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "CeroCartasLevantadas";
};

const compruebaSiEstamosEnLaSegundaCarta = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "UnaCartaLevantada";
};

const compruebaSisonPareja = (tablero: Tablero): boolean => {
  let compruebaCartas!: boolean;
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    if (tablero.estadoPartida === "DosCartasLevantadas") {
      compruebaCartas = sonPareja(
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB,
        tablero
      );
    }
  }
  return compruebaCartas;
};

const esPareja = (tablero: Tablero) => {
  let esPareja = compruebaSisonPareja(tablero);
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    if (esPareja === true) {
      parejaEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
      console.log("La pareja ha sido encontrada");
    }
  }
};

const noEsPareja = (tablero: Tablero) => {
  let noEsPareja = compruebaSisonPareja(tablero);
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    if (noEsPareja === false) {
      parejaNoEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
      setTimeout(() => {});
    }
  }
};
document.addEventListener("DOMContentLoaded", () => crearTablero(tablero));
