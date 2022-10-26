import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../ProfilePage.module.scss";
import sliderStyles from "./ProfileSlider.scss";
import { MEDIA_URL } from "../../../../redux/API/BASE_URL";

const ProfileSlider = ({ additional_photos }) => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {additional_photos.map((item, index) => (
        <div className={styles.slide}>
        <img key={index} src={MEDIA_URL + item.thumbnail} alt="работа" />
        </div>
      ))}
    </Slider>
  );
};

export default ProfileSlider;
