import React from "react";
import { AppLayout } from "@/layouts";
import { MovementVm, AccountVm, createAccountEmpty } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components";
import { useParams } from "react-router-dom";
import { getAccountList, getMovements } from "./api";
import {
  mapAccountListFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

  const [account, setAccountList] = React.useState<AccountVm>(
    createAccountEmpty()
  );

  React.useEffect(() => {
    if (id) {
      try {
        getMovements(id).then((result) =>
          setMovementList(mapMovementListFromApiToVm(result))
        );
      } catch (error) {
        throw new Error("Error al cargar los movimientos de la cuenta");
      }
    }
  }, []);
  React.useEffect(() => {
    if (id) {
      try {
        getAccountList(id).then((accountResult) =>
          setAccountList(mapAccountListFromApiToVm(accountResult[0]))
        );
      } catch (error) {
        throw new Error("Error al cargar la información de la cuenta");
      }
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
