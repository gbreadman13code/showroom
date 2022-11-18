import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';
import Slider from 'react-slick';

const NavBar = ({ categories, activeCategory }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: window.innerWidth / 200,
    swipeToSlide: true,
  };
  return (
    <nav className={styles.nav}>
      {isMobile
        ? categories && (
            <Slider {...settings}>
              {categories.map((category) => (
                <Link
                  className={activeCategory === category.id ? `${styles.category} ${styles.active}` : styles.category}
                  key={category.id}
                  to={`/showroom/categories/${category.id}`}>
                  {category.title}
                </Link>
              ))}
            </Slider>
          )
        : categories &&
          categories.map((category) => (
            <Link
              className={activeCategory === category.id ? `${styles.category} ${styles.active}` : styles.category}
              key={category.id}
              to={`/showroom/categories/${category.id}`}>
              {category.title}
            </Link>
          ))}
    </nav>
  );
};

export default NavBar;
