import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm, accountData } from "./account.vm";
import { AccountFormComponent } from "./components";
import classes from "./account.page.module.css";
import { mapAccountFromVmToApi } from "./account.mapper";
import { saveAccount } from "./api";

export const AccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    setAccount(accountData);
  }, []);

  const handleAccount = (accountInfo: AccountVm) => {
    const account = mapAccountFromVmToApi(accountInfo);
    saveAccount(account).then((result) => {
      if (result) {
        alert("Cuenta creada con éxto");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <AccountFormComponent account={account} onAccount={handleAccount} />
      </div>
    </AppLayout>
  );
};
