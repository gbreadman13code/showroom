import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActiveCard.module.scss';

const ActiveCard = ({ card, closeActiveCard }) => {
  return (
    <div>
      <div className={styles.cross} onClick={closeActiveCard}></div>
      <Link to={`/showroom/categories/${card.id}`} className={styles.cardTitle}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActiveCard;
