import React from "react";
import {
  AccountVm,
  AccountVmError,
  createEmptyAccount,
  createEmptyAccountError,
} from "../account.vm";
import { validateForm } from "../validations/account-form.validation";
import classes from "./account-form.component.module.css";

interface Props {
  account: AccountVm[];
  onAccount: (accountInfo: AccountVm) => void;
}

export const AccountFormComponent: React.FC<Props> = (props) => {
  const { account, onAccount } = props;
  const [accountList, setAccountList] = React.useState<AccountVm>(
    createEmptyAccount()
  );

  const [errors, setError] = React.useState<AccountVmError>(
    createEmptyAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(accountList);
    setError(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onAccount(accountList);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccountList({ ...accountList, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              value={accountList.type}
              className={classes.large}
            >
              <option value="">Seleccionar</option>
              {account.map((account) => (
                <option key={account.type} value={account.type}>
                  {account.name}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};
