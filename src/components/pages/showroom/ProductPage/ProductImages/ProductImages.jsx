import React, { useEffect, useState, useRef } from "react";
import styles from "./ProductImages.module.scss";
import useMobileDetect from "use-mobile-detect-hook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";
import { ReactComponent as SliderArrow } from "../../../../../assets/img/showroom/sliderArrow.svg";

const ProductImages = ({ images, title }) => {
  let [activeImage, setActiveImage] = useState({});
  let [isBeforeArrow, setIsBeforeArrow] = useState(false);
  let [isAfterArrow, setIsAfterArrow] = useState(true);
  useEffect(() => {
    setActiveImage(images[0]);
    let list = slider.current.innerSlider.list;
    let slides = list.querySelectorAll(".slick-slide");
    setIsAfterArrow(slides.length > 3);
  }, []);

  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const slider = useRef();
  let settings;
  if (isMobile) {
    settings = {
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      beforeChange: (oldIndex, newIndex) => {
        let list = slider.current.innerSlider.list;
        let slides = list.querySelectorAll(".slick-slide");
        setIsBeforeArrow(newIndex > 0);
        setIsAfterArrow(slides.length > newIndex + 3);
      },
    };
  } else {
    settings = {
      // fade: true,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      vertical: true,
      verticalSwiping: true,
      beforeChange: (oldIndex, newIndex) => {
        let list = slider.current.innerSlider.list;
        let slides = list.querySelectorAll(".slick-slide");
        setIsBeforeArrow(newIndex > 0);
        setIsAfterArrow(slides.length > newIndex + 3);
      },
    };
  }

  return (
    <div className={styles.productImages} id="productImages">
      <div className={styles.productImage}>
        <img src={activeImage.cropped_image} alt={title} />
      </div>

      <div
        className={styles.slider}
        style={{ display: images.length > 1 ? "" : "none" }}
      >
        {isAfterArrow && (
          <div
            className={styles.afterArrow}
            onClick={() => {
              slider.current.slickNext();
            }}
          >
            <SliderArrow />
          </div>
        )}

        <Slider {...settings} ref={slider}>
          {images.map((image) => (
            <div
              key={image.id}
              className={
                image.id === activeImage.id
                  ? `${styles.productAdditionalImage} ${styles.active}`
                  : styles.productAdditionalImage
              }
              onClick={() => {
                setActiveImage(image);
              }}
            >
              <img src={image.cropped_image} alt={title} />
            </div>
          ))}
        </Slider>
        {isBeforeArrow && (
          <div
            className={styles.beforeArrow}
            onClick={() => {
              slider.current.slickPrev();
            }}
          >
            <SliderArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImages;
