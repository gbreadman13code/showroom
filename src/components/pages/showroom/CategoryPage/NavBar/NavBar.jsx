import React, { useEffect, useRef } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';
import Slider from 'react-slick';

const NavBar = ({ categories, activeCategory }) => {
  let slider = useRef();
  useEffect(() => {
    let cats = categories.sort((first, second) => first.id - second.id);
    let first_id = 0;
    if (cats.length) {
      first_id = cats[0].id;
    }
    if (slider.current) slider.current.slickGoTo(activeCategory - first_id);
  }, [activeCategory, categories]);
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <nav className={styles.nav}>
      {isMobile
        ? categories && (
            <Slider {...settings} ref={slider}>
              {categories
                .sort((first, second) => first.id - second.id)
                .map((category) => (
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
          categories
            .sort((first, second) => first.id - second.id)
            .map((category) => (
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
