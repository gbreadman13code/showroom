import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../MainPage.module.scss";
import sliderStyles from "./Slider.scss";

// const descriptions = [
//   "Выставка сюжетна и представляет собой малый внутренний «Лес» локального искусства из более 80 работ красноярских художников. ",
//   "Выставка сюжетна и представляет собой малый внутренний «Лес» локального искусства из более 80 работ красноярских художников. ",
//   "Выставка сюжетна и представляет собой малый внутренний «Лес» локального искусства из более 80 работ красноярских художников",
// ];

const DescriptionSlider = ({ sliderContent }) => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  let description = sliderContent.split("\n");

  return (
    <Slider {...settings}>
      {description.map((item, index) => (
        <div className={styles.slide} key={index}>
          <p>{item}</p>
        </div>
      ))}
    </Slider>
  );
};

export default DescriptionSlider;