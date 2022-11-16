import React, { useEffect, useState } from 'react';
import styles from './ActiveCard.module.scss';

const ActiveCard = ({ card, closeActiveCard }) => {
  return (
    <div className={styles.background} onClick={closeActiveCard}>
      <div className={styles.card}>{card.id}</div>
    </div>
  );
};

export default ActiveCard;
