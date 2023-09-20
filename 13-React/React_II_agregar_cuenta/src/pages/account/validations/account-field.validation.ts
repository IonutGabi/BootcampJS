import {
  isStringValueInformed,
  buildValidationFailedResult,
  buildValidationSuccededResult,
} from "@/common/validations/";
import { FieldValidationResult } from "@/common/validations/validation-model";
import {
  INVALID_NAME_ACCOUNT_MESSAGE,
  INVALID_TYPE_ACCOUNT_MESSAGE,
} from "@/common/validations/validation.const";

export const validateTypeAccountField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(INVALID_TYPE_ACCOUNT_MESSAGE);
  }
  return buildValidationSuccededResult();
};

export const validateNameAccountField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(INVALID_NAME_ACCOUNT_MESSAGE);
  }
  return buildValidationSuccededResult();
};
