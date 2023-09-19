import { FieldValidationResult } from "./validation-model";
import { REQUIRED_FIELD_MESSAGE } from "./validation.const";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSuccededResult = (): FieldValidationResult => ({
  succeeded: true,
});

export const buildRequieredFieldValidationFailedResponse = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
