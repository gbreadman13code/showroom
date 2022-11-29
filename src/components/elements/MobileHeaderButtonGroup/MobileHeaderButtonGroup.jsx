import React, { useEffect, useState } from 'react';
// import Garbadge from '../../../assets/img/garbadge.svg';
import { ReactComponent as Garbadge } from '../../../assets/img/garbadge.svg';

import { Link } from 'react-router-dom';

import styles from './MobileHeaderButtonGroup.module.scss';
import { useSelector } from 'react-redux';

const MobileHeaderButtonGroup = (props) => {
  const [orderCount, setOrderCount] = useState(0);

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
    <div className={props.order ? `${styles.container} ${styles.container__gallery}` : styles.container}>
      <div className={styles.links}>
        {/* <Link to={'/wishlist'}>
            <img src={pathname ? LikeActive : LikeDisActive} alt="whishlist" />
        </Link> */}
        <Link to={props.orderLink}>
          {/* Значок корзины */}
          <Garbadge />
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
