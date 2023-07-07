import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave-fuerte.helpers";
import { ValidacionClave } from "./modelo";

describe("tieneMayusculasYMinusculas", () => {
  it("deberia devolver un throw error si la cadena es undefined", () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });
  it("deberia devolver un throw error si la cadena es null", () => {
    // Arrange
    const clave: any = null;
    // Act
    const resultado = () => tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });

  it("debería devolver el objeto con el error, si la clave no tiene mayúsculas y minúsculas", () => {
    // Arrange
    const clave: string = "1234";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "PepitoGrillo";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con el error si la clave tiene minúsculas pero no tiene mayúsculas", () => {
    // Arrange
    const clave: string = "usuario";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneNumeros", () => {
  it("deberia devolver un throw error si la cadena es undefined", () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const resultado = () => tieneNumeros(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });

  it("deberia devolver un throw error si la cadena es undefined", () => {
    // Arrange
    const clave: any = null;
    // Act
    const resultado = () => tieneNumeros(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });

  it("deberia devolver el objeto con el error si la clave no tiene ningún número", () => {
    // Arrange
    const clave: string = "usuario";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("debería devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "correcaminos7";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "correcaminos84";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("deberia devolver un throw error si la cadena es undefined", () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });
  it("deberia devolver un throw error si la cadena es null", () => {
    // Arrange
    const clave: any = null;
    // Act
    const resultado = () => tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });
  it("deberia devolver el objeto con el error si la clave no tiene ningún caracter especial", () => {
    // Arrange
    const clave: string = "Contrasena12";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales.",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "Contrasena@12";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "Contrasena@123._!";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("deberia devolver un throw error si la cadena es undefined", () => {
    // Arrange
    const clave: any = undefined;
    // Act
    const resultado = () => tieneLongitudMinima(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });

  it("deberia devolver un throw error si la cadena es null", () => {
    // Arrange
    const clave: any = null;
    // Act
    const resultado = () => tieneLongitudMinima(clave);
    // Assert
    expect(resultado).toThrowError(
      "El parámetro que se le ha pasado a la función no es correcto"
    );
  });

  it("deberia devolver el objeto con el error si la clave no tiene una longitud miníma de 8 carácteres", () => {
    // Arrange
    const clave: string = "usuario";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "usuario1";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const clave: string = "VivaElCorrecaminos12@!";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {
  it("deberia devolver un throw error si la cadena es undefiened", () => {
    // Arrange
    const nombreUsuario: any = undefined;
    const clave: any = undefined;
    // Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  });

  it("deberia devolver un throw error si la cadena es null", () => {
    // Arrange
    const nombreUsuario: any = null;
    const clave: any = null;
    // Act
    const resultado = () => tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  });
  it("deberia devolver el objeto con el error si la clave es el nombre de usuario", () => {
    // Arrange
    const nombreUsuario: string = "Pepe72";
    const clave: string = "Pepe72";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario.",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const nombreUsuario: string = "MariaRodriguez14";
    const clave: string = "Face@Book!342?";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("tienePalabrasComunes", () => {
  it("deberia devolver un throw error si los parámetros son undefined", () => {
    // Arrange
    const clave: any = undefined;
    const commonPasswords: any = undefined;
    // Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  });

  it("deberia devolver un throw error si los parámetros son null", () => {
    // Arrange
    const clave: any = null;
    const commonPasswords: any = null;
    // Act
    const resultado = () => tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros que se le han pasado a la función no son correctos"
    );
  });

  it("deberia devolver el objeto con el error si la clave contiene palabras comunes", () => {
    // Arrange
    const commonPasswords: string[] = ["password", "qwerty", "admin"];
    const clave: string = "password";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("deberia devolver el objeto con el error si la clave contiene palabras comunes", () => {
    // Arrange
    const commonPasswords: string[] = [
      "football",
      "welcome",
      "abc123",
      "iloveyou",
    ];
    const clave: string = "iloveyou";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver el objeto con la propiedad esValida a true", () => {
    // Arrange
    const commonPasswords: string[] = ["password", "password12", "welcome"];
    const clave: string = "Face@Book12!?";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});
