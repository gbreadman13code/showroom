import React, { useEffect, useRef } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';
import Slider from 'react-slick';

const NavBar = ({ categories, activeCategory, onClickCallback }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let slider = useRef();
  let nav = useRef();

  useEffect(() => {
    let cats = categories.sort((first, second) => first.id - second.id);

    let first_id = 0;
    if (cats.length) {
      first_id = cats[0].id;
    }
    if (slider.current) slider.current.slickGoTo(activeCategory - first_id);
  }, [activeCategory, categories]);

  let settings = {
    // focusOnSelect: true,
    dots: false,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: false,

    beforeChange: (event, slide) => {
      if (slide === categories.length - 1) {
        nav.current.classList.add('left');
      } else if (slide === 0) {
        nav.current.classList.remove('left');
      }
    },
  };

  return (
    <nav className={styles.nav} ref={nav}>
      {isMobile
        ? categories && (
            <Slider {...settings} ref={slider}>
              {categories
                .sort((first, second) => first.id - second.id)
                .map((category) => (
                  <div
                    className={
                      activeCategory === category.id
                        ? `${styles.category} ${styles.active}`
                        : styles.category
                    }
                    key={category.id}
                    onClick={() => {
                      onClickCallback(category.id);
                    }}
                  >
                    {category.title}
                  </div>
                ))}
            </Slider>
          )
        : categories &&
          categories
            .sort((first, second) => first.id - second.id)
            .map((category) => (
              <div
                className={
                  activeCategory === category.id
                    ? `${styles.category} ${styles.active}`
                    : styles.category
                }
                key={category.id}
                onClick={() => {
                  onClickCallback(category.id);
                }}
                data-text={category.title}
              >
                {category.title}
              </div>
            ))}
    </nav>
  );
};

export default NavBar;
