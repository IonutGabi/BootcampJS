import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm, AccountVm, createAccountEmpty } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";
import { getAccount, getMovements } from "./api";
import {
  mapAccountFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  const [account, setAccount] = React.useState<AccountVm>(createAccountEmpty());

  const loadData = (id: string): void => {
    Promise.all([getMovements(id), getAccount(id)]).then((result) => {
      setMovementList(mapMovementListFromApiToVm(result[0]));
      setAccount(mapAccountFromApiToVm(result[1]));
    });
  };

  React.useEffect(() => {
    if (id) {
      loadData(id);
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.dataContainer}>
            <span>SALDO DISPONIBLE</span>
            <p>{`${account.balance} €`}</p>
          </div>
        </div>
        <div className={classes.informationBank}>
          <span>Alias: {account.name}</span>
          <span>IBAN: {account.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
