let puntuacion: number = 0;

const CUATRO_DE_COPAS = 4;
const CINCO_DE_COPAS = 5;
const SEIS_DE_COPAS = 6;
const SIETE_DE_COPAS = 7;
const SOTA = 10;
const CABALLO = 11;
const REY = 12;
const MEDIO_PUNTO = 0.5;
const PUNTOS_PARA_GANAR = 7.5;

const muestraPuntuacion = (puntuacion: number): void => {
  const elementoPuntuacion = document.getElementById("mensaje");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = ` Puntuación total: ${puntuacion}`;
  } else {
    console.error(
      "muestraPuntuacion: No se ha encontrado el elemento con id mensaje"
    );
  }
};
const generarNumeroAleatorioDeCarta = (): number => {
  let numeroAleatorioDeCarta: number = Math.ceil(Math.random() * 10);
  if (numeroAleatorioDeCarta > SIETE_DE_COPAS) {
    numeroAleatorioDeCarta = numeroAleatorioDeCarta + 2;
  }
  return numeroAleatorioDeCarta;
};

const sumarPuntuacion = (carta: number) => {
  if (carta === SOTA || carta === CABALLO || carta === REY) {
    puntuacion = puntuacion + MEDIO_PUNTO;
  } else {
    puntuacion = puntuacion + carta;
  }
};
const dameCarta = () => {
  const carta = generarNumeroAleatorioDeCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion(puntuacion);
  comprobarMano(puntuacion);
};
const btnPedirCarta = document.getElementById("pedircarta");
btnPedirCarta?.addEventListener("click", dameCarta);

const comprobarMano = (puntuacion: number) => {
  if (puntuacion === PUNTOS_PARA_GANAR) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
    resetearBotonesCuandoGanamos();
  } else if (puntuacion > PUNTOS_PARA_GANAR) {
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

const mostrarImagen = (imagenUrl: string) => {
  let imagen = document.getElementById("imagen");
  imagen?.setAttribute("src", imagenUrl);
};

const mostrarMensaje = (mensaje: string) => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = mensaje;
  } else {
    console.error(
      "mostrarMensaje: No se ha encontrado el elemento con id mensaje"
    );
  }
};
const gameOver = () => {
  mostrarMensaje("GAME OVER! Tu puntuación ha superado los 7.5 puntos");
  resetearBotonesGameOver();
};

const resetearBotonesGameOver = () => {
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

  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.removeAttribute("hidden");
  }
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
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.setAttribute("hidden", "hidden");
  }
};
const nuevaPartida = () => {
  puntuacion = 0;
  mostrarImagen(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  mostrarMensaje("");
  resetearBotonesNuevaPartida();
};

document.addEventListener("DOMContentLoaded", nuevaPartida);

const plantarse = () => {
  if (puntuacion < CUATRO_DE_COPAS) {
    mostrarMensaje("Has sido muy conservador");
  }
  if (puntuacion === CINCO_DE_COPAS) {
    mostrarMensaje("Te ha entrado el canguelo, eh?😂");
  }
  if (puntuacion === SEIS_DE_COPAS || puntuacion === SIETE_DE_COPAS) {
    mostrarMensaje("Casi casí...😲");
  }
  if (puntuacion === PUNTOS_PARA_GANAR) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
  }
  reasetearBotonesAlPlantarse();
};

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse?.addEventListener("click", plantarse);

function saberPasado() {
  dameCarta();
}

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado?.addEventListener("click", saberPasado);

const elementoNuevaPartida = document.getElementById("nuevapartida");
elementoNuevaPartida?.addEventListener("click", nuevaPartida);
