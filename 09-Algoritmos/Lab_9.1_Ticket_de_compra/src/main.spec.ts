import { calculaTicket } from "./main";
import { LineaTicket, TicketFinal } from "./modelo";

describe("calculaTicket", () => {
  it("Debería devolver un throw si la salida de datos es undefined", () => {
    // Arrange
    const lineasTicket: any = undefined;
    // Act
    const resultado = () => calculaTicket(lineasTicket);
    // Assert
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("Debería devolver un throw si la salida de datos es null", () => {
    // Arrange
    const lineasTicket: any = null;
    // Act
    const resultado = () => calculaTicket(lineasTicket);
    // Assert
    expect(resultado).toThrowError("Los parámetros de salida no son correctos");
  });

  it("debería devolver un array con toda la información del ticket", () => {
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
    const resultado = calculaTicket(lineasTicket);
    // Assert

    const resultadoEsperado: TicketFinal[] = [
      {
        lineas: [
          {
            nombre: "Legumbres",
            cantidad: 2,
            precioSinIva: 4,
            tipoIva: "general",
            precioConIva: 4.84,
          },
        ],
        total: {
          totalSinIva: 4,
          totalConIva: 4.84,
          totalIva: 0.84,
        },
        desgloseIva: [
          {
            tipoIva: "general",
            cuantia: 21,
          },
        ],
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });

  it("deberia devolver un array con toda la información del ticket", () => {
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
    const resultado = calculaTicket(lineasTicket);
    // Assert
    const resultadoEsperado: TicketFinal[] = [
      {
        lineas: [
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
        ],
        total: {
          totalSinIva: 11,
          totalConIva: 11.55,
          totalIva: 0.55,
        },
        desgloseIva: [
          {
            tipoIva: "superreducidoC",
            cuantia: 0,
          },
          {
            tipoIva: "superreducidoA",
            cuantia: 5,
          },
        ],
      },
    ];
    expect(resultado).toEqual(resultadoEsperado);
  });
});
