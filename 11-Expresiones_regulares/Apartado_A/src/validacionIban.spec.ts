import { estaBienFormadoElIban } from "./validacionIban";

describe("estaBienFormadoElIban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES21_1465_0100_72_2030876293", false],
    ["ES6621000418401234567891567", false],
    ["ES21 1465 0100 A72 2030876293", false],
  ])(
    "Debería devovlver para el IBAN %s el valor %s",
    (valor: string, expected: boolean) => {
      expect(estaBienFormadoElIban(valor)).toBe(expected);
    }
  );
});
