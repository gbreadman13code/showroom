import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import styles from './CategoryCards.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';

let cardWidth = 323;
let cardHeight = 434;
let cardMargin = 57;

function getPositionTop(index, i, maxIndex) {
  let multiplier = maxIndex - 1;
  return ((multiplier - index) * (cardHeight + cardMargin)) / 2 + (i * (cardHeight + cardMargin)) / 2;
}
function getPositionLeft(index, i) {
  return index * (cardWidth + cardMargin) + i * (cardWidth + cardMargin);
}

class CardImage {
  constructor(image, positionTop, positionLeft) {
    this.image = image;
    this.positionTop = positionTop;
    this.positionLeft = positionLeft;
  }
}

let range = (n) => [...Array(n).keys()];

const CategoryCards = ({ images, setActiveCard, activeCard, block }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  if (isMobile) {
    cardWidth = 122;
    cardHeight = 165;
    cardMargin = 22;
  }
  let [cards, setCards] = useState([]);
  useEffect(() => {
    let temp = [];
    let imagesLenghtSqrt = Math.sqrt(images.length);
    for (let i in range(imagesLenghtSqrt)) {
      for (let j in range(imagesLenghtSqrt)) {
        let newCard = new CardImage(
          images[imagesLenghtSqrt * +i + +j],
          getPositionTop(j, i, imagesLenghtSqrt),
          getPositionLeft(j, i)
        );
        temp.unshift(newCard);
      }
    }
    setCards(temp);
  }, [images]);
  return cards.map((card, index) => (
    <div className={styles.card} style={{ top: card.positionTop, left: card.positionLeft }} key={index}>
      <CategoryCard
        image={card.image}
        setActiveCard={setActiveCard}
        isActive={
          activeCard.image === card.image.id &&
          activeCard.block.rowNumber === block.rowNumber &&
          activeCard.block.columnNumber === block.columnNumber
        }
        isClickEnabled={activeCard.image === 0}
      />
    </div>
  ));
};

export default CategoryCards;
