import { vi } from "vitest";
import { AccountVm } from "../account.vm";
import * as accountFieldValidation from "./account-field.validation";
import { validateForm } from "./account-form.validation";
import { INVALID_NAME_ACCOUNT_MESSAGE } from "@/common/validations/validation.const";

describe("account-form.validation specs", () => {
  describe("validateForm", () => {
    it("Should return true when all fields are correct", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "Cuenta Corriente",
      };

      vi.spyOn(
        accountFieldValidation,
        "validateTypeAccountField"
      ).mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(
        accountFieldValidation,
        "validateNameAccountField"
      ).mockReturnValue({
        succeeded: true,
      });

      // Act

      const result = validateForm(account);

      // Assert
      expect(result).toEqual({
        succeeded: true,
        errors: {
          type: "",
          name: "",
        },
      });
    });

    it("Should return false when some field is incorrect", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        name: "",
      };

      vi.spyOn(
        accountFieldValidation,
        "validateTypeAccountField"
      ).mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(
        accountFieldValidation,
        "validateNameAccountField"
      ).mockReturnValue({
        succeeded: false,
        errorMessage: INVALID_NAME_ACCOUNT_MESSAGE,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result).toEqual({
        succeeded: false,
        errors: {
          type: "",
          name: INVALID_NAME_ACCOUNT_MESSAGE,
        },
      });
    });
  });
});
