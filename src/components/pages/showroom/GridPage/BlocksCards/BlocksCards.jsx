import React, { useEffect, useState } from 'react';
import BlockCards from './BlockCards/BlockCards';
import styles from './BlocksCards.module.scss';

const offset = 3;

const blockHeight = 1416;
const blockWidth = 1846;
const blockMarginWidth = 440;
const blockMarginHeight = 57;

let cardWidth = 323;
let cardHeight = 434;
let cardMargin = 58;

let moveStartX;
let moveStartY;

let maxColumn = 3;

class CardsBlock {
  constructor(top, left, rowNumber, columnNumber) {
    this.positionTop = top;
    this.positionLeft = left;
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
  }
}

const BlocksCards = ({ cards, setActiveCard, activeCard, isBlockTransitive, setIsBlockTransitive }) => {
  let [cardsBlocks, setCardsBlocks] = useState([]);

  let [gridXPosition, setGridXPosition] = useState(0);
  let [gridYPosition, setGridYPosition] = useState(0);

  let [currentColumn, setCurrentColumn] = useState(0);
  let [currentRow, setCurrentRow] = useState(0);

  let [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    insertNewCardsBlock(0, 0);
    while (checkBorders());
  }, []);

  let checkBorders = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth / (blockWidth + blockMarginWidth) > maxColumn - offset) {
      fillWindow();
      return true;
    }
    if (windowHeight / (blockHeight + blockMarginHeight) > maxColumn - offset) {
      fillWindow();
      return true;
    }
  };

  function fillWindow() {
    let column = -maxColumn;
    while (column <= maxColumn) {
      let row = -maxColumn;
      while (row <= maxColumn) {
        insertNewCardsBlock(row, column);
        row += 2;
      }
      column += 2;
    }
    column = -maxColumn - 1;
    while (column <= maxColumn + 1) {
      let row = -maxColumn - 1;
      while (row <= maxColumn + 1) {
        insertNewCardsBlock(row, column);
        row += 2;
      }
      column += 2;
    }
    maxColumn += 2;
  }

  let insertNewCardsBlock = (rowNumber, columnNumber) => {
    setCardsBlocks((t) => {
      let newBlock = new CardsBlock(
        (rowNumber * (blockHeight + blockMarginHeight)) / 2,
        (columnNumber * (blockWidth + blockMarginWidth)) / 2,
        rowNumber,
        columnNumber
      );
      if (
        t.filter((value) => {
          return value.rowNumber === rowNumber && value.columnNumber === columnNumber;
        }).length !== 0
      ) {
        return t;
      }
      return [...t, newBlock];
    });
  };

  let mouseDownHandler = (event) => {
    setIsTouched(true);

    moveStartX = event.clientX + gridXPosition;
    moveStartY = event.clientY + gridYPosition;
    document.body.style.overflow = 'hidden';
  };
  let mouseMoveHandler = (event) => {
    if (isTouched) {
      setCurrentColumn((gridXPosition / (blockWidth + blockMarginWidth)) * 2);
      setCurrentRow((gridYPosition / (blockHeight + blockMarginHeight)) * 2);

      if (currentColumn > maxColumn - offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentColumn < -maxColumn + offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentRow < -maxColumn + offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentRow > maxColumn - offset) {
        updateWindow();
        removeFarCards();
      }

      setGridXPosition((value) => {
        return moveStartX - event.clientX;
      });
      setGridYPosition((value) => {
        return moveStartY - event.clientY;
      });
    }
  };

  let pointerUpHandler = (event) => {
    setIsTouched(false);
    document.body.style.overflow = '';
  };
  let pointerDownHandler = (event) => {
    setIsTouched(true);
    moveStartX = event.touches[0].clientX + gridXPosition;
    moveStartY = event.touches[0].clientY + gridYPosition;
    document.body.style.overflow = 'hidden';
  };
  let pointerMoveHandler = (event) => {
    if (isTouched) {
      setCurrentColumn((gridXPosition / (blockWidth + blockMarginWidth)) * 2);
      setCurrentRow((gridYPosition / (blockHeight + blockMarginHeight)) * 2);

      if (currentColumn > maxColumn - offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentColumn < -maxColumn + offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentRow < -maxColumn + offset) {
        updateWindow();
        removeFarCards();
      }
      if (currentRow > maxColumn - offset) {
        updateWindow();
        removeFarCards();
      }

      setGridXPosition((value) => {
        return moveStartX - event.touches[0].clientX;
      });
      setGridYPosition((value) => {
        return moveStartY - event.touches[0].clientY;
      });
    }
  };

  function scrollHandler(event) {
    setGridXPosition((value) => {
      return value + event.deltaX;
    });
    setGridYPosition((value) => {
      return value + event.deltaY;
    });
    setCurrentColumn((gridXPosition / (blockWidth + blockMarginWidth)) * 2);
    setCurrentRow((gridYPosition / (blockHeight + blockMarginHeight)) * 2);

    updateWindow();
    removeFarCards();
  }

  let removeFarCards = () => {
    setCardsBlocks((cards) => {
      return cards.filter((value) => {
        return (
          Math.abs(Math.abs(value.rowNumber) - Math.abs(currentRow)) < 5 &&
          Math.abs(Math.abs(value.columnNumber) - Math.abs(currentColumn)) < 5
        );
      });
    });
  };

  let updateWindow = () => {
    let startColumn = Math.round(currentColumn);
    let startRow = Math.round(currentRow);
    let column = startColumn - offset;
    while (column <= startColumn + offset) {
      if (column % 2 === 0) {
        let row = startRow - offset;
        if (Math.abs(row % 2) === 1) {
          row -= 1;
          while (row <= startRow + offset) {
            insertNewCardsBlock(row, column);
            row += 2;
          }
          row = startRow - offset;
          while (row <= startRow + offset) {
            insertNewCardsBlock(row, column - 1);
            row += 2;
          }
        }
      } else {
        let row = startRow - offset;
        if (row % 2 === 0) {
          row -= 1;
          while (row <= startRow + offset) {
            insertNewCardsBlock(row, column);
            row += 2;
          }
          row = startRow - offset;
          while (row <= startRow + offset) {
            insertNewCardsBlock(row, column - 1);
            row += 2;
          }
        }
      }

      column += 2;
    }
  };

  function _setActiveCard(activeCard, event, blockIndex) {
    setActiveCard(activeCard);
    setIsBlockTransitive(true);
    let card = event.target.closest('[class*="CategoryCards_card_"]');
    let block = cardsBlocks[blockIndex];
    setGridXPosition((v) => {
      let blockCenterCoords = blockWidth / 2 - window.innerWidth / 2;
      //   -2 в конце чтобы получить числа от -2 до +2
      let multiplier = parseInt(card.style.left) / (cardWidth + cardMargin) - 2;
      let offsetInsideBlock = multiplier * (cardWidth + cardMargin);
      let blockOffset = (block.columnNumber * (blockWidth + blockMarginWidth)) / 2;
      return blockCenterCoords + offsetInsideBlock + blockOffset;
    });
    setGridYPosition((v) => {
      let blockCenterCoords = blockHeight / 2 - window.innerHeight / 2;
      //   -2 в конце чтобы получить числа от -2 до +2
      let multiplier = parseInt(card.style.top) / (cardHeight + cardMargin) - 2;
      let offsetInsideBlock = multiplier * (cardHeight + cardMargin);
      let blockOffset = (block.rowNumber * (blockHeight + blockMarginHeight)) / 2;
      return blockCenterCoords + offsetInsideBlock + blockOffset + cardHeight + cardMargin;
    });
    setCurrentColumn((gridXPosition / (blockWidth + blockMarginWidth)) * 2);
    setCurrentRow((gridYPosition / (blockHeight + blockMarginHeight)) * 2);

    updateWindow();
    removeFarCards();
  }

  return (
    <div
      className={styles.gridWrapper}
      onTouchStart={pointerDownHandler}
      onPointerUp={pointerUpHandler}
      onTouchMove={pointerMoveHandler}
      onPointerLeave={pointerUpHandler}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onWheelCapture={scrollHandler}>
      <div
        className={styles.grid}
        style={{
          transform: `translate(${-gridXPosition}px, ${-gridYPosition}px)`,
          transition: isBlockTransitive ? 'transform 0.8s ease' : 'transform 0.05s ease',
        }}>
        {cardsBlocks &&
          cardsBlocks.map((block, index) => (
            <BlockCards
              key={index}
              blockIndex={index}
              positionTop={block.positionTop}
              positionLeft={block.positionLeft}
              rowNumber={block.rowNumber}
              columnNumber={block.columnNumber}
              images={cards}
              setActiveCard={_setActiveCard}
              activeCard={activeCard}
            />
          ))}
      </div>
    </div>
  );
};

export default BlocksCards;
