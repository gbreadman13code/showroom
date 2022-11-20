import React from "react";
// import Garbadge from '../../../assets/img/garbadge.svg';
import { ReactComponent as Garbadge } from "../../../assets/img/garbadge.svg";

import { Link } from "react-router-dom";

import styles from "./MobileHeaderButtonGroup.module.scss";
import { useSelector } from "react-redux";

const MobileHeaderButtonGroup = () => {
  const order = useSelector((state) => state.order.orderList);

  let orderCount = 0;

  if (order.length > 0) {
    order.forEach((item) => {
      orderCount += item.count;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* <Link to={'/wishlist'}>
            <img src={pathname ? LikeActive : LikeDisActive} alt="whishlist" />
        </Link> */}
        <Link to={"/gallery/order"}>
          {/* Значок корзины */}
          {/* <Garbadge /> */}
          {orderCount > 0 && <div className={styles.counter}>{orderCount}</div>}
        </Link>
      </div>

      {/* <SearchField /> */}
      {/* <Link to={'/'}>
            <img src={Colors} alt="main" />
        </Link> */}
    </div>
  );
};

export default MobileHeaderButtonGroup;
