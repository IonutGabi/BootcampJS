import {
  LineaTicket,
  ResultadoTotalTicket,
  ResultadoLineaTicket,
  totalPorTipoIva,
} from "./modelo";
import {
  calculaTotalDelProducto,
  resultadoTicket,
  desgloseIva,
} from "./ticket-compra.helpers";

describe("calculaTotalDelProducto", () => {
  it("deberia devolver un throw error si la salida de datos es undefined", () => {
    // Arrange
    const lineasTicket: any = undefined;
    // Act

    const resultado = () => calculaTotalDelProducto(lineasTicket);

    // Assert

    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("deberia devolver un throw error si la salida de datos es null", () => {
    // Arrange
    const lineasTicket: any = null;
    // Act

    const resultado = () => calculaTotalDelProducto(lineasTicket);

    // Assert

    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("deberia devolver un array con los totales de un solo producto", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
    ];
    // Act
    const resultado = calculaTotalDelProducto(lineasTicket);
    // Assert
    const resultadoEsperado: ResultadoTotalTicket = {
      totalConIva: 4.84,
      totalIva: 0.84,
      totalSinIva: 4,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("deberia devovler el array con los totales de dos productos", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];
    // Act
    const resultado = calculaTotalDelProducto(lineasTicket);

    // Assert
    const resultadoEsperado: ResultadoTotalTicket = {
      totalConIva: 11.55,
      totalIva: 0.55,
      totalSinIva: 11,
    };
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("resultadoTicket", () => {
  it("deberia devolver un throw error si la salida de datos es undefiened", () => {
    // Arrange
    const lineasTicket: any = undefined;
    // Act
    const resultado = () => resultadoTicket(lineasTicket);
    // Assert
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });
  it("deberia devolver un throw error si la salida de datos es null", () => {
    // Arrange
    const lineasTicket: any = null;
    // Act
    const resultado = () => resultadoTicket(lineasTicket);
    // Assert
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("deberia devolver un array con la información completa del ticket de un solo producto", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
    ];
    // Act
    const resultado = resultadoTicket(lineasTicket);
    // Assert
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
  it("deberia devolver un array con la información completa del ticket con dos productos comprados", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];
    // Act

    const resultado = resultadoTicket(lineasTicket);

    // Assert
    const resultadoEsperado: ResultadoLineaTicket[] = [
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 11,
        tipoIva: "superreducidoC",
        precioConIva: 11.55,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 11,
        tipoIva: "superreducidoA",
        precioConIva: 11.55,
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
});

describe("desgloseIva", () => {
  it("deberia devolver un throw error si la salida es undefined", () => {
    // Arrange
    const lineasTicket: any = undefined;
    // Assert
    const resultado = () => desgloseIva(lineasTicket);
    // Act
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });
  it("deberia devolver un throw error si la salida es null", () => {
    // Arrange
    const lineasTicket: any = null;
    // Act
    const resultado = () => desgloseIva(lineasTicket);
    // Assert
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("deberia devolver el total por iva del ticket", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];
    // Act
    const resultado = desgloseIva(lineasTicket);
    // Assert
    const resultadoEsperado: totalPorTipoIva[] = [
      {
        tipoIva: "general",
        cuantia: 21,
      },
      {
        tipoIva: "superreducidoA",
        cuantia: 5,
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
});
