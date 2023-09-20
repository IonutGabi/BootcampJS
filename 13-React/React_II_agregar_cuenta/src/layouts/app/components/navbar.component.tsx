import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";
export const NavBarComponent: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={`${
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          } ${
            pathname.startsWith(routesPrefixes.account) ? classes.selected : ""
          }`}
        >
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li
          style={
            pathname.startsWith(routesPrefixes.movements)
              ? { display: "block" }
              : { display: "none" }
          }
          className={classes.selected}
        >
          <Link to={appRoutes.movements}>Movimientos</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
