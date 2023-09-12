export interface MovementVm {
  id: string;
  description: string;
  amount: string;
  balance: string;
  realTransaction: Date;
  transaction: Date;
  accountId: string;
}

export interface AccountVm {
  id: string;
  iban: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}
