import { mostrarDatosIban } from "./main.helpers";

const pintarInformacion = (evento: Event): void => {
  evento.preventDefault();
  const valorCampoInput = document.querySelector("#validar");
  if (valorCampoInput && valorCampoInput instanceof HTMLInputElement) {
    mostrarDatosIban(valorCampoInput.value);
  }
};
const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", (evento) => pintarInformacion(evento));
}
