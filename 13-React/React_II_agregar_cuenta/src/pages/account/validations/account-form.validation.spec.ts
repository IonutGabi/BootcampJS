import { vi } from "vitest";
import { AccountVm } from "../account.vm";
import * as accountFieldValidation from "./account-field.validation";
import { validateForm } from "./account-form.validation";

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
        "validateTypeAccountField"
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
  });
});
