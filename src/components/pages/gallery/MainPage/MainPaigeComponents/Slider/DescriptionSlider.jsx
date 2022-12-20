import React from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import styles from '../../MainPage.module.scss';
import sliderStyles from './Slider.scss';

const DescriptionSlider = ({ sliderContent }) => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };

  let description = sliderContent.split('\n');

  // console.log(typeof description);

  return (
    <div className={styles.description_text}>
      {description.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>

    // <Slider {...settings}>
    //   {description.map((item, index) => (
    //     <div className={styles.slide} key={index}>
    //       <p>{item}</p>
    //     </div>
    //   ))}
    // </Slider>
  );
};

export default DescriptionSlider;
