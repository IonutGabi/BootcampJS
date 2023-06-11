interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const cartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
];

const crearTablero = () => {
  cartas.forEach((carta, indice) => {
    const div = document.querySelector(`div[data-id-carta="${indice}"]`);
    div?.addEventListener("click", () => mostrarImagen(indice, carta));
  });
};

const mostrarImagen = (indice: number, carta: InfoCarta) => {
  const imagen = document.querySelector(`img[data-id-img="${indice}"]`);
  if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = carta.imagen;
    imagen.classList.add("carta-volteada");
  } else {
    console.error("No puedo encontrar la imagen");
  }
};

crearTablero();
