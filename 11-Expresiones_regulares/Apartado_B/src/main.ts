import { extraerImagenesDelHtml } from "./main.helpers";

const pintarImagenesExtraidas = (evento: Event): void => {
  evento.preventDefault();
  const obtenerValorDelTextArea = document.querySelector("#extraer");
  if (
    obtenerValorDelTextArea &&
    obtenerValorDelTextArea instanceof HTMLTextAreaElement
  ) {
    extraerImagenesDelHtml(obtenerValorDelTextArea.value);
  } else {
    throw new Error("No se ha podido obtener el valor del textArea");
  }
};

const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", (evento) =>
    pintarImagenesExtraidas(evento)
  );
}
