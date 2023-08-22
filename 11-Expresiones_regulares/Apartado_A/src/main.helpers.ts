import { extraerDatosIban } from "./extraerinformacion";
import { estaBienFormadoElIban } from "./validacionIban";
import { isValidIBAN } from "ibantools";

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

export const esValidoElIban = (iban: string): boolean => {
  const esValido = isValidIBAN(iban);
  console.log(esValido);
  return esValido;
};

export const mostrarDatosIban = (iban: string) => {
  const esValido = esValidoElIban(iban);
  esValido ? ibanValido(iban) : ibanNoValido(iban);
};

const obtenerCodigodelBanco = (codigoBanco: string): string => {
  switch (codigoBanco) {
    case "2080":
      return "Abanca Corporación Bancaria";
    case "0061":
      return "Banca March";
    case "0188":
      return "Banco Alcalá";
    case "0182":
      return "Banco Bilbao Vizcaya Argentaria";
    case "0130":
      return "Banco Caixa Geral";
    case "0234":
      return "Banco Caminos";
    case "2105":
      return "Banco Castilla-La Mancha";
    case "0240":
      return "Banco de Crédito Social Cooperativo";
    case "0081":
      return "Banco de Sabadell";
    case "0487":
      return "Banco Mare Nostrum";
    case "0186":
      return "Banco Mediolanum";
    case "0238":
      return "Banco Pastor";
    case "0075":
      return "Banco Popular Español";
    case "0049":
      return "Banco Santander";
    case "3873":
      return "Banco Santander Totta";
    case "2038":
      return "Bankia";
    case "0128":
      return "Bankinter";
    case "0138":
      return "Bankoa";
    case "0152":
      return "Barclays Bank PLC";
    case "3842":
      return "BNP Paribas Paris";
    case "3025":
      return "Caixa de Credit del Enginyers";
    case "2100":
      return "Caixabank";
    case "2045":
      return "Caja de Ahorros y Monte de Piedad de Ontinyent";
    case "3035":
      return "Caja Laboral Popular CC";
    case "3081":
      return "Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural";
    case "2000":
      return "Cecabank";
    case "1474":
      return "Citibank Europe PLC";
    case "3821":
      return "Commerzbank AG";
    case "3877":
      return "Danske Bank A/S";
    case "0019":
      return "Deutsche Bank SAE";
    case "0239":
      return "EVO Banco";
    case "2085":
      return "Ibercaja Banco";
    case "1465":
      return "ING Bank NV";
    case "2095":
      return "Kutxabank";
    case "2048":
      return "Liberbank";
    case "0131":
      return "Novo Banco";
    case "0073":
      return "Open Bank";
    case "0108":
      return "Société Générale";
    case "2103":
      return "Unicaja Banco";
    default:
      return "El código de banco especificado no existe en la tabla";
  }
};

const ibanValido = (iban: string) => {
  const contenedor = document.querySelector("#informacion");
  const ibanBienFormado = estaBienFormadoElIban(iban);
  const datosExtraidosDelIban = extraerDatosIban(iban);
  const codigoBanco = obtenerCodigodelBanco(datosExtraidosDelIban.codigoBanco);
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.textContent = "";
    if (ibanBienFormado) {
      const mensajeIbanEstaBienFormado = crearElementoParrafo(
        "El IBAN está bien formado"
      );
      const mensajeIbanValido = crearElementoParrafo("El IBAN es válido");
      const digitoControl = crearElementoParrafo(
        `Digito de control: ${datosExtraidosDelIban.digitoControl}`
      );
      const codigoSucursal = crearElementoParrafo(
        `Código de sucursal: ${datosExtraidosDelIban.codigoSucursal}`
      );
      const numeroDeCuenta = crearElementoParrafo(
        `Número de cuenta: ${datosExtraidosDelIban.numeroDeCuenta}`
      );
      const banco = crearElementoParrafo(`Banco: ${codigoBanco}`);

      contenedor.appendChild(mensajeIbanEstaBienFormado);
      contenedor.appendChild(mensajeIbanValido);
      contenedor.appendChild(banco);
      contenedor.appendChild(codigoSucursal);
      contenedor.appendChild(digitoControl);
      contenedor.appendChild(numeroDeCuenta);
    }
  } else {
    throw new Error("No se ha encontrado el elemento informacion");
  }
};

const ibanNoValido = (iban: string) => {
  const contenedor = document.querySelector("#informacion");
  const ibanBienFormado = estaBienFormadoElIban(iban);
  if (contenedor && contenedor instanceof HTMLDivElement) {
    contenedor.textContent = "";
    if (!ibanBienFormado) {
      const mensajeIbanNoEstaBienFormado = crearElementoParrafo(
        "El IBAN no está bien formado"
      );
      const mensajeIbanNoValido = crearElementoParrafo("El IBAN no es válido");
      contenedor.appendChild(mensajeIbanNoEstaBienFormado);
      contenedor.appendChild(mensajeIbanNoValido);
    }
  } else {
    throw new Error("No se encontrado el elemento informacion");
  }
};
