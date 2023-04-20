let puntuacion: number = 0;

const muestraPuntuacion = (puntuacion: number): void => {
  const elementoPuntuacion = document.getElementById("mensaje");
  elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement
    ? (elementoPuntuacion.innerText = ` Puntuación total: ${puntuacion}`)
    : console.error(
        "muestraPuntuacion: No se ha encontrado el elemento con id mensaje"
      );
};

const generarNumeroAleatorioDeCarta = (): number => {
  let numeroAleatorioDeCarta: number = Math.ceil(Math.random() * 10);
  if (numeroAleatorioDeCarta > 7) {
    numeroAleatorioDeCarta = numeroAleatorioDeCarta + 2;
  }
  return numeroAleatorioDeCarta;
};

const sumarPuntuacion = (carta: number) => {
  carta >= 10
    ? (puntuacion = puntuacion + 0.5)
    : (puntuacion = puntuacion + carta);
};
const dameCarta = () => {
  const carta = generarNumeroAleatorioDeCarta();
  mostrarCarta(carta);
  sumarPuntuacion(carta);
  muestraPuntuacion(puntuacion);
  comprobarMano(puntuacion);
};

const btnPedirCarta = document.getElementById("pedircarta");

btnPedirCarta && btnPedirCarta instanceof HTMLButtonElement
  ? btnPedirCarta.addEventListener("click", dameCarta)
  : console.error(
      "btnPedirCarta: No se ha encontrado el elemento id pedircarta"
    );

const comprobarMano = (puntuacion: number) => {
  if (puntuacion === 7.5) {
    ganarPartida();
  } else if (puntuacion > 7.5) {
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
  imagen && imagen instanceof HTMLImageElement
    ? imagen.setAttribute("src", imagenUrl)
    : console.error(
        "mostrarImagen: No se ha encontrado el elemento con id imagen"
      );
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
  if (
    elementoNuevaPartida &&
    elementoNuevaPartida instanceof HTMLButtonElement
  ) {
    elementoNuevaPartida.removeAttribute("hidden");
  }
};

const ocultarBotonNuevaPartida = () => {
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
  mostrarBotonNuevaPartida();
};

const resetearBotonesCuandoGanamos = () => {
  disablePedirCarta(true);
  disablePlantarse(true);
  disableSaberPasado(true);
};

const reasetearBotonesAlPlantarse = () => {
  disablePedirCarta(true);
  disablePlantarse(true);
  disableSaberPasado(false);
  mostrarBotonNuevaPartida();
};

const resetearBotonesNuevaPartida = () => {
  disablePlantarse(false);
  disableSaberPasado(true);
  disablePedirCarta(false);
  ocultarBotonNuevaPartida();
};

const nuevaPartida = () => {
  puntuacion = 0;
  mostrarImagen(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  mostrarMensaje("");
  resetearBotonesNuevaPartida();
};

const saberPasado = () => {
  dameCarta();
  disableSaberPasado(true);
};

const plantarse = () => {
  if (puntuacion < 4) {
    mostrarMensaje("Has sido muy conservador");
  }
  if (puntuacion === 5) {
    mostrarMensaje("Te ha entrado el canguelo, eh?😂");
  }
  if (puntuacion === 6 || puntuacion === 7) {
    mostrarMensaje("Casi casí...😲");
  }
  if (puntuacion === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🥳");
  }
  reasetearBotonesAlPlantarse();
};

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse && btnPlantarse instanceof HTMLButtonElement
  ? btnPlantarse.addEventListener("click", plantarse)
  : console.error("No se ha encontrado el elemento id de plantarse");

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado && btnSaberPasado instanceof HTMLButtonElement
  ? btnSaberPasado.addEventListener("click", saberPasado)
  : console.error(
      "btnSaberPasado: No se ha encontrado el elemento id saberpasado"
    );

const elementoNuevaPartida = document.getElementById("nuevapartida");
elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement
  ? elementoNuevaPartida.addEventListener("click", nuevaPartida)
  : console.error(
      "elementoNuevaPartida: No se ha encontrado el elemento id nuevapartida"
    );
document.addEventListener("DOMContentLoaded", nuevaPartida);
