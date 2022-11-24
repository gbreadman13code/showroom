import React, { useState, useEffect } from 'react';
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

  console.log(
    partners.filter((par) => par.id === activePartner)[0]?.promotions
  );

  useEffect(() => {
    document
      .querySelector('.slick-active [class*="PartnersCard_image"]')
      ?.click();
  });

  let setActivePartner = (id) => {
    _setActivePartner(id);
  };

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

    afterChange: (oldIndex, newIndex) => {
      document
        .querySelector('.slick-active [class*="PartnersCard_image"]')
        .click();
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
          <Slider {...settings}>
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
                id={item.id}
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

        {partners.filter((par) => par.id === activePartner)[0]?.promotions}
      </div>
    </div>
  );
  //
};

export default PartnersProfile;
