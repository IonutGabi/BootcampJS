import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromVmToApi = (
  account: viewModel.AccountVm
): apiModel.AccountApiModel => ({
  type: account.type,
  name: account.name,
});
