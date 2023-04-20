import { partida } from "./model";
import { generarNumeroAleatorioDeCarta, sumarPuntuacion } from "./motor";

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("mensaje");
  elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement
    ? (elementoPuntuacion.innerText = ` Puntuación total: ${partida.puntuacion}`)
    : console.error(
        "muestraPuntuacion: No se ha encontrado el elemento con id mensaje"
      );
};

export const dameCarta = () => {
  const carta = generarNumeroAleatorioDeCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion();
  comprobarMano();
};

const comprobarMano = () => {
  if (partida.puntuacion === 7.5) {
    ganarPartida();
  } else if (partida.puntuacion > 7.5) {
    gameOver();
  }
};

const mostrarCarta = (numeroAleatorioDeCarta: number): void => {
  let imagenUrl: string = "";
  const URL: string =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";
  switch (numeroAleatorioDeCarta) {
    case 1:
      imagenUrl = `${URL}1_as-copas.jpg`;
      break;

    case 2:
      imagenUrl = `${URL}2_dos-copas.jpg`;
      break;

    case 3:
      imagenUrl = `${URL}3_tres-copas.jpg`;
      break;

    case 4:
      imagenUrl = `${URL}4_cuatro-copas.jpg`;
      break;

    case 5:
      imagenUrl = `${URL}5_cinco-copas.jpg`;
      break;

    case 6:
      imagenUrl = `${URL}6_seis-copas.jpg`;
      break;

    case 7:
      imagenUrl = `${URL}7_siete-copas.jpg`;
      break;

    case 10:
      imagenUrl = `${URL}10_sota-copas.jpg`;
      break;

    case 11:
      imagenUrl = `${URL}11_caballo-copas.jpg`;
      break;

    case 12:
      imagenUrl = `${URL}12_rey-copas.jpg`;
      break;

    default:
      console.error("Ya lo has roto! 😆");
  }
  mostrarImagen(imagenUrl);
};

const mostrarImagen = (imagenUrl: string) => {
  let imagen = document.getElementById("imagen");
  imagen?.setAttribute("src", imagenUrl);
};

const mostrarMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById("mensaje");

  elementoMensaje && elementoMensaje instanceof HTMLDivElement
    ? (elementoMensaje.innerText = mensaje)
    : console.error(
        "mostrarMensaje: No se ha encontrado el elemento con id mensaje"
      );
};

const ganarPartida = () => {
  mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
  resetearBotonesCuandoGanamos();
};

const gameOver = () => {
  mostrarMensaje("GAME OVER! Tu puntuación ha superado los 7.5 puntos");
  resetearBotonesGameOver();
};

const disablePlantarse = (estaDeshabilitado: boolean) => {
  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = estaDeshabilitado;
  }
};

const disablePedirCarta = (estaDeshabilitado: boolean) => {
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = estaDeshabilitado;
  }
};

const disableSaberPasado = (estaDeshabilitado: boolean) => {
  const elementoSaberPasado = document.getElementById("saberpasado");
  if (elementoSaberPasado && elementoSaberPasado instanceof HTMLButtonElement) {
    elementoSaberPasado.disabled = estaDeshabilitado;
  }
};

const mostrarBotonNuevaPartida = () => {
  const elementoNuevaPartida = document.getElementById("nuevapartida");
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.removeAttribute("hidden");
  }
};

const ocultarBotonNuevaPartida = () => {
  const elementoNuevaPartida = document.getElementById("nuevapartida");
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.setAttribute("hidden", "hidden");
  }
};

const resetearBotonesGameOver = () => {
  disablePlantarse(true);
  disablePedirCarta(true);
  disableSaberPasado(true);
  mostrarBotonNuevaPartida();
};

const resetearBotonesCuandoGanamos = () => {
  disablePlantarse(true);
  disablePedirCarta(true);
  disableSaberPasado(true);
};

const reasetearBotonesAlPlantarse = () => {
  disablePlantarse(true);
  disablePedirCarta(true);
  disableSaberPasado(false);
  mostrarBotonNuevaPartida();
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
  disablePlantarse(false);
  disablePedirCarta(false);
  disableSaberPasado(true);
  ocultarBotonNuevaPartida();
};

export const plantarse = () => {
  if (partida.puntuacion < 4) {
    mostrarMensaje("Has sido muy conservador");
  }
  if (partida.puntuacion === 5) {
    mostrarMensaje("Te ha entrado el canguelo, eh?😂");
  }
  if (partida.puntuacion === 6 || partida.puntuacion === 7) {
    mostrarMensaje("Casi casí...😲");
  }
  if (partida.puntuacion === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
  }
  reasetearBotonesAlPlantarse();
};

export const saberPasado = () => {
  dameCarta();
  disableSaberPasado(true);
};
