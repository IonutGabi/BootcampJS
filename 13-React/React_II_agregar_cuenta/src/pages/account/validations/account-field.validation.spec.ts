import {
  INVALID_TYPE_ACCOUNT_MESSAGE,
  INVALID_NAME_ACCOUNT_MESSAGE,
} from "@/common/validations/validation.const";
import {
  validateTypeAccountField,
  validateNameAccountField,
} from "./account-field.validation";

describe("account-field.validation specs", () => {
  describe("validateTypeAccountField", () => {
    it("Should return true when type is informed", () => {
      // Arrange
      const type = "1";
      // Act
      const result = validateTypeAccountField(type);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("Should return false when type is not informed", () => {
      // Arrange
      const type = "";
      // Act
      const result = validateTypeAccountField(type);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_TYPE_ACCOUNT_MESSAGE);
    });
  });

  describe("validateNameAccountField", () => {
    it("Should return true when name is informed", () => {
      // Arrange
      const name = "Cuenta Corriente";
      // Act
      const result = validateNameAccountField(name);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("Should return false when name is not informed", () => {
      // Arrange
      const name = "";
      // Act
      const result = validateNameAccountField(name);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_NAME_ACCOUNT_MESSAGE);
    });
  });
});
