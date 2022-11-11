import React from 'react';
import SearchField from '../SearchField/SearchField';
import LikeDisActive from '../../../assets/img/like-disactive.svg';
import LikeActive from '../../../assets/img/like-active.svg';
import Garbadge from '../../../assets/img/garbadge.svg';
import Colors from '../../../assets/img/colorsIcon.svg';

import { Link, useLocation } from 'react-router-dom';

import styles from './MobileHeaderButtonGroup.module.scss';
import { useSelector } from 'react-redux';

const MobileHeaderButtonGroup = () => {
  const location = useLocation();
  const pathname = location.pathname === '/wishlist' ? true : false;

  const order = useSelector((state) => state.order.orderList);

  let orderCount = 0;

  if (order.length > 0) {
    order.map((item) => {
      orderCount += item.count;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* <Link to={'/wishlist'}>
            <img src={pathname ? LikeActive : LikeDisActive} alt="whishlist" />
        </Link> */}
        <Link to={'/gallery/order'}>
          <img src={Garbadge} alt='order' />
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
