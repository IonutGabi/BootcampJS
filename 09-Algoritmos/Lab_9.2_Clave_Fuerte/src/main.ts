import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./clave-fuerte.helpers";
import { ValidacionClave } from "./modelo";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave || !commonPasswords) {
    throw new Error("Los parámetros de la función no son correctos");
  }
  const mayusculasMinusculas = tieneMayusculasYMinusculas(clave);
  const numeros = tieneNumeros(clave);
  const caracteresEspeciales = tieneCaracteresEspeciales(clave);
  const longitudMinima = tieneLongitudMinima(clave);
  const nombreDeUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const palabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  if (!mayusculasMinusculas.esValida) {
    return mayusculasMinusculas;
  } else if (!numeros.esValida) {
    return numeros;
  } else if (!caracteresEspeciales.esValida) {
    return caracteresEspeciales;
  } else if (!longitudMinima.esValida) {
    return longitudMinima;
  } else if (!nombreDeUsuario.esValida) {
    return nombreDeUsuario;
  } else if (!palabrasComunes.esValida) {
    return palabrasComunes;
  } else {
    return {
      esValida: true,
    };
  }
};
