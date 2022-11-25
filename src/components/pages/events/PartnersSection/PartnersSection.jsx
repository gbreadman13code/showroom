import React, { useEffect, useState } from 'react';
import styles from './PartnersSection.module.scss';
import NavBar from '../../../elements/NavBar/NavBar';
import { getPartners } from '../../../../redux/requests/getPartners';
import Container from '../../../templates/Container';

import useMobileDetect from 'use-mobile-detect-hook';
import PartnersProfile from './PartnersProfile/PartnersProfile';

const PartnersSection = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let [categories, setCategories] = useState([]);
  let [activeCategory, _setActiveCategory] = useState(0);

  useEffect(() => {
    getPartners().then((res) => {
      setCategories(res.results);
      setActiveCategory(res.results[0].id);
    });
  }, []);

  let setActiveCategory = (categoryId) => {
    _setActiveCategory(categoryId);
  };

  return (
    <div
      id="partners"
      className={
        isMobile
          ? `${styles.partners} ${styles.partners__mobile}`
          : styles.partners
      }
    >
      <Container>
        <h2
          className={
            isMobile ? `${styles.title} ${styles.title__mobile}` : styles.title
          }
        >
          Сеть партнёров
        </h2>
        <NavBar
          categories={categories}
          activeCategory={activeCategory}
          onClickCallback={setActiveCategory}
        />

        {categories.length > 0 && (
          <PartnersProfile
            partners={
              categories.filter((cat) => cat.id === activeCategory)[0].partners
            }
          />
        )}
      </Container>
    </div>
  );
};

export default PartnersSection;
