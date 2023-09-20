import { FormValidationResult } from "@/common/validations/validation-model";
import { AccountVm, AccountVmError } from "../account.vm";
import {
  validateTypeAccountField,
  validateNameAccountField,
} from "./account-field.validation";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountVmError> => {
  const fieldValidationResults = [
    validateTypeAccountField(account.type),
    validateNameAccountField(account.name),
  ];
  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
