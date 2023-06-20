import { crearTablero } from "./ui";

const empiezaPartida = () => {
  crearTablero();
};

const iniciarPartida = () => {
  const btnEmpezarPartida = document.getElementById("boton");
  btnEmpezarPartida && btnEmpezarPartida instanceof HTMLButtonElement
    ? btnEmpezarPartida.addEventListener("click", () => empiezaPartida())
    : console.error(
        "btnEmpezarPartida: No se ha encontrado el elemento id buton"
      );
};
document.addEventListener("DOMContentLoaded", () => iniciarPartida());
