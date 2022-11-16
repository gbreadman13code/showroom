import React from "react";
import { Link } from "react-router-dom";
import HeaderButtonGroup from "../HeaderButtonGroup/HeaderButtonGroup";
import Logo from "../Logo/Logo";

import Burger from "../Burger/Burger";

import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div
      className={
        props.header
          ? `${styles.header} ${styles.header__absolute}`
          : styles.header
      }
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={"/"} style={{ marginRight: 50 }}>
          <Logo />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/">Шоурум</Link>
          <Link to="/gallery">Галерея</Link>
          {/* <Link to="/gallery/payment_and_delivery">Контакты</Link> */}
        </div>
      </div>
      <HeaderButtonGroup />

      {/* <Burger /> */}
    </div>
  );
};

export default Header;
