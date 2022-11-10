import React from "react";
import styles from "./Burger.module.scss";
// import className from

const Burger = (props) => {
  return (
    <button className={`${styles.burger} ${styles.pressed}`}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
