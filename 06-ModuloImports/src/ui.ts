import {
  PUNTOS_PARA_GANAR,
  CUATRO_DE_COPAS,
  CINCO_DE_COPAS,
  SEIS_DE_COPAS,
  SIETE_DE_COPAS,
  partida,
} from "./model";
import { generarNumeroAleatorioDeCarta, sumarPuntuacion } from "./motor";

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("mensaje");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = ` Puntuación total: ${partida.puntuacion}`;
  } else {
    console.error(
      "muestraPuntuacion: No se ha encontrado el elemento con id mensaje"
    );
  }
};

export const dameCarta = () => {
  const carta = generarNumeroAleatorioDeCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion();
  comprobarMano();
};

const comprobarMano = () => {
  if (partida.puntuacion === PUNTOS_PARA_GANAR) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
    resetearBotonesCuandoGanamos();
  } else if (partida.puntuacion > PUNTOS_PARA_GANAR) {
    gameOver();
  }
};

const mostrarCarta = (numeroAleatorioDeCarta: number): void => {
  let imagenUrl: string = "";

  switch (numeroAleatorioDeCarta) {
    case 1:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;

    case 2:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;

    case 3:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;

    case 4:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;

    case 5:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;

    case 6:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;

    case 7:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;

    case 10:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;

    case 11:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;

    case 12:
      imagenUrl =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;

    default:
      console.error("Ya lo has roto! 😆");
  }
  mostrarImagen(imagenUrl);
};

export const mostrarImagen = (imagenUrl: string) => {
  let imagen = document.getElementById("imagen");
  imagen?.setAttribute("src", imagenUrl);
};

export const mostrarMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = mensaje;
  } else {
    console.error(
      "mostrarMensaje: No se ha encontrado el elemento con id mensaje"
    );
  }
};

export const gameOver = () => {
  mostrarMensaje("GAME OVER! Tu puntuación ha superado los 7.5 puntos");
  resetearBotonesGameOver();
};

export const resetearBotonesGameOver = () => {
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  }

  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;
  }
  const elementoSaberPasado = document.getElementById("saberpasado");

  if (elementoSaberPasado && elementoSaberPasado instanceof HTMLButtonElement) {
    elementoSaberPasado.disabled = true;
  }
  const elementoNuevaPartida = document.getElementById("nuevapartida");
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.removeAttribute("hidden");
  }
};

const resetearBotonesCuandoGanamos = () => {
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  }
  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;
  }

  const elementoSaberPasado = document.getElementById("saberpasado");

  if (elementoSaberPasado && elementoSaberPasado instanceof HTMLButtonElement) {
    elementoSaberPasado.disabled = true;
  }
};

const reasetearBotonesAlPlantarse = () => {
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  }
  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;
  }
  const elementoSaberPasado = document.getElementById("saberpasado");

  if (elementoSaberPasado && elementoSaberPasado instanceof HTMLButtonElement) {
    elementoSaberPasado.disabled = false;
  }
  const elementoNuevaPartida = document.getElementById("nuevapartida");

  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.removeAttribute("hidden");
  }
};

export const nuevaPartida = () => {
  partida.puntuacion = 0;
  mostrarImagen(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  mostrarMensaje("");
  resetearBotonesNuevaPartida();
};

const resetearBotonesNuevaPartida = () => {
  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = false;
  }
  const elementoSaberPasado = document.getElementById("saberpasado");

  if (elementoSaberPasado && elementoSaberPasado instanceof HTMLButtonElement) {
    elementoSaberPasado.disabled = true;
  }
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = false;
  }
  const elementoNuevaPartida = document.getElementById("nuevapartida");
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.setAttribute("hidden", "hidden");
  }
};

export const plantarse = () => {
  if (partida.puntuacion < CUATRO_DE_COPAS) {
    mostrarMensaje("Has sido muy conservador");
  }
  if (partida.puntuacion === CINCO_DE_COPAS) {
    mostrarMensaje("Te ha entrado el canguelo, eh?😂");
  }
  if (
    partida.puntuacion === SEIS_DE_COPAS ||
    partida.puntuacion === SIETE_DE_COPAS
  ) {
    mostrarMensaje("Casi casí...😲");
  }
  if (partida.puntuacion === PUNTOS_PARA_GANAR) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
  }
  reasetearBotonesAlPlantarse();
};

export function saberPasado() {
  dameCarta();
}
