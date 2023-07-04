import { LineaTicket } from "./ticket-compra.constantes";
import { calculaSubTotal as calculaSubTotal } from "./ticket-compra.helpers";

describe("calculaSubTotal", () => {
  it("debería devolver un throw error si la entrada es undefined", () => {
    // Arrange
    const lineasTicket: any = undefined;

    // Act
    const resultado = () => calculaSubTotal(lineasTicket);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros de entrada no son correctos"
    );
  });
  it("debería devolver un throw error si la entrada es null", () => {
    // Arrange
    const lineasTicket: any = null;
    // Act
    const resultado = () => calculaSubTotal(lineasTicket);
    // Assert
    expect(resultado).toThrowError(
      "Los parámetros de entrada no son correctos"
    );
  });
  it("debería devolver un 4", () => {
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

    const resultado = calculaSubTotal(lineasTicket);

    // Assert
    expect(resultado).toBe(4);
  });

  it("deberia devolver un 66", () => {
    // Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
    ];
    // Act
    const resultado = calculaSubTotal(lineasTicket);

    // Assert
    expect(resultado).toBe(66);
  });
});
