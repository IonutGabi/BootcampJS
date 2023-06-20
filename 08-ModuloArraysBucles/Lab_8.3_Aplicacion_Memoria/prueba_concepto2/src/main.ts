const voltearCarta = (): void => {
  let carta = document.getElementById("carta");
  carta && carta instanceof HTMLImageElement
    ? (carta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png")
    : console.log("voltearCarta: No se ha encontrado el elemento con id carta");
};

const caja = document.getElementById("caja");
if (caja && caja instanceof HTMLDivElement) {
  caja.addEventListener("click", voltearCarta);
}
