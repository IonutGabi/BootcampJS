import React from "react";
import logoFooter from "/assets/logo_footer.svg";
import classes from "./footer.component.module.css";
export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <img src={logoFooter} className={classes.footerLogo} />
      </div>
    </footer>
  );
};
