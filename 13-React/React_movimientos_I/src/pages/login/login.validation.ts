import { CredentialsFormErrors, createEmptyCredentials } from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}

export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validateResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentials(),
  };
  if (!credentials.user.trim()) {
    validateResult.errors = {
      ...validateResult.errors,
      user: "Debe informar el campo usuario",
    };
    validateResult.succeeded = false;
  }

  if (!credentials.password.trim()) {
    validateResult.errors = {
      ...validateResult.errors,
      password: "Debe informar el campo password",
    };
    validateResult.succeeded = false;
  }
  return validateResult;
};
