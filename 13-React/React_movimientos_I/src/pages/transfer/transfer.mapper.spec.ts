import * as apiModel from "./api";
import * as viewModel from "./transfer.vm";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";

describe("pages/transfer/api/transfer.mapper tests", () => {
  describe("mapAccountFromApiToVm", () => {
    it("should return empty object when it feeds empty object", () => {
      // Arrange
      const account: apiModel.Account = {
        id: "",
        iban: "",
        name: "",
        type: "",
        balance: 0,
        lastTransaction: "",
      };
      // Act
      const result = mapAccountFromApiToVm(account);
      // Assert
      expect(result).toEqual({
        id: "",
        alias: "",
        iban: "",
      });
    });

    it("Should return the same object, but using VM model structure", () => {
      // Arrange
      const account: apiModel.Account = {
        id: "1",
        iban: "ES9121000418450200051332",
        type: "1",
        name: "Gastos mes",
        balance: 1490,
        lastTransaction: "2019-12-09T21:30:00",
      };
      // Act
      const result = mapAccountFromApiToVm(account);
      // Assert
      expect(result).toEqual({
        id: "1",
        alias: "Gastos mes",
        iban: "ES9121000418450200051332",
      });
    });
  });

  describe("mapTransferFromVmToApi", () => {
    it("Should return empty object when it feeds empty object", () => {
      // Arrange
      const transfer: viewModel.TransferVm = {
        accountId: "",
        iban: "",
        name: "",
        amount: 0,
        concept: "",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "",
      };
      // Act
      const result = mapTransferFromVmToApi(transfer);
      // Assert
      expect(result).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: 0,
        concept: "",
        notes: "",
        transferDate: new Date().toDateString(),
        realTransferDate: "",
      });
    });
    it("Should return the same object but using API structure", () => {
      // Arrange
      const transfer: viewModel.TransferVm = {
        accountId: "1",
        iban: "ES9121000418450200051332",
        name: "Gastos mes",
        amount: 200,
        concept: "concepto",
        notes: "observaciones",
        dateTransfer: new Date().toDateString(),
        realDateTransfer: new Date(),
        email: "johndoe@gmail.com",
      };
      // Act

      const result = mapTransferFromVmToApi(transfer);

      // Assert
      expect(result).toEqual({
        accountId: "1",
        iban: "ES9121000418450200051332",
        name: "Gastos mes",
        amount: 200,
        concept: "concepto",
        notes: "observaciones",
        transferDate: new Date().toDateString(),
        realTransferDate: new Date().toDateString(),
      });
    });
  });
});
