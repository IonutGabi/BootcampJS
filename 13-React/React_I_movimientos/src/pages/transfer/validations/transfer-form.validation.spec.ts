import { vi } from "vitest";
import { TransferVm } from "../transfer.vm";
import * as transferFieldValidation from "./transfer-field.validation";
import { validateForm } from "./transfer-form.validation";
import { INVALID_IBAN_MESSAGE } from "@/common/validations/validation.const";
describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Marston",
        amount: 1,
        concept: "Concept",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "johnMarston@gmail.com",
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        { succeeded: true }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert

      expect(result).toEqual({
        succeeded: true,
        errors: {
          accountId: "",
          iban: "",
          name: "",
          amount: "",
          concept: "",
          notes: "",
          dateTransfer: "",
          realDateTransfer: "",
          email: "",
        },
      });
    });

    it("Should return false when some field is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1333",
        name: "John Marston",
        amount: 1,
        concept: "Concept",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "johnMarston@gmail.com",
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: false,
        errorMessage: INVALID_IBAN_MESSAGE,
      });

      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );

      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });
      // Act
      const result = validateForm(transfer);
      // Assert
      expect(result).toEqual({
        succeeded: false,
        errors: {
          accountId: "",
          iban: INVALID_IBAN_MESSAGE,
          name: "",
          amount: "",
          concept: "",
          notes: "",
          dateTransfer: "",
          realDateTransfer: "",
          email: "",
        },
      });
    });
  });
});
