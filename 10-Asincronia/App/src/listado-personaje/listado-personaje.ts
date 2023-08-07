import {
  obtenerPersonajeFiltrado,
  obtenerPersonajes,
} from "./listado-personaje.api";
import {
  crearContenedorPersonajes,
  obtenerValorCampo,
} from "./listado-personaje.helpers";
import { Personaje } from "./listado-personaje.model";

const pintarPersonajes = async (personajes: Personaje[]) => {
  const listado = document.querySelector("#listado-personajes");
  if (listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = "";
    personajes.forEach((personaje) => {
      const contenedorPersonajes = crearContenedorPersonajes(personaje);
      listado.appendChild(contenedorPersonajes);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor listado-personajes");
  }
};

const pintarPersonajeFiltrado = async (evento: Event) => {
  evento.preventDefault();
  const personajeFiltrado = await obtenerPersonajeFiltrado(
    obtenerValorCampo("nombre-personaje")
  );
  pintarPersonajes(personajeFiltrado);
};

document.addEventListener("DOMContentLoaded", async () => {
  const personajes = await obtenerPersonajes();
  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", (evento) => {
      pintarPersonajeFiltrado(evento);
    });
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
  pintarPersonajes(personajes);
});
