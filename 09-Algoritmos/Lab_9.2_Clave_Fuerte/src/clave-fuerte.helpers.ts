import {
  ValidacionClave,
  ValidacionCorrecta,
  validacionErronea,
} from "./modelo";

import {
  listaLetrasMayusculas,
  listaLetrasMinusculas,
  numeros,
  caracteresEspeciales,
  commonPasswords,
} from "./clave-fuerte.constantes";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  }
  return tieneLetrasMayusculas(clave) && tieneLetrasMinusculas(clave)
    ? ValidacionCorrecta()
    : validacionErronea("La clave debe de tener mayúsculas y minúsculas");
};
export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  }
  return compruebaSiTieneNumeros(clave, numeros)
    ? ValidacionCorrecta()
    : validacionErronea("La clave debe de tener números");
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  }
  return compruebaSiTieneCaracteresEspeciales(clave)
    ? ValidacionCorrecta()
    : validacionErronea("La clave debe de tener caracteres especiales.");
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  }
  return clave.length >= 8
    ? ValidacionCorrecta()
    : validacionErronea(
        "La clave debe de tener una longitud mínima de 8 caracteres"
      );
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!nombreUsuario || !clave) {
    throw new Error(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  }
  return compruebaSiTieneNombreUsuarioEnLaPassword(nombreUsuario, clave)
    ? validacionErronea("La clave no debe tener el nombre del usuario.")
    : ValidacionCorrecta();
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !commonPasswords) {
    throw new Error(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  }
  return compruebaSiTienePalabrasComunes(clave)
    ? validacionErronea("La clave no debe de contener palabras comunes")
    : ValidacionCorrecta();
};
const tieneLetrasMayusculas = (clave: string): boolean => {
  return listaLetrasMayusculas.some((letra: string) => clave.includes(letra));
};
const tieneLetrasMinusculas = (clave: string): boolean => {
  return listaLetrasMinusculas.some((letra: string) => clave.includes(letra));
};

const transformarNumerosAString = (numeros: number[]): string[] => {
  return numeros.map((numero) => numero.toString());
};

const compruebaSiTieneNumeros = (clave: string, numeros: number[]): boolean => {
  return transformarNumerosAString(numeros).some((numero) =>
    clave.includes(numero)
  );
};

const compruebaSiTieneCaracteresEspeciales = (clave: string): boolean => {
  return caracteresEspeciales.some((caracter) => clave.includes(caracter));
};

const compruebaSiTieneNombreUsuarioEnLaPassword = (
  nombreUsuario: string,
  clave: string
): boolean => {
  return clave.includes(nombreUsuario);
};

const compruebaSiTienePalabrasComunes = (clave: string): boolean => {
  const claveTransformada = transformarClaveAMinuscula(clave);
  return commonPasswords.some((password) =>
    claveTransformada.includes(password)
  );
};

const transformarClaveAMinuscula = (clave: string): string => {
  return clave.toLowerCase();
};
