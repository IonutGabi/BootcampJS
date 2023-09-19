import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import {
  validateUserField,
  validatePasswordField,
} from "./login-field.validation";

describe("login-field.validation specs", () => {
  describe("validateUserField", () => {
    it("Should return true when user is informed", () => {
      // Arrange
      const user = "johnmarston@gmail.com";
      // Act
      const result = validateUserField(user);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("Should return false when user is not informed", () => {
      // Arrange
      const user = "";
      // Act
      const result = validateUserField(user);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validatePasswordField", () => {
    it("Should return true when password is informed", () => {
      // Arrange
      const password = "test";
      // Act
      const result = validatePasswordField(password);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("Should return false when password is not informed", () => {
      // Arrange
      const password = "";
      // Act
      const result = validatePasswordField(password);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });
});
