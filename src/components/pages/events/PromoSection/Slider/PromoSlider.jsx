import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../PromoSection.module.scss';
import sliderStyles from './PromoSlider.scss';

import useMobileDetect from 'use-mobile-detect-hook';

const PromoSlider = ({ slides }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  // console.log(slides);

  let settings = {
    fade: isMobile ? true : false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: isMobile ? 1500 : 2000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    adaptiveHeight: isMobile ? true : false,
    swipeToSlide: true,
  };

  return (
    <div id='promoSlider'>
      <Slider {...settings}>
        {slides.map((item) => {
          return item.link ? (
            <a href={item.link} key={item.id} className={styles.slide}>
              <img src={item.image} alt='logo' />
            </a>
          ) : (
            <div key={item.id} className={styles.slide}>
              <img src={item.image} alt='logo' />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PromoSlider;
