import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';
import styles from './CategoryCards.module.scss';

const cardWidth = 323;
const cardHeight = 434;
const cardMargin = 57;

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
      />
    </div>
  ));
};

export default CategoryCards;
