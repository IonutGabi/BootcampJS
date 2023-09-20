import * as viewModel from "./account.vm";
import { mapAccountFromVmToApi } from "./account.mapper";

describe("pages/account/account.mapper tests", () => {
  describe("mapAccountFromApiToVm", () => {
    it("Should return empty object when it feeds empty object", () => {
      // Arrange
      const account: viewModel.AccountVm = {
        type: "",
        name: "",
      };
      // Act
      const result = mapAccountFromVmToApi(account);
      // Assert
      expect(result).toEqual({
        type: "",
        name: "",
      });
    });

    it("Should return the same object but using VM model structure", () => {
      // Arrange
      const account: viewModel.AccountVm = {
        type: "1",
        name: "empresa",
      };
      // Act
      const result = mapAccountFromVmToApi(account);
      // Assert
      expect(result).toEqual({
        type: "1",
        name: "empresa",
      });
    });
  });
});
