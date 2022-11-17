import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ActiveCard.module.scss';

const ActiveCard = ({ card, closeActiveCard }) => {
  return (
    <div className={styles.card}>
      <Link to={`/showroom/categories/${card.id}`}>{card.title}</Link>
    </div>
    // </div>
  );
};

export default ActiveCard;
