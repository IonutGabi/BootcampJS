import { dameCarta, nuevaPartida, plantarse, saberPasado } from "./ui";

const btnPedirCarta = document.getElementById("pedircarta");

btnPedirCarta && btnPedirCarta instanceof HTMLButtonElement
  ? btnPedirCarta.addEventListener("click", dameCarta)
  : console.error(
      "btnPedirCarta: No se ha encontrado el elemento id pedircarta"
    );

const btnPlantarse = document.getElementById("plantarse");

btnPlantarse && btnPlantarse instanceof HTMLButtonElement
  ? btnPlantarse?.addEventListener("click", plantarse)
  : console.error("btnPlantarse: No se ha encontrado el elemento id plantarse");

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
