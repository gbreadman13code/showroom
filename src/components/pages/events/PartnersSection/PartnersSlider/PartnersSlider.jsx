import React from 'react';
import styles from './PartnersSlider.scss';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnersSlider = ({ slides }) => {
  let settings = {
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    // swipeToSlide: true,
  };

  return (
    <div id="partners_slider">
      <Slider {...settings}>
        {slides.map((item) => {
          return;
        })}
      </Slider>
    </div>
  );
};

export default PartnersSlider;

//   return (
//     <div id='promoSlider'>
//       <Slider {...settings}>
//         {slides.map((item) => {
//           return item.link ? (
//             <a href={item.link} key={item.id} className={styles.slide}>
//               <img src={item.image} alt='logo' />
//             </a>
//           ) : (
//             <div key={item.id} className={styles.slide}>
//               <img src={item.image} alt='logo' />
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

// export default PromoSlider;
