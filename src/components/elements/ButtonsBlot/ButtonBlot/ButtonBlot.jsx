import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonBlot.module.scss';

const ButtonBlot = ({ id, image, isActive, setActiveExhibition }) => {
  return (
    <li className={styles.buttons_item}>
      <button
        className={isActive ? `${styles.blot} ${styles.active}` : styles.blot}
        onClick={() => {
          setActiveExhibition(id);
        }}
        // className={(isActive) => styles.blot + (!isActive ? " active" : "")}

        // activeClassName="selected"
      >
        {image}
      </button>
    </li>
  );
};

export default ButtonBlot;
