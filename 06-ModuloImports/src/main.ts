import { dameCarta, nuevaPartida, plantarse, saberPasado } from "./ui";

const btnPedirCarta = document.getElementById("pedircarta");

if (btnPedirCarta && btnPedirCarta instanceof HTMLButtonElement) {
  btnPedirCarta.addEventListener("click", dameCarta);
} else {
  console.error("btnPedirCarta: No se ha encontrado el elemento id pedircarta");
}

document.addEventListener("DOMContentLoaded", nuevaPartida);

const btnPlantarse = document.getElementById("plantarse");

if (btnPlantarse && btnPlantarse instanceof HTMLButtonElement) {
  btnPlantarse?.addEventListener("click", plantarse);
} else {
  console.error("btnPlantarse: No se ha encontrado el elemento id plantarse");
}

const btnSaberPasado = document.getElementById("saberpasado");

if (btnSaberPasado && btnSaberPasado instanceof HTMLButtonElement) {
  btnSaberPasado.addEventListener("click", saberPasado);
} else {
  console.error(
    "btnSaberPasado: No se ha encontrado el elemento id saberpasado"
  );
}

const elementoNuevaPartida = document.getElementById("nuevapartida");

if (elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement) {
  elementoNuevaPartida.addEventListener("click", nuevaPartida);
} else {
  console.error(
    "elementoNuevaPartida: No se ha encontrado el elemento id nuevapartida"
  );
}
