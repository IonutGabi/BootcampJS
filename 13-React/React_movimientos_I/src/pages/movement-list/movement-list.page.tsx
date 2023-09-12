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
  const [accountList, setAccountList] = React.useState<AccountVm>(
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
    try {
      getAccountList().then((result) =>
        setAccountList(mapAccountListFromApiToVm(result))
      );
    } catch (error) {
      throw new Error("Error al cargar la información de la cuenta");
    }
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.dataContainer}>
            <span>SALDO DISPONIBLE</span>
            <p>{`${accountList.balance} €`}</p>
          </div>
        </div>
        <div className={classes.informationBank}>
          <span>Alias: {accountList.name}</span>
          <span>IBAN: {accountList.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
