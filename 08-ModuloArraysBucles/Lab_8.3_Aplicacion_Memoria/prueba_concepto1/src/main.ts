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
  cartas.sort(() => Math.random() - 0.5);
  return cartas;
};

for (let i = 0; i < 7; i++) {
  console.log(barajaCartas(cartas));
}
