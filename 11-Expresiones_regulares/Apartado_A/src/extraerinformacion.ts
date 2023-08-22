import { Validador } from "./main.model";

export const extraerDatosIban = (value: string): Validador => {
  const patron =
    /^(?<codigoPais>ES)(?<digitoControl>\d{2})(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoSucursal>\d{4})(\s|-?)\d{2}(\s|-)?(?<numeroDeCuenta>\d{10})$/gm;
  const coincidencia = patron.exec(value);
  if (coincidencia) {
    const {
      codigoPais,
      digitoControl,
      codigoBanco,
      codigoSucursal,
      numeroDeCuenta,
    } = coincidencia.groups as any;
    return {
      codigoPais,
      digitoControl,
      codigoBanco,
      codigoSucursal,
      numeroDeCuenta,
    };
  } else {
    return {
      codigoPais: "",
      digitoControl: "",
      codigoBanco: "",
      codigoSucursal: "",
      numeroDeCuenta: "",
    };
  }
};
