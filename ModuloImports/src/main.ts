import { partida } from "./model";
import { dameCarta, saberPasado } from "./motor";
import { plantarse } from "./ui";

partida.puntuacion;

const btnPedirCarta = document.getElementById("pedircarta");
btnPedirCarta?.addEventListener("click", dameCarta);

const btnPlantarse = document.getElementById("plantarse");
btnPlantarse?.addEventListener("click", plantarse);

const btnSaberPasado = document.getElementById("saberpasado");
btnSaberPasado?.addEventListener("click", saberPasado);
