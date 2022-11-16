import React, { useEffect, useState } from 'react';
import styles from './CategoryCard.module.scss';

let touchStartX;
let touchStartY;
const CategoryCard = ({ image, setActiveCard, isActive }) => {
  function pointerDownHandler(event) {
    touchStartX = event.clientX;
    touchStartY = event.clientY;
  }
  function pointerUpHandler(event) {
    if (Math.abs(touchStartX - event.clientX) < 20 && Math.abs(touchStartY - event.clientY) < 20) {
      setActiveCard(image.id, event);
    }
  }
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${image.image}')` }}
        alt=''
        className={isActive ? `${styles.card} ${styles.active}` : styles.card}
        onPointerDown={pointerDownHandler}
        onPointerUp={pointerUpHandler}
      />
    </div>
  );
};

export default CategoryCard;
