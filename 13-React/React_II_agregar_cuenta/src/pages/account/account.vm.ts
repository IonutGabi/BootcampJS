export interface AccountVm {
  type: string;
  name: string;
}

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
