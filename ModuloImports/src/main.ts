import { partida } from "./model";
import { dameCarta } from "./motor";
import { muestraPuntuacion, plantarse } from "./ui";

partida.puntuacion;

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const btnPedirCarta = document.getElementById("pedircarta");
btnPedirCarta?.addEventListener("click", dameCarta);

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse?.addEventListener("click", plantarse);

function saberPasado() {
  dameCarta();
}

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado?.addEventListener("click", saberPasado);
