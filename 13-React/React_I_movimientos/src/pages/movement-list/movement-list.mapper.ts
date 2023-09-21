import * as apiModel from "./api/movement-list.api-model";
import * as ViewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.MovementApiModel[]
): ViewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    balance: `${movement.balance}`,
    amount: `${movement.amount}`,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    accountId: movement.accountId,
  }));

export const mapAccountFromApiToVm = (
  accountList: apiModel.AccountApiModel
): ViewModel.AccountVm => ({
  id: accountList.id,
  iban: accountList.iban,
  name: accountList.name,
  balance: `${accountList.balance}`,
  lastTransaction: new Date(accountList.lastTransaction).toLocaleDateString(),
});
