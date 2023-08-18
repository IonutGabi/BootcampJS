import {
  extraerInformacionBanco,
  extraerCodigoDeBanco,
} from "./extraerinformacion";
import { estaBienFormadoElIban } from "./validacionIban";
import { validateIBAN } from "ibantools";

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const obtenerValorCampo = (campo: string): string => {
  const elementoCampo = document.querySelector(`#${campo}`);
  if (elementoCampo && elementoCampo instanceof HTMLInputElement) {
    return elementoCampo.value;
  } else {
    throw new Error(`No se ha encontrado el campo ${campo}`);
  }
};

const pillaElContenedorPrincipal = (idContenedor: string): HTMLDivElement => {
  const elementoIdContenedor = document.querySelector(`#${idContenedor}`);
  if (elementoIdContenedor && elementoIdContenedor instanceof HTMLDivElement) {
    return elementoIdContenedor;
  } else {
    throw new Error("No se ha encontrado el elemento contenedor");
  }
};

export const pintarMensajeIbanEstaBienFormado = () => {
  const contenedor = pillaElContenedorPrincipal("contenedor");
  const valorCampo = obtenerValorCampo("validar");
  const IbanBienFormado = estaBienFormadoElIban(valorCampo);
  if (IbanBienFormado) {
    const parrafo = crearElementoParrafo("El IBAN está bien formado");
    contenedor.appendChild(parrafo);
  }
};

export const pintarMensajeIbanEsValido = () => {
  const contenedor = pillaElContenedorPrincipal("contenedor");
  const valorCampo = obtenerValorCampo("validar");
  const ibanValido = validateIBAN(valorCampo);
  if (ibanValido) {
    const parrafo = crearElementoParrafo("El IBAN es válido");
    contenedor.appendChild(parrafo);
  }
};

export const pintarInformacionBanco = () => {
  const contenedor = pillaElContenedorPrincipal("contenedor");
  const valorCampo = obtenerValorCampo("validar");
  const informacionExtraida = extraerInformacionBanco(valorCampo);
  const codigoBanco = extraerCodigoDeBanco(valorCampo);
  const codigoSucursal = crearElementoParrafo(
    `Código de sucursal: ${informacionExtraida.codigoSucursal}`
  );
  const digitoDeControl = crearElementoParrafo(
    `Digito de control: ${informacionExtraida.digitoDeControl}`
  );
  const numeroDeCuenta = crearElementoParrafo(
    `Número de cuenta: ${informacionExtraida.numeroDeCuenta}`
  );
  const nombreDelBanco = crearElementoParrafo(`Banco: ${codigoBanco}`);
  contenedor.appendChild(nombreDelBanco);
  contenedor.appendChild(codigoSucursal);
  contenedor.appendChild(digitoDeControl);
  contenedor.appendChild(numeroDeCuenta);
};
