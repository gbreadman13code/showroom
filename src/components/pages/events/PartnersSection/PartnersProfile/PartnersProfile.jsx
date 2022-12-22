import React, { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './PartnersProfile.module.scss';

import useMobileDetect from 'use-mobile-detect-hook';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import stylesSlider from './PartnersSliderStyles.scss';

import PartnersCard from '../PartnersCard/PartnersCard';

const PartnersProfile = ({ partners }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let [activePartner, _setActivePartner] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mode = 'out-in';
  const [state, setState] = useState();
  const [stateCard, setStateCard] = useState();

  useEffect(() => {
    setState(partners.filter((par) => par.id === activePartner)[0]?.promotions);
  }, [partners, activePartner]);

  const descriptionRef = useRef(null);
  const cardRef = useRef(null);
  let slider = useRef();
  let slickGoTo = (id) => {
    slider.current.slickGoTo(id);
  };
  useEffect(() => {
    setActivePartner(partners[0]?.id);
  }, [partners]);

  let setActivePartner = (id) => {
    _setActivePartner(id);
  };

  let settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,

    afterChange: (oldIndex, newIndex) => {
      document.querySelector('.slick-active [class*="PartnersCard_image"]').click();
      setCurrentSlide(oldIndex);
    },
  };

  return (
    <div className={isMobile ? `${styles.profile} ${styles.profile__mobile}` : styles.profile}>
      {isMobile ? (
        <SwitchTransition mode={mode}>
          <CSSTransition
            className={`${styles.cards} ${styles.cards__mobile} ${'fade'}`}
            key={partners[0]?.id}
            nodeRef={cardRef}
            timeout={{ enter: 250, exit: 250 }}
            unmountOnExit>
            <div id='partners_slider' ref={cardRef} className={`${styles.cards} ${styles.cards__mobile}`}>
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
                      sliderGo={slickGoTo}
                      activeSlide={currentSlide}
                      setCurrentSlide={setCurrentSlide}
                    />
                  );
                })}
              </Slider>
            </div>
          </CSSTransition>
        </SwitchTransition>
      ) : (
        <SwitchTransition mode={mode}>
          <CSSTransition
            className={`${styles.cards} ${'fade'}`}
            key={partners[0]?.id}
            nodeRef={cardRef}
            timeout={{ enter: 250, exit: 250 }}
            unmountOnExit>
            <div ref={cardRef}>
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
                  />
                );
              })}
            </div>
          </CSSTransition>
        </SwitchTransition>
      )}

      <div className={isMobile ? `${styles.desc} ${styles.desc__mobile}` : styles.desc}>
        <div
          className={
            partners.filter((par) => par.id === activePartner)[0]?.promotions ? styles.have_actions : styles.not_actions
          }>
          <p className={isMobile ? `${styles.actions} ${styles.actions__mobile}` : styles.actions} type='button'>
            Акции
          </p>
        </div>
        <SwitchTransition mode={mode}>
          <CSSTransition
            className='fade_swipe'
            key={state}
            nodeRef={descriptionRef}
            timeout={{ enter: 250, exit: 250 }}
            unmountOnExit>
            <p className={styles.desc_text} ref={descriptionRef}>
              {state?.length === 0 ? 'Нет акций' : state}
            </p>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
  //
};

export default PartnersProfile;
