import React from 'react';
// import Garbadge from "../../../assets/img/garbadge.svg";

import { Link } from 'react-router-dom';
import { ReactComponent as Garbadge } from '../../../assets/img/garbadge.svg';

import styles from './HeaderButtonGroup.module.scss';
import { useSelector } from 'react-redux';

const HeaderButtonGroup = (props) => {
  const order = useSelector((state) => state.order.orderList);

  let orderCount = 0;

  if (order.length > 0) {
    order.forEach((item) => {
      orderCount += item.count;
    });
  }

  return (
    <div
      className={
        props.order
          ? `${styles.container} ${styles.container__gallery}`
          : styles.container
      }
      // className={styles.container}
    >
      {/* <SearchField /> */}
      {/* <Link to={'/wishlist'}>
            <img src={pathname ? LikeActive : LikeDisActive} alt="whishlist" />
        </Link> */}
      <Link to={'/gallery/order'}>
        <Garbadge />
        {/* <img src={Garbadge} alt="order" /> */}
        {orderCount > 0 && <div className={styles.counter}>{orderCount}</div>}
      </Link>
      {/* <Link to={'/'}>
            <img src={Colors} alt="main" />
        </Link> */}
    </div>
  );
};

export default HeaderButtonGroup;
