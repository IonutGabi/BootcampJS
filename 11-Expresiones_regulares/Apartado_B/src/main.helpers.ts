export const crearEtiquetaImagen = (url: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = url;
    return imagen;
  } else {
    throw new Error("No se ha podido crear el elemento imagen");
  }
};

const listarImagenes = (listadoImagenes: RegExpMatchArray) => {
  const contenedorImagenes = document.querySelector("#listado-imagenes");
  if (contenedorImagenes && contenedorImagenes instanceof HTMLDivElement) {
    contenedorImagenes.textContent = "";
    listadoImagenes.forEach((url) => {
      const imagen = crearEtiquetaImagen(url);
      contenedorImagenes.appendChild(imagen);
    });
  }
};
export const extraerImagenesDelHtml = (value: string) => {
  const patron = /(http|https):\/\/.{1,}(webp|jpg|png|svg)/gm;
  const encontrado = value.match(patron);
  if (encontrado) {
    listarImagenes(encontrado);
  } else {
    throw new Error("No se ha encontrado el elemento url");
  }
};
