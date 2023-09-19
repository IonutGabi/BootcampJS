import * as apiModel from "./api";
import {
  mapMovementListFromApiToVm,
  mapAccountListFromApiToVm,
} from "./movement-list.mapper";

describe("pages/movement-list/api/movement-list.mapper tests", () => {
  describe("mapMovementListFromApiToVm", () => {
    it("Should return empty array when it feeds empty array", () => {
      // Arrange
      const movementList: apiModel.MovementApiModel[] = [];
      // Act
      const result = mapMovementListFromApiToVm(movementList);
      // Assert

      expect(result).toEqual([]);
    });

    it("Should return the same array, but using VM model structure", () => {
      // Arrange
      const movementList: apiModel.MovementApiModel[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-07T11:30:00",
          accountId: "1",
        },
      ];

      // Act

      const result = mapMovementListFromApiToVm(movementList);

      // Assert

      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: "900",
          balance: "1490",
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          accountId: "1",
        },

        {
          id: "2",
          description: "Alquiler noviembre",
          amount: "-400",
          balance: "590",
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-07T11:30:00"),
          accountId: "1",
        },
      ]);
    });
  });

  describe("mapAccountListFromApiToVm", () => {
    it("Should return empty array when it feeds empty array", () => {
      // Arrange
      const accountList: apiModel.AccountApiModel = {
        id: "",
        iban: "",
        type: "",
        name: "",
        balance: 0,
        lastTransaction: "",
      };
      // Act
      const result = mapAccountListFromApiToVm(accountList);
      // Assert
      expect(result).toEqual({
        id: "",
        iban: "",
        name: "",
        balance: "0",
        lastTransaction: new Date(""),
      });
    });

    it("Should return the same array, but using VM model structure", () => {
      // Arrange
      const accountList: apiModel.AccountApiModel = {
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };
      // Act

      const result = mapAccountListFromApiToVm(accountList);

      // Assert

      expect(result).toEqual({
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Gastos mes",
        balance: "1490",
        lastTransaction: new Date("2019-12-09T21:30:00"),
      });
    });
  });
});
