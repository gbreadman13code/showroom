import React from "react";
import styles from "./PalletSwitch.module.scss";

import pallet from "../../../assets/img/pallet-switch.svg";
import useMobileDetect from "use-mobile-detect-hook";

const PalletSwitch = (props) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div
      className={
        isMobile ? `${styles.switch__mobile} ${styles.switch}` : styles.switch
      }
    >
      <p>{props.title}</p>

      <button
        className={`${styles.button__left} ${styles.button}`}
        type="button"
      >
        <span></span>
      </button>

      <button
        className={`${styles.button__right} ${styles.button}`}
        type="button"
      >
        <span></span>
      </button>

      <img src={pallet} alt="" />
    </div>
  );
};

export default PalletSwitch;
