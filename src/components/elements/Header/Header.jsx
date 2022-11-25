import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderButtonGroup from '../HeaderButtonGroup/HeaderButtonGroup';
import Logo from '../Logo/Logo';

import Burger from '../Burger/Burger';

import styles from './Header.module.scss';

const Header = (props) => {
  return (
    <div
      id={!props.headerBackground ? styles.header_disable : null}
      className={`${styles.header} ${
        props.headerBackground ? styles.header__background : ''
      } ${props.header ? styles.header__primary : ''}`}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink
          to="/"
          style={{ marginRight: 50 }}
          className={({ isActive }) => (isActive ? styles.pressed : '')}
        >
          <Logo />
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? styles.pressed : '')}
          >
            Галерея
          </NavLink>

          <NavLink
            to="/showroom"
            className={({ isActive }) => (isActive ? styles.pressed : '')}
          >
            Шоурум
          </NavLink>

          <NavLink
            to="/#partners"
            className={({ isActive }) => (isActive ? styles.pressed : '')}
          >
            Партнеры
          </NavLink>

          {/* <Link to="/gallery/payment_and_delivery">Контакты</Link> */}
        </div>
      </div>
      <HeaderButtonGroup
        header={props.header}
        order={props.order}
        orderLink={props.orderLink}
      />

      {/* <Burger /> */}
    </div>
  );
};

export default Header;
