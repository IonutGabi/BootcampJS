
const estiloCompositor = "font-weight: bold; font-size: 18px; background-color: green;"
interface Bandamusical{
    compositor: string;
    añoFundacion: number;
    activo: boolean;
    generoMusical: string;

}
const bandaA: Bandamusical = {
    compositor: "The Beatles",
    añoFundacion: 1960,
    activo: false,
    generoMusical: "Pop Rock"

};

const bandaB: Bandamusical = {
    compositor: "Queen",
    añoFundacion: 1970,
    activo: false,
    generoMusical: "Rock"

};

const bandaC: Bandamusical = {
    compositor: "AC DC",
    añoFundacion: 1973,
    activo: true,
    generoMusical: "Hard Rock"
};

const bandaD: Bandamusical = {
    compositor: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    generoMusical: "Clásica"
};

const bandaE: Bandamusical = {
    compositor: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    generoMusical: "Rock"
};

console.log("%c %s", estiloCompositor, bandaA.compositor, bandaA.añoFundacion, bandaA.activo, bandaA.generoMusical);
console.log("%c %s", estiloCompositor, bandaB.compositor, bandaB.añoFundacion, bandaC.activo, bandaC.generoMusical);
console.log("%c %s", estiloCompositor, bandaC.compositor, bandaC.añoFundacion, bandaC.activo, bandaC.generoMusical);
console.log("%c %s", estiloCompositor, bandaD.compositor, bandaD.añoFundacion, bandaD.activo, bandaD.generoMusical);
console.log("%c %s", estiloCompositor, bandaE.compositor, bandaE.añoFundacion, bandaE.activo, bandaE.generoMusical);