import * as apiModel from "./api/account-list.api-model";
import * as ViewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.AccountApiModel[]
): ViewModel.AccountVm[] =>
  accountList.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));
