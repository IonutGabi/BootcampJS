import * as apiModel from "./api/movement-list.api-model";
import * as ViewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.MovementApiModel[]
): ViewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    balance: movement.balance.toString(),
    amount: movement.amount.toString(),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    accountId: movement.accountId,
  }));

export const mapAccountListFromApiToVm = (
  accountList: apiModel.AccountApiModel
): ViewModel.AccountVm => ({
  id: accountList.id,
  iban: accountList.iban,
  name: accountList.name,
  balance: accountList.balance.toString(),
  lastTransaction: new Date(accountList.lastTransaction),
});
