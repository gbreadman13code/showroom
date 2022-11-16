import React, { useEffect, useState } from 'react';
import styles from './GridPage.module.scss';

import img1 from '../../../../assets/img/showroom/devGrid/Group 1456.png';
import img2 from '../../../../assets/img/showroom/devGrid/Group 1458.png';
import img3 from '../../../../assets/img/showroom/devGrid/Group 1459.png';
import img4 from '../../../../assets/img/showroom/devGrid/Rectangle 599.png';
import img5 from '../../../../assets/img/showroom/devGrid/Rectangle 599 (1).png';
import img6 from '../../../../assets/img/showroom/devGrid/Rectangle 600.png';
import img7 from '../../../../assets/img/showroom/devGrid/Rectangle 601.png';
import img8 from '../../../../assets/img/showroom/devGrid/Rectangle 602.png';
import img9 from '../../../../assets/img/showroom/devGrid/Rectangle 614.png';
import BlocksCards from './BlocksCards/BlocksCards';
import ActiveCard from './ActiveCard/ActiveCard';

const cards = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
];

const GridPage = () => {
  let [isBlockTransitive, setIsBlockTransitive] = useState(false);

  let [activeCard, setActiveCard] = useState({ block: 0, image: 0 });
  useEffect(() => {}, []);

  let closeActiveCard = () => {
    setIsBlockTransitive(false);
    setActiveCard({ block: 0, image: 0 });
  };

  return (
    <div>
      <BlocksCards
        cards={cards}
        setActiveCard={setActiveCard}
        activeCard={activeCard}
        setIsBlockTransitive={setIsBlockTransitive}
        isBlockTransitive={isBlockTransitive}
        // isBlockTransitive={false}
      />
      <div
        className={activeCard.image > 0 ? `${styles.background} ${styles.active}` : styles.background}
        onClick={closeActiveCard}>
        {activeCard.image > 0 && (
          <ActiveCard
            card={cards.filter((card) => card.id === activeCard.image)[0]}
            closeActiveCard={closeActiveCard}
          />
        )}
      </div>
    </div>
  );
};

export default GridPage;
