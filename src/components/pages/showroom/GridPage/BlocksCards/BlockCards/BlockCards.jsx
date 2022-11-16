import React, { useEffect, useState } from 'react';
import CategoryCards from './CategoryCards/CategoryCards';
import styles from './BlockCards.module.scss';

const BlockCards = ({ positionTop, positionLeft, images, setActiveCard, activeCard, blockIndex }) => {
  function _setActiveCard(imageId, event) {
    setActiveCard(imageId, event, blockIndex);
  }
  return (
    <div
      className={styles.block}
      style={{
        top: positionTop,
        left: positionLeft,
      }}>
      <div className={styles.temp}>{/* {rowNumber} {columnNumber} */}</div>
      <CategoryCards images={images} setActiveCard={_setActiveCard} activeCard={activeCard} />
    </div>
  );
};

export default BlockCards;
