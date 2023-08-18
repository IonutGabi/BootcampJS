import {
  pintarMensajeIbanEstaBienFormado,
  pintarMensajeIbanEsValido,
  pintarInformacionBanco,
} from "./main.helpers";

const pintarInformacion = (evento: Event): void => {
  evento.preventDefault();
  pintarMensajeIbanEstaBienFormado();
  pintarMensajeIbanEsValido();
  pintarInformacionBanco();
};
const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", (evento) => pintarInformacion(evento));
}
