import React, { useEffect, useState } from 'react';
import styles from './GridPage.module.scss';
import BlocksCards from './BlocksCards/BlocksCards';
import ActiveCard from './ActiveCard/ActiveCard';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { useLocation } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';

const GridPage = ({ orderDict }) => {
  let [isBlockTransitive, setIsBlockTransitive] = useState(false);
  let [activeCard, setActiveCard] = useState({ block: 0, image: 0 });
  let [cards, setCards] = useState([]);
  let location = useLocation();
  useEffect(() => {
    getShopsCategories().then((res) => {
      setCards(res.results.filter((card) => card.is_visible_on_main_page));
    });
  }, [location]);

  let closeActiveCard = (event) => {
    if (event.target.tagName === 'A') {
      return;
    }
    setIsBlockTransitive(false);
    setActiveCard({ block: 0, image: 0 });
  };

  return (
    <PageTemplate
      header='absolute'
      isFooter={false}
      headerBackground={!activeCard.image > 0}
      orderLink='/showroom/order'
      order={true}
      orderDict={orderDict}>
      <div>
        {/* <div className={styles.headerBackground}></div> */}
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
          onPointerUp={closeActiveCard}>
          {activeCard.image > 0 && (
            <ActiveCard
              card={cards.filter((card) => card.id === activeCard.image)[0]}
              closeActiveCard={closeActiveCard}
            />
          )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default GridPage;
