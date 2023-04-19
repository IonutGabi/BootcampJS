import { dameCarta, nuevaPartida, plantarse, saberPasado } from "./ui";
const btnPedirCarta = document.getElementById("pedircarta");
btnPedirCarta?.addEventListener("click", dameCarta);

document.addEventListener("DOMContentLoaded", nuevaPartida);

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse?.addEventListener("click", plantarse);

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado?.addEventListener("click", saberPasado);

const elementoNuevaPartida = document.getElementById("nuevapartida");
elementoNuevaPartida?.addEventListener("click", nuevaPartida);
