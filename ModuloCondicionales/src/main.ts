let puntuacion: number = 0;

const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("mostrarpuntos");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = ` Puntuación total: ${puntuacion}`;
  } else {
    console.error(
      "muestraPuntuacion: No se ha encontrado el elemento con id mostrarpuntos"
    );
  }
};
document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const dameCarta = () => {
  let carta = Math.ceil(Math.random() * 10);
  if (carta > 7) {
    carta = carta + 2;
  }
  mostrarCarta(carta);
  if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion = puntuacion + 0.5;
  } else {
    puntuacion = puntuacion + carta;
  }
  gameOver();
  muestraPuntuacion();
};
const btnPedirCarta = document.getElementById("pedircarta");
btnPedirCarta?.addEventListener("click", dameCarta);

const mostrarCarta = (carta: number): void => {
  let imagen = document.getElementById("imagen");

  switch (carta) {
    case 1:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
      );
      break;

    case 2:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
      );
      break;

    case 3:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
      );
      break;

    case 4:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
      );
      break;

    case 5:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
      );
      break;

    case 6:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
      );
      break;

    case 7:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
      );
      break;

    case 10:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
      );
      break;

    case 11:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
      );
      break;

    case 12:
      imagen?.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
      );
      break;

    default:
      console.error("Ya lo has roto! 😆");
  }
};

const gameOver = () => {
  if (puntuacion > 7.5) {
    const elementoGameOver = document.getElementById("gameOver");
    if (elementoGameOver) {
      elementoGameOver.innerHTML = `GAME OVER, lo siento tu puntuación ha superado el 7.5`;
    }
    const elementoPedirCarta = document.getElementById("pedircarta");
    if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
      elementoPedirCarta.disabled = true;
    } else {
      console.error(
        "GameOver: No se ha encontrado el elemento con id gameOver"
      );
    }
    const elementoPlantarse = document.getElementById("plantarse");
    if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
      elementoPlantarse.disabled = true;
    }
    const elementoNuevaPartida = document.getElementById("nuevapartida");
    elementoNuevaPartida?.removeAttribute("hidden");
    elementoNuevaPartida?.addEventListener("click", () => {
      location.reload();
    });
    const elementoSaberPasado = document.getElementById("saberpasado");

    if (
      elementoSaberPasado &&
      elementoSaberPasado instanceof HTMLButtonElement
    ) {
      elementoSaberPasado.disabled = true;
    }
  }
};

const plantarse = () => {
  let mensaje: string = "";

  if (puntuacion < 4) {
    mensaje = "Has sido muy conservador";
  } else if (puntuacion === 5) {
    mensaje = "Te ha entrado el canguelo, eh?😂";
  } else if (puntuacion === 6 || puntuacion === 7) {
    mensaje = "Casi casí...😲";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena! 🥳";
  }

  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerHTML = mensaje;
  } else {
    console.error("plantarse: No se ha encontrado el elemento con id mensaje");
  }
  const elementoPedirCarta = document.getElementById("pedircarta");
  if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
    elementoPedirCarta.disabled = true;
  } else {
    console.error(
      "plantarse: No se ha encontrado el elemento con id plantarse"
    );
  }
  const elementoPlantarse = document.getElementById("plantarse");
  if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
    elementoPlantarse.disabled = true;

    const elementoNuevaPartida = document.getElementById("nuevapartida");
    elementoNuevaPartida?.removeAttribute("hidden");
    elementoNuevaPartida?.addEventListener("click", () => {
      location.reload();
    });
  } else {
    console.error(
      "plantarse: No se ha encontrado el elemento con id plantarse"
    );
  }
};

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse?.addEventListener("click", plantarse);

function saberPasado() {
  dameCarta();
}

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado?.addEventListener("click", saberPasado);
