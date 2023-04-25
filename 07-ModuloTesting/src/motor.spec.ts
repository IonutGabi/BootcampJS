import { it, vi } from "vitest";
import { EstadoPartida, partida } from "./model";
import {
  obtenerEstadoPartida,
  generarNumeroAleatorioDeCarta,
  sumarPuntuacion,
} from "./motor";

describe("obtenerEstadoPartida", () => {
  it("Deberia devolver JUSTO_MAXIMO cuando puntuacion es igual a puntosTotales", () => {
    // Arrage
    const estadoEsperado: EstadoPartida = "JUSTO_MAXIMA";
    vi.spyOn(partida, "estado", "get").mockReturnValue("JUSTO_MAXIMA");

    // Act
    const resultado = obtenerEstadoPartida();

    // Asset
    expect(resultado).toBe(estadoEsperado);
  });

  it("Deberia devolver TE_HAS_PASADO cuando puntuacion sea mayor que puntosTotales", () => {
    // Arrange
    const estadoEsperado = "TE_HAS_PASADO";
    vi.spyOn(partida, "estado", "get").mockReturnValue("TE_HAS_PASADO");

    // Act
    const resultado = obtenerEstadoPartida();

    // Asset

    expect(resultado).toBe(estadoEsperado);
  });
});

describe("generarNumeroAleatorioDeCarta", () => {
  it("Al ser el valor esperado un 0 deberia sumar el valor de la carta", () => {
    // Arrange

    const resultadoEsperado = 0;
    vi.spyOn(global.Math, "random").mockReturnValue(0);

    // Act

    const resultado = generarNumeroAleatorioDeCarta();

    // Assets
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al ser el valor esperado un 2 deberia de sumar el valor de la carta", () => {
    // Arrange

    const resultadoEsperado = 2;

    vi.spyOn(global.Math, "random").mockReturnValue(0.2);

    // Act

    const resultado = generarNumeroAleatorioDeCarta();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al ser el valor esperado un 7 deberia de sumar el valor de la carta", () => {
    // Arrange

    const resultadoEsperado = 7;

    vi.spyOn(global.Math, "random").mockReturnValue(0.7);

    // Act

    const resultado = generarNumeroAleatorioDeCarta();

    // Asset

    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al ser el valor esperado un 10 deberia sumarle 2", () => {
    // Arrange

    const resultadoEsperado = 10;

    vi.spyOn(global.Math, "random").mockReturnValue(0.8);

    // Act

    const resultado = generarNumeroAleatorioDeCarta();

    // Assets

    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al ser el valor esperado un 12 deberia sumarle 2", () => {
    // Arrange

    const resultadoEsperado = 12;

    vi.spyOn(global.Math, "random").mockReturnValue(0.9999);

    // Act

    const resultado = generarNumeroAleatorioDeCarta();

    // Asset

    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("sumarPuntuacion", () => {
  it("Debería sumar el punto entero de la carta al ser menor que 10", () => {
    // Arrange

    const resultadoEsperado = 12;
    const carta = 6;

    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(6);

    // Act

    const resultado = sumarPuntuacion(carta);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Debería sumar medio punto al ser mayor que 10", () => {
    // Arrange
    const resultadoEsperado = 4.5;

    const carta = 11;

    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(4);

    // Act

    const resultado = sumarPuntuacion(carta);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });

  it("Deberia sumar medio punto al ser igual a 10", () => {
    // Arrange

    const resultadoEsperado = 7.5;

    const carta = 10;

    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7);

    // Act

    const resultado = sumarPuntuacion(carta);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
});
