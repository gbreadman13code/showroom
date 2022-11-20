import React, { useEffect, useState } from 'react';
import styles from './CategoryCards.module.scss';
import { Link } from 'react-router-dom';
import CategoryBlankPage from '../CategoryBlankPage/CategoryBlankPage';

const CategoryCards = ({ shops, activeCategory }) => {
  return (
    <div className={styles.cards}>
      {shops.filter((shop) => shop.category === activeCategory).length > 0 ? (
        shops
          .filter((shop) => shop.category === activeCategory)
          .map((shop) => (
            <div className={styles.card} key={shop.id}>
              <Link to={`/showroom/shops/${shop.id}`} className={styles.cardInfo}>
                <div className={styles.shopImage}>
                  <img src={shop.cropped_image} alt={shop.title} />
                </div>
                <div className={styles.shopTitle}>{shop.title}</div>
              </Link>
            </div>
          ))
      ) : (
        <CategoryBlankPage />
      )}
    </div>
  );
};

export default CategoryCards;
