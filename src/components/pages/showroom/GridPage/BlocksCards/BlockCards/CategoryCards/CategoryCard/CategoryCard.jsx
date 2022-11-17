import React, { useEffect, useState } from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ image, setActiveCard, isActive, isClickEnabled }) => {
  let [touchStartX, setTouchStartX] = useState(0);
  let [touchStartY, setTouchStartY] = useState(0);
  function pointerDownHandler(event) {
    setTouchStartX(event.clientX);
    setTouchStartY(event.clientY);
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
