import { Tablero, partida, tablero } from "./modelo";
import {
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
  iniciaPartida,
} from "./motor";

const muestraIntentos = () => {
  const numIntentos = document.getElementById("intentos");
  if (numIntentos && numIntentos instanceof HTMLDivElement) {
    numIntentos.innerText = `Número de intentos: ${partida.intentos}`;
  }
};
const laCartaSePuedeVoltear = (indice: number, tablero: Tablero) => {
  sePuedeVoltearLaCarta(indice, tablero) === true
    ? voltearLaCarta(tablero, indice)
    : mensajeYaEstaDadaLaVuelta();
};

export const crearTablero = () => {
  iniciaPartida(tablero);
  iniciarPartida(tablero);
};

const iniciarPartida = (tablero: Tablero) => {
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

const volverAVoltearLaCarta = (tablero: Tablero, indice: number) => {
  if (!tablero.cartas[indice].encontrada) {
    const imagen = document.querySelector(
      `img[data-indice-imagen="${indice}"]`
    );
    if (imagen && imagen instanceof HTMLImageElement) {
      imagen.src = "";
    }
    const div = document.querySelector(`div[data-indice-array="${indice}"]`);
    if (div && div instanceof HTMLDivElement) {
      div.classList.remove("carta-volteada");
    }
  }
};
const ocultarImagen = (tablero: Tablero, indice: number) => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    indice = i;
    volverAVoltearLaCarta(tablero, indice);
  }
};
const mostrarCarta = (
  tablero: Tablero,
  indice: number,
  div: HTMLDivElement
): void => {
  laCartaSePuedeVoltear(indice, tablero);
  mostrarImagen(tablero, indice);
  div.classList.add("carta-volteada");
  compruebaSiEstamosEnLaPrimeraCarta(tablero);
  compruebaSiEstamosEnLaSegundaCarta(tablero);
  compruebaSisonPareja(tablero, indice);
};

const compruebaSiEstamosEnLaPrimeraCarta = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "CeroCartasLevantadas";
};

const compruebaSiEstamosEnLaSegundaCarta = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "UnaCartaLevantada";
};

const compruebaSisonPareja = (tablero: Tablero, indice: number) => {
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    if (tablero.estadoPartida === "DosCartasLevantadas") {
      sonPareja(
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB,
        tablero
      )
        ? esPareja(tablero)
        : noEsPareja(tablero, indice);
    }
  }
};

const esPareja = (tablero: Tablero) => {
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    parejaEncontrada(
      tablero,
      tablero.indiceCartaVolteadaA,
      tablero.indiceCartaVolteadaB
    );
    const mensaje = document.getElementById("mensaje");
    if (mensaje && mensaje instanceof HTMLDivElement) {
      if (esPartidaCompleta(tablero) === true) {
        mensaje.textContent = "¡¡¡Enhorabuena!!! Has ganado la partida 🥳🥳🥳";
      }
    }
  }
};

const noEsPareja = (tablero: Tablero, indice: number) => {
  if (
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    setTimeout(() => {
      ocultarImagen(tablero, indice);
    }, 1000);
    parejaNoEncontrada(
      tablero,
      tablero.indiceCartaVolteadaA,
      tablero.indiceCartaVolteadaB
    );
    muestraIntentos();
  }
};

const mensajeYaEstaDadaLaVuelta = (): void => {
  const mensajeError = document.getElementById("mensajeError");
  if (mensajeError && mensajeError instanceof HTMLDivElement) {
    mensajeError.textContent = "Esta carta ya ha sido volteada";
    setTimeout(() => {
      mensajeError.textContent = "";
    }, 2000);
  }
};
