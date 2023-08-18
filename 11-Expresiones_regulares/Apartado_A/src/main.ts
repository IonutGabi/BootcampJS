import { estaBienFormadoElIban } from "./validacionIban";
import {
  crearElementoParrafo,
  extraerInformacionBanco,
  obtenerValorCampo,
  extraerCodigoDeBanco,
} from "./main.helpers";
import { validateIBAN } from "ibantools";

const pintarInformacion = (evento: Event): void => {
  evento.preventDefault();
  const contenedor = document.querySelector("#contenedor");
  const valorCampo = obtenerValorCampo("validar");
  const ibanBienFormado = estaBienFormadoElIban(valorCampo);
  const ibanValido = validateIBAN(valorCampo);
  const informacionExtraida = extraerInformacionBanco(valorCampo);
  const codigoBanco = extraerCodigoDeBanco(valorCampo);
  if (contenedor && contenedor instanceof HTMLDivElement) {
    if (ibanBienFormado && ibanValido) {
      const mensajeIbanBienFormado = crearElementoParrafo(
        "El IBAN esta bien formado"
      );
      const mensajeIbanValido = crearElementoParrafo("El IBAN es válido");
      contenedor.appendChild(mensajeIbanBienFormado);
      contenedor.appendChild(mensajeIbanValido);
      const codigoSucursal = crearElementoParrafo(
        `Código de sucursal: ${informacionExtraida.codigoSucursal}`
      );
      const digitoDeControl = crearElementoParrafo(
        `Dígito de control: ${informacionExtraida.digitoDeControl}`
      );
      const numeroDeCuenta = crearElementoParrafo(
        `Número de cuenta: ${informacionExtraida.numeroDeCuenta}`
      );
      const banco = crearElementoParrafo(`Banco: ${codigoBanco}`);
      contenedor.appendChild(banco);
      contenedor.appendChild(codigoSucursal);
      contenedor.appendChild(digitoDeControl);
      contenedor.appendChild(numeroDeCuenta);

      setTimeout(() => {
        contenedor.removeChild(mensajeIbanBienFormado);
        contenedor.removeChild(mensajeIbanValido);
        contenedor.removeChild(banco);
        contenedor.removeChild(codigoSucursal);
        contenedor.removeChild(digitoDeControl);
        contenedor.removeChild(numeroDeCuenta);
      }, 3000);
    }
  } else {
    throw new Error("No se ha encontrado el elemento contenedor");
  }
};
const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", (evento) => pintarInformacion(evento));
}
