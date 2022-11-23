import React, { useEffect, useState } from 'react';
import styles from './PartnersSection.module.scss';
import NavBar from '../../../elements/NavBar/NavBar';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { getShops } from '../../../../redux/requests/getShops';
import Container from '../../../templates/Container';

import useMobileDetect from 'use-mobile-detect-hook';
import PartnersProfile from './PartnersProfile/PartnersProfile';

const PartnersSection = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let params = useParams();
  let [categories, setCategories] = useState([]);
  let [activeCategory, setActiveCategory] = useState(0);
  let [shops, setShops] = useState([]);
  let location = useLocation();

  useEffect(() => {
    getShopsCategories().then((res) => {
      setCategories(res.results);
    });
    getShops().then((res) => {
      setShops(res.results);
    });

    if (params.id) {
      setActiveCategory(+params.id);
    }
  }, [location]);

  return (
    <div
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
        <NavBar categories={categories} activeCategory={activeCategory} />

        <PartnersProfile />
      </Container>
    </div>
  );
};

export default PartnersSection;
