import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account.vm";
import { AccountFormComponent } from "./components";
import classes from "./account.page.module.css";
import { mapAccountFromVmToApi } from "./account.mapper";
import { saveAccount } from "./api";
import { accountData } from "./account.constants";
import { appRoutes } from "@/core/router";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [account, setAccount] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    setAccount(accountData);
  }, []);

  const handleAccount = (accountInfo: AccountVm) => {
    const account = mapAccountFromVmToApi(accountInfo);
    saveAccount(account).then((result) => {
      if (result) {
        alert("Cuenta creada con éxto");
        navigate(appRoutes.accountList);
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
