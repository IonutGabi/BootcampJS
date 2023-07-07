import { validarClave } from "./main";
import { ValidacionClave } from "./modelo";

describe("validarClave", () => {
  it("deberia devolver un throw error si los parámetros que se le han pasado son undefined", () => {
    // Arrange
    const nombreUsuario: any = undefined;
    const clave: any = undefined;
    const commonPasswords: any = undefined;
    // Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros de la función no son correctos"
    );
  });

  it("deberia devolver un throw error si los parámetros que se le han pasado son null", () => {
    // Arrange
    const nombreUsuario: any = null;
    const clave: any = null;
    const commonPasswords: any = null;
    // Act
    const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros de la función no son correctos"
    );
  });

  it("deberia devolver un error si la clave no tiene mayúsculas o minúsculas", () => {
    // Arrange
    const nombreUsuario: string = "MariaRodriguez86";
    const clave: string = "12345";
    const commonPasswords: string[] = ["admin", "password", "hello", "welcome"];
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

it("deberia devolver un error si la clave no tiene números", () => {
  // Arrange
  const nombreDeUsuario: string = "MarioMartinez12";
  const commonPasswords: string[] = ["hello123", "welcome", "sunshine1"];
  const clave: string = "Usuario";
  // Assert
  const resultado = validarClave(nombreDeUsuario, clave, commonPasswords);
  // Act
  const resultadoEsperado: ValidacionClave = {
    esValida: false,
    error: "La clave debe de tener números",
  };
  expect(resultado).toEqual(resultadoEsperado);
});

it("deberia devolver un error si la clave no tiene caracteres especiales", () => {
  // Arrange
  const nombreUsuario: string = "Lucas72";
  const clave: string = "Reddit98";
  const commonPasswords: string[] = ["mypass", "trustno1", "1q2w3e4r"];
  // Act
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  // Assert
  const resultadoEsperado: ValidacionClave = {
    esValida: false,
    error: "La clave debe de tener caracteres especiales.",
  };
  expect(resultado).toEqual(resultadoEsperado);
});

it("deberia devolver un error si la clave no tiene una longitud mayor o igual a 8", () => {
  // Arrange
  const nombreUsuario: string = "Paula56";
  const clave: string = "Admin1@";
  const commonPasswords: string[] = ["qwerty", "123456", "letmein"];
  // Act
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  // Assert
  const resultadoEsperado: ValidacionClave = {
    esValida: false,
    error: "La clave debe de tener una longitud mínima de 8 caracteres",
  };
  expect(resultado).toEqual(resultadoEsperado);
});

it("deberia devolver un error si la clave contiene el nombre de usuario", () => {
  // Arrange
  const nombreUsuario: string = "Correcaminos72@";
  const clave: string = "Correcaminos72@";
  const commonPasswords: string[] = ["123456789", "baseball", "monkey"];
  // Act
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  // Assert
  const resultadoEsperado: ValidacionClave = {
    esValida: false,
    error: "La clave no debe tener el nombre del usuario.",
  };
  expect(resultado).toEqual(resultadoEsperado);
});

it("deberia devolver un error si la clave contiene palabras comunes", () => {
  // Arrange
  const nombreUsuario: string = "MariaRodriguez98";
  const clave: string = "Abc123@456";
  const commonPasswords: string[] = [
    "password",
    "iloveyou",
    "abc123",
    "password12",
    "admin",
  ];
  // Act
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  // Assert
  const resultadoEsperado: ValidacionClave = {
    esValida: false,
    error: "La clave no debe de contener palabras comunes",
  };
  expect(resultado).toEqual(resultadoEsperado);
});

it("deberia devolver el objeto con la propiedad esValida a true", () => {
  // Arrange
  const nombreUsuario: string = "MarioMartinez";
  const clave: string = "Twitter@123_?.";
  const commonPasswords: string[] = ["hello123", "1234", "hello", "hockey"];
  // Act
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  // Assert
  const resultadoEsperado: ValidacionClave = {
    esValida: true,
  };
  expect(resultado).toEqual(resultadoEsperado);
});
