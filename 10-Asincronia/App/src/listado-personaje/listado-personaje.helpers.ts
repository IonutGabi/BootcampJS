import { Personaje } from "./listado-personaje.model";

const crearElementoImagen = (
  personaje: Personaje,
  nombre: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  const imagenUrl = `http://localhost:3000/${personaje.imagen}`;
  imagen.src = imagenUrl;
  imagen.alt = nombre;

  return imagen;
};
const crearContenedor = (): HTMLDivElement => {
  const div = document.createElement("div");
  return div;
};

const crearContenedorCard = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = "";
  return div;
};

const crearEtiquetaSpan = (): HTMLSpanElement => {
  const span = document.createElement("span");
  return span;
};

const crearElementoParrafoConUnaClase = (
  texto: string,
  etiqueta: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  const strong = document.createElement("strong");
  const span = crearEtiquetaSpan();
  span.classList.add("nombre");
  strong.textContent = etiqueta;
  span.textContent = texto;

  parrafo.appendChild(strong);
  parrafo.appendChild(span);
  return parrafo;
};
const crearElementoParrafo = (
  texto: string,
  etiqueta: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  const label = document.createElement("strong");
  const span = crearEtiquetaSpan();
  label.textContent = etiqueta;
  span.textContent = texto;
  parrafo.appendChild(label);
  parrafo.appendChild(span);

  return parrafo;
};

const crearElementoHabilidades = (
  habilidades: string[],
  etiqueta: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  const label = document.createElement("strong");
  const span = crearEtiquetaSpan();
  parrafo.appendChild(label);
  label.textContent = etiqueta;
  if (habilidades && habilidades !== undefined) {
    habilidades.forEach((habilidad) => {
      span.textContent += `\n${habilidad},`;
      parrafo.appendChild(span);
    });
  }
  return parrafo;
};

export const crearContenedorPersonajes = (
  personaje: Personaje
): HTMLDivElement => {
  const elementoPersonaje = crearContenedorCard();
  const div = crearContenedor();
  const imagen = crearElementoImagen(personaje, personaje.nombre);
  elementoPersonaje.appendChild(imagen);
  elementoPersonaje.appendChild(div);
  const nombre = crearElementoParrafoConUnaClase(personaje.nombre, "Nombre:");
  div.appendChild(nombre);
  const especialidad = crearElementoParrafo(
    personaje.especialidad,
    "Especialidad:"
  );
  div.appendChild(especialidad);
  const habilidades = crearElementoHabilidades(
    personaje.habilidades,
    "Habilidades:"
  );
  div.appendChild(habilidades);
  return elementoPersonaje;
};

export const obtenerValorCampo = (campo: string): string => {
  const elementoCampo = document.querySelector(`#${campo}`);
  if (elementoCampo && elementoCampo instanceof HTMLInputElement) {
    console.log(elementoCampo.value);
    return elementoCampo.value;
  } else {
    throw new Error(`No se ha encontrado el campo ${campo}`);
  }
};
