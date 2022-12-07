import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActiveCard.module.scss';

import { useNavigate } from 'react-router-dom';

const ActiveCard = ({ card, closeActiveCard }) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className={styles.cross} onClick={closeActiveCard}></div>
      <div
        onPointerUp={() => {
          navigate(`/showroom/categories/${card.id}`);
        }}
        to={`/showroom/categories/${card.id}`}
        className={styles.cardTitle}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
