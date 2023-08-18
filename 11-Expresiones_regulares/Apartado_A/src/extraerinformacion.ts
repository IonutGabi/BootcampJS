import { InformacionDelPatron } from "./main.model";

export const extraerInformacionBanco = (
  value: string
): InformacionDelPatron => {
  const patron =
    /^ES\d{2}(\s|-)?\d{4}(\s|-)?(?<codigoSucursal>\d{4}(\s|-)?)(?<digitoDeControl>\d{2}(\s|-)?)(?<numeroDeCuenta>\d{10})$/gm;

  const coincidencia = patron.exec(value);
  if (coincidencia) {
    const { codigoSucursal, digitoDeControl, numeroDeCuenta } =
      coincidencia.groups as any;
    const codigoSucursalLimpio = codigoSucursal.replace("-", "");
    const digitoDeControlLimpio = digitoDeControl.replace("-", "");
    return {
      codigoSucursal: codigoSucursalLimpio,
      digitoDeControl: digitoDeControlLimpio,
      numeroDeCuenta: numeroDeCuenta,
    };
  } else {
    throw new Error("No se ha econtrado la variable coincidencia");
  }
};
export const extraerCodigoDeBanco = (value: string): string => {
  const patron =
    /^ES\d{2}(\s|-)?(?<codigoDeBanco>\d{4}(\s|-)?)\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/gm;

  const coincidencia = patron.exec(value);
  const { codigoDeBanco } = coincidencia?.groups as any;

  switch (codigoDeBanco) {
    case "2080":
    case "2080 ":
    case "2080-":
      return "Abanca Corporación Bancaria";
    case "0061":
    case "0061 ":
    case "0061-":
      return "Banco Alcalá";
    case "0182":
    case "0182 ":
    case "0182-":
      return "Banco Bilbao Vizcaya Argentaria";
    case "0130":
    case "0130 ":
    case "0130-":
      return "Banco Caixa Geral";
    case "0234":
    case "0234 ":
    case "0234-":
      return "Banco Caminos";
    case "2105":
    case "2105 ":
    case "2105-":
      return "Banco Castilla-La Mancha";
    case "0240":
    case "0240 ":
    case "0240-":
      return "Banco de Crédito Social Cooperativo";
    case "0081":
    case "0081 ":
    case "0081-":
      return "Banco de Sabadell";
    case "0487":
    case "0487 ":
    case "0487-":
      return "Banco Mare Nostrum";
    case "0186":
    case "0186 ":
    case "0186-":
      return "Banco Mediolanum";
    case "0238":
    case "0238 ":
    case "0238-":
      return "Banco Pastor";
    case "0075":
    case "0075 ":
    case "0075-":
      return "Banco Popular Español";
    case "0049":
    case "0049 ":
    case "0049-":
      return "Banco Santander";
    case "3873":
    case "3873 ":
    case "3873-":
      return "Banco Santander Totta";
    case "2038":
    case "2038 ":
    case "2038-":
      return "Bankia";
    case "0128":
    case "0128 ":
    case "0128-":
      return "Bankinter";
    case "0138":
    case "0138 ":
    case "0138-":
      return "Bankoa";
    case "0152":
    case "0152 ":
    case "0152-":
      return "Barclays Bank PLC";
    case "3842":
    case "3842 ":
    case "3842-":
      return "BNP Paribas Paris";
    case "3025":
    case "3025 ":
    case "3025-":
      return "Caixa de Credit del Enginyers";
    case "2100":
    case "2100 ":
    case "2100-":
      return "Caixabank";
    case "2045":
    case "2045 ":
    case "2045-":
      return "Caja de Ahorros y Monte de Piedad de Ontinyent";
    case "3035":
    case "3035 ":
    case "3035-":
      return "Caja Laboral Popular CC";
    case "3081":
    case "3081 ":
    case "3081-":
      return "Caja Rural Castilla-La Mancha";
    case "3058":
    case "3058 ":
    case "3058-":
      return "Cajamar Caja Rural";
    case "2000":
    case "2000 ":
    case "2000-":
      return "Cecabank";
    case "1474":
    case "1474 ":
    case "1474-":
      return "Citibank Europe PLC";
    case "3821":
    case "3821 ":
    case "3821-":
      return "Commerzbank AG";
    case "3877":
    case "3877 ":
    case "3877-":
      return "Danske Bank A/S";
    case "0019":
    case "0019 ":
    case "0019-":
      return "Deutsche Bank SAE";
    case "0239":
    case "0239 ":
    case "0239-":
      return "EVO Banco";
    case "2085":
    case "2085 ":
    case "2085-":
      return "Ibercaja Banco";
    case "1465":
    case "1465 ":
    case "1465-":
      return "ING Bank NV";
    case "2095":
    case "2095 ":
    case "2095-":
      return "Kutxabank";
    case "2048":
    case "2048 ":
    case "2048-":
      return "Liberbank";
    case "0131":
    case "0131 ":
    case "0131-":
      return "Novo Banco";
    case "0073":
    case "0073 ":
    case "0073-":
      return "Open Bank";
    case "0108":
    case "0108 ":
    case "0108-":
      return "Société Générale";
    case "2103":
    case "2103 ":
    case "2103-":
      return "Unicaja Banco";
    default:
      throw new Error("Código de banco no encontrado");
  }
};
