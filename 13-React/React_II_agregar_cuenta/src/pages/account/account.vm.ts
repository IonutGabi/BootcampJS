export interface AccountVm {
  type: string;
  name: string;
}

export const accountData: AccountVm[] = [
  {
    type: "1",
    name: "Cuenta Corriente",
  },
  {
    type: "2",
    name: "Cuenta Ahorro",
  },
  {
    type: "3",
    name: "Cuenta Nómina",
  },
];

export const createEmptyAccount = (): AccountVm => ({
  type: "",
  name: "",
});

export interface AccountVmError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): AccountVmError => ({
  type: "",
  name: "",
});
