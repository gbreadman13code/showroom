import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../PromoSection.module.scss";
import useMobileDetect from "use-mobile-detect-hook";

const PromoSlider = ({ slides }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: isMobile ? true : false,
  };

  return (
    <Slider {...settings}>
      {slides.map((item) => {
        return item.link ? (
          <a href={item.link} key={item.id} className={styles.slide}>
            <img src={item.image} alt="logo" />
          </a>
        ) : (
          <div key={item.id} className={styles.slide}>
            <img src={item.image} alt="logo" />
          </div>
        );
      })}
    </Slider>
  );
};

export default PromoSlider;
