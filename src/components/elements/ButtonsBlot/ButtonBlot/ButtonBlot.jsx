import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ButtonBlot.module.scss";

const ButtonBlot = (props) => {
  return (
    <li>
      <NavLink
        to={"/exhibition_" + props.id}
        className={styles.blot}

        // className={(isActive) => styles.blot + (!isActive ? " active" : "")}

        // activeClassName="selected"
      >
        {props.image}
      </NavLink>
    </li>
  );
};

export default ButtonBlot;
