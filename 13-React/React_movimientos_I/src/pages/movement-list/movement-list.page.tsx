import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm, AccountVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";
import { getAccountList, getMovements } from "./api";
import {
  mapAccountListFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";
export const MovementListPage: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const [accountList, setAccountList] = React.useState<AccountVm>();

  React.useEffect(() => {
    if (accountId) {
      try {
        getMovements(accountId).then((result) =>
          setMovementList(mapMovementListFromApiToVm(result))
        );
      } catch (error) {
        throw new Error("Error al cargar los movimientos de la cuenta");
      }
    }
  }, []);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.dataContainer}>
            <span>SALDO DISPONIBLE</span>
            <p>{`${accountList?.balance} €`}</p>
          </div>
        </div>
        <div className={classes.informationBank}>
          <span>Alias: {accountList?.name}</span>
          <span>IBAN: {accountList?.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
