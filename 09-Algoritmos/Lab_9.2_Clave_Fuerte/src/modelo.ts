export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const ValidacionCorrecta = (): ValidacionClave => {
  return {
    esValida: true,
  };
};

export const validacionErronea = (mensaje: string): ValidacionClave => {
  return {
    esValida: false,
    error: mensaje,
  };
};
