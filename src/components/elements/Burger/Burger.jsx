import React from 'react';
import styles from './Burger.module.scss';
// import className from

const Burger = ({ modalActive, setModalActive }) => {
  return (
    <button
      className={
        modalActive ? `${styles.burger} ${styles.pressed}` : styles.burger
      }
      onClick={() => setModalActive(true)}
    >
      {/* ${styles.pressed} */}
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
