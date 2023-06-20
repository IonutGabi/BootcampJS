const cartas = [
  "🐭",
  "🦊",
  "🦝",
  "🐮",
  "🦊",
  "🦝",
  "🐮",
  "🐷",
  "🐭",
  "🐸",
  "🐷",
  "🐸",
];

const barajaCartas = (cartas: string[]) => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j], cartas[i]];
  }
};
console.log(barajaCartas(cartas));
