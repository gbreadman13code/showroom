import React, { useEffect, useState } from 'react';
import CategoryCards from './CategoryCards/CategoryCards';
import styles from './BlockCards.module.scss';

const BlockCards = ({ positionTop, positionLeft, images, setActiveCard, activeCard, blockIndex, block }) => {
  function _setActiveCard(imageId, event) {
    setActiveCard(imageId, event, blockIndex);
  }
  return (
    <div
      className={styles.block}
      style={{
        top: positionTop ? positionTop : null,
        left: positionLeft ? positionLeft : null,
      }}>
      {/* <div className={styles.temp}>
        {block.columnNumber} {block.rowNumber}
      </div> */}
      <CategoryCards
        images={images}
        setActiveCard={_setActiveCard}
        activeCard={activeCard}
        blockIndex={blockIndex}
        block={block}
      />
    </div>
  );
};

export default BlockCards;
