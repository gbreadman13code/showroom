import React, { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './PartnersProfile.module.scss';

import useMobileDetect from 'use-mobile-detect-hook';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import stylesSlider from './PartnersSliderStyles.scss';

import PartnersCard from '../PartnersCard/PartnersCard';

const modes = ['out-in', 'in-out'];

const PartnersProfile = ({ partners }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let [activePartner, _setActivePartner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [showDescription, setShowDescription] = useState(false);
  const [mode, setMode] = useState('out-in');
  const [state, setState] = useState(true);
  // const helloRef = useRef(null);
  // const goodbyeRef = useRef(null);
  // const nodeRef = state ? helloRef : goodbyeRef;

  let slider = useRef();

  useEffect(() => {
    if (isMobile) {
      document
        .querySelector('.slick-active [class*="PartnersCard_image"]')
        ?.click();
    } else {
      document
        .querySelector(
          '[class*="PartnersCard_card"] [class*="PartnersCard_image"]'
        )
        ?.click();
    }
    setCurrentSlide(0);
  }, [partners]);

  let setActivePartner = (id) => {
    _setActivePartner(id);
  };

  let settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,

    afterChange: (oldIndex, newIndex) => {
      document
        .querySelector('.slick-active [class*="PartnersCard_image"]')
        .click();
      setCurrentSlide(oldIndex);
    },
  };

  return (
    <div
      className={
        isMobile
          ? `${styles.profile} ${styles.profile__mobile}`
          : styles.profile
      }
    >
      {isMobile ? (
        <div
          id="partners_slider"
          className={`${styles.cards} ${styles.cards__mobile}`}
        >
          <Slider {...settings} ref={slider}>
            {partners.map((item) => {
              return (
                <PartnersCard
                  key={item.id}
                  image={item.cropped_image}
                  title={item.title}
                  vk={item.vk_link}
                  telegram={item.tg_link}
                  website={item.site_link}
                  setActivePartner={setActivePartner}
                  id={item.id}
                  partners={partners}
                  sliderGo={slider.current}
                  activeSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                />
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className={styles.cards}>
          {partners.map((item) => {
            return (
              <PartnersCard
                key={item.id}
                image={item.cropped_image}
                title={item.title}
                vk={item.vk_link}
                telegram={item.tg_link}
                website={item.site_link}
                setActivePartner={setActivePartner}
                active={activePartner}
                id={item.id}
                // showDescription={showDescription}
                // setShowDescription={setShowDescription}
                state={state}
                setState={setState}
              />
            );
          })}
        </div>
      )}

      <div
        className={
          isMobile ? `${styles.desc} ${styles.desc__mobile}` : styles.desc
        }
      >
        <div
          className={
            partners.filter((par) => par.id === activePartner)[0]?.promotions
              ? styles.have_actions
              : styles.not_actions
          }
        >
          <p
            className={
              isMobile
                ? `${styles.actions} ${styles.actions__mobile}`
                : styles.actions
            }
            type="button"
          >
            Акции
            <p className={styles.not_act}>нет акций</p>
          </p>
        </div>
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            classNames={styles.desc_text_animate}
            // in={showDescription}
            timeout={{ enter: 500, exit: 500 }}
            // unmountOnExit
          >
            <p className={styles.desc_text}>
              {
                partners.filter((par) => par.id === activePartner)[0]
                  ?.promotions
              }
            </p>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
  //
};

export default PartnersProfile;
