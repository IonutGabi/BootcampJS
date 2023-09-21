export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  realTransaction: string;
  transaction: string;
  accountId: string;
}

export interface AccountVm {
  id: string;
  iban: string;
  name: string;
  balance: string;
  lastTransaction: string;
}

export const createAccountEmpty = (): AccountVm => ({
  id: "",
  iban: "",
  name: "",
  balance: "",
  lastTransaction: "",
});
