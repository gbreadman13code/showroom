import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderButtonGroup from "../HeaderButtonGroup/HeaderButtonGroup";
import Logo from "../Logo/Logo";
// import useMobileDetect from "use-mobile-detect-hook";

import styles from "./MobileHeader.module.scss";
import MobileHeaderButtonGroup from "../MobileHeaderButtonGroup/MobileHeaderButtonGroup";

const MobileHeader = (props) => {
  // const detectMobile = useMobileDetect();
  // const isMobile = detectMobile.isMobile();

  return (
    <div
      className={
        props.header
          ? `${styles.header} ${styles.header__primary}`
          : styles.header
      }
    >
      <div className={styles.footer_of_header}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.pressed : "")}
        >
          <Logo />
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? styles.pressed : "")}
          >
            Галерея
          </NavLink>

          <NavLink
            to="/showroom"
            className={({ isActive }) => (isActive ? styles.pressed : "")}
          >
            Шоурум
          </NavLink>
        </div>
        <MobileHeaderButtonGroup header={props.header} order={props.order} />
      </div>
    </div>
  );
};

export default MobileHeader;
