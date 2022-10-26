import React from "react";
import { Link } from "react-router-dom";
import HeaderButtonGroup from "../HeaderButtonGroup/HeaderButtonGroup";
import Logo from "../Logo/Logo";
import useMobileDetect from "use-mobile-detect-hook";

import styles from "./MobileHeader.module.scss";
import MobileHeaderButtonGroup from "../MobileHeaderButtonGroup/MobileHeaderButtonGroup";

const MobileHeader = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div className={styles.header}>
      <MobileHeaderButtonGroup />
      <div className={styles.footer_of_header}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/">Шоурум</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
