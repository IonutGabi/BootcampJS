import { Tablero, partida, tablero } from "./modelo";
import {
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearLaCarta,
  iniciaPartida,
  compruebaSiEstamosEnLaPrimeraCarta,
  compruebaSiEstamosEnLaSegundaCarta,
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

const clickBotonEmpezarPartida = () => {
  iniciaPartida(tablero);
};

export const agregarEventoBotonIniciarPartida = () => {
  const btnEmpezarPartida = document.getElementById("boton");
  btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement
    ? btnEmpezarPartida.addEventListener("click", () =>
        clickBotonEmpezarPartida()
      )
    : console.error(
        "btnEmpezarPartida: No se ha encontrado el elemento id buton"
      );
};

export const crearTablero = () => {
  const tableroContenedor = document.getElementById("tablero");
  if (tableroContenedor && tableroContenedor instanceof HTMLDivElement) {
    tablero.cartas.forEach((_, indice) => {
      const div = document.querySelector(`div[data-indice-array="${indice}"]`);
      if (div && div instanceof HTMLDivElement) {
        div.addEventListener("click", () => {
          if (tablero.estadoPartida !== "PartidaNoIniciada") {
            mostrarCarta(tablero, indice, div);
          }
        });
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
const ocultarImagen = (tablero: Tablero) => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    volverAVoltearLaCarta(tablero, i);
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
  compruebaSisonPareja(tablero);
};

const compruebaSisonPareja = (tablero: Tablero) => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;
  if (indiceA !== undefined && indiceB !== undefined) {
    if (tablero.estadoPartida === "DosCartasLevantadas") {
      sonPareja(indiceA, indiceB, tablero)
        ? esPareja(tablero, indiceA, indiceB)
        : noEsPareja(tablero, indiceA, indiceB);
    }
  }
};

const mostrarMensajeDeHasGanado = () => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje && mensaje instanceof HTMLDivElement) {
    mensaje.textContent = "¡¡¡Enhorabuena!!! Has ganado la partida 🥳🥳🥳";
  }
};

const esPareja = (tablero: Tablero, indiceA: number, indiceB: number) => {
  parejaEncontrada(tablero, indiceA, indiceB);
  if (esPartidaCompleta(tablero) === true) {
    mostrarMensajeDeHasGanado();
  }
};

const noEsPareja = (tablero: Tablero, indiceA: number, indiceB: number) => {
  setTimeout(() => {
    ocultarImagen(tablero);
  }, 1000);
  parejaNoEncontrada(tablero, indiceA, indiceB);
  muestraIntentos();
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
