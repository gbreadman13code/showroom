import React, { useState, useEffect } from 'react';
// import Garbadge from "../../../assets/img/garbadge.svg";

import { Link } from 'react-router-dom';
import { ReactComponent as Garbadge } from '../../../assets/img/garbadge.svg';

import styles from './HeaderButtonGroup.module.scss';
import { useSelector } from 'react-redux';

const HeaderButtonGroup = (props) => {
  const order = useSelector((state) => state.order.orderList);
  const [orderCount, setOrderCount] = useState(0);
  // let orderCount = 0;
  useEffect(() => {
    let order = props.orderDict;
    let counter = 0;
    for (let key in order) {
      let productDict = order[key];
      counter += productDict.quantity;
    }
    setOrderCount(counter);
  }, [props.orderDict]);

  return (
    <div
      className={props.order ? `${styles.container} ${styles.container__gallery}` : styles.container}
      // className={`${styles.container} ${styles.container__gallery}`}
      // className={styles.container}
    >
      {/* <SearchField /> */}
      {/* <Link to={'/wishlist'}>
            <img src={pathname ? LikeActive : LikeDisActive} alt="whishlist" />
        </Link> */}
      <Link to={props.orderLink}>
        <Garbadge />
        {orderCount > 0 && <div className={styles.counter}>{orderCount}</div>}
      </Link>
      {/* <Link to={'/'}>
            <img src={Colors} alt="main" />
        </Link> */}
    </div>
  );
};

export default HeaderButtonGroup;
