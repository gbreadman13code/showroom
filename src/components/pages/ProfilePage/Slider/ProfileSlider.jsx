import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../ProfilePage.module.scss";
import sliderStyles from "./ProfileSlider.scss";
import { MEDIA_URL } from "../../../../redux/API/BASE_URL";
import useMobileDetect from "use-mobile-detect-hook";

const ProfileSlider = ({ additional_photos, main_photo }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: isMobile ? true : false,
  };

  return (
    <Slider {...settings}>
      {[{ thumbnail: main_photo }, ...additional_photos].map((item, index) => (
        <div key={index} className={styles.slide}>
          <img src={MEDIA_URL + item.thumbnail} alt="работа" />
        </div>
      ))}
    </Slider>
  );
};

export default ProfileSlider;
