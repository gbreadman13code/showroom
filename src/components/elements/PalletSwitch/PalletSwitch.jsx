import React from "react";
import styles from "./PalletSwitch.module.scss";

import pallet from "../../../assets/img/pallet-switch.svg";

const PalletSwitch = (props) => {
  return (
    <div className={styles.switch}>
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
