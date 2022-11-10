import React from "react";
import { Link } from "react-router-dom";
import HeaderButtonGroup from "../HeaderButtonGroup/HeaderButtonGroup";
import Logo from "../Logo/Logo";
import useMobileDetect from "use-mobile-detect-hook";
import Burger from "../Burger/Burger";

import styles from "./Header.module.scss";

const Header = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={"/"} style={{ marginRight: 50 }}>
          <Logo />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/">Шоурум</Link>
          {/* <Link to="/payment_and_delivery">Контакты</Link> */}
        </div>
      </div>
      <HeaderButtonGroup />
      {/* <Burger /> */}
    </div>
  );
};

export default Header;
