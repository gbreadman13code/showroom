import React, { useState, useEffect } from 'react';
import styles from './PartnersCard.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';

import { ReactComponent as Icon_vk } from '../../../../../assets/img/icon_vk.svg';
import { ReactComponent as Icon_tlgrm } from '../../../../../assets/img/icon_telegram.svg';
import { ReactComponent as Icon_web } from '../../../../../assets/img/icon_web.svg';

const PartnersCard = (props) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <button
      type="button"
      className={
        isMobile
          ? `${styles.card} ${styles.card__mobile}`
          : props.active === props.id
          ? `${styles.card} ${styles.card__active}`
          : styles.card
      }
    >
      <div
        className={
          isMobile
            ? `${styles.inner_image} ${styles.inner_image__mobile}`
            : styles.inner_image
        }
      >
        <div className={styles.img_shadow}></div>
        <img
          className={
            isMobile ? `${styles.image} ${styles.image__mobile}` : styles.image
          }
          src={props.image}
          alt=""
          width={isMobile ? '222' : '155'}
          height={isMobile ? '222' : '155'}
          onClick={() => {
            props.setActivePartner(props.id);
            // props.setShowDescription(!props.showDescription);
          }}
        />
        {props.partners?.length > 1 ? (
          isMobile ? (
            <div className={styles.dots}>
              {props.partners.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={
                      props.activeSlide === index
                        ? `${styles.dot_button} ${styles.dot_button__active}`
                        : styles.dot_button
                    }
                    onClick={() => {
                      props.sliderGo.slickGoTo(index);
                      props.setCurrentSlide(index);
                    }}
                  ></span>
                );
              })}
            </div>
          ) : null
        ) : null}
      </div>

      <h3
        className={
          isMobile ? `${styles.name} ${styles.name__mobile}` : styles.name
        }
      >
        {props.title}
      </h3>
      <div
        className={
          isMobile
            ? `${styles.social_list} ${styles.social_list__mobile}`
            : styles.social_list
        }
      >
        {props.vk ? (
          <a href={props.vk}>
            <Icon_vk />
          </a>
        ) : null}

        {props.telegram ? (
          <a href={props.telegram}>
            <Icon_tlgrm />
          </a>
        ) : null}

        {props.website ? (
          <a href={props.website}>
            <Icon_web />
          </a>
        ) : null}
      </div>
    </button>
  );
};

export default PartnersCard;
