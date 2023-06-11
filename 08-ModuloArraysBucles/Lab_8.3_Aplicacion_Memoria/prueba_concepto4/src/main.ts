const darVueltaALaCarta1 = (): void => {
  let primeraCarta = document.getElementById("primeracarta");
  primeraCarta && primeraCarta instanceof HTMLImageElement
    ? (primeraCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png")
    : console.log(
        "darVueltaALaCarta: No se ha encontrado el elemento id primeracarta"
      );
};

const div1 = document.getElementById("div1");
div1?.addEventListener("click", darVueltaALaCarta1);

const darVueltaALaCarta2 = (): void => {
  let segundaCarta = document.getElementById("segundacarta");
  segundaCarta && segundaCarta instanceof HTMLImageElement
    ? (segundaCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png")
    : console.log(
        "darVueltaALaCarta2: No se ha encontrado el elemento id segundacarta"
      );
};

const div2 = document.getElementById("div2");
div2?.addEventListener("click", darVueltaALaCarta2);
