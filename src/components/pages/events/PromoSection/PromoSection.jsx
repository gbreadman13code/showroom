import React, { useEffect, useState } from "react";
import styles from "./PromoSection.module.scss";

import Container from "../../../templates/Container";
import PromoSlider from "./Slider/PromoSlider";
import { getEvents } from "../../../../redux/requests/getEvents";

import useMobileDetect from "use-mobile-detect-hook";

const PromoSection = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [logos, setLogos] = useState([]);

  let [promoTitle, setPromoTitle] = useState("");
  let [promoDates, setPromoDates] = useState("");
  let [promoCity, setPromoCity] = useState("");
  let [promoPlace, setPlace] = useState("");
  let [backgroundImage, setbackgroundImage] = useState("");
  let [registrationLink, setRegistrationLink] = useState("");
  useEffect(() => {
    getEvents().then((res) => {
      let eventsData = res.results[0];
      setPromoDates(eventsData.dates);
      setPromoCity(eventsData.main_location);
      setPlace(eventsData.sub_location);
      setPromoTitle(eventsData.title);
      setLogos(eventsData.partners);
      setbackgroundImage(eventsData.background);
      setRegistrationLink(eventsData.registration_link);
    });
  }, []);
  return (
    <div
      className={
        isMobile ? `${styles.promo} ${styles.promo__mobile}` : styles.promo
      }
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <Container>
        <div
          className={
            isMobile
              ? `${styles.container} ${styles.container__mobile}`
              : styles.container
          }
        >
          <h1
            className={
              isMobile
                ? `${styles.promo_title} ${styles.promo_title__mobile}`
                : styles.promo_title
            }
          >
            {promoTitle}
          </h1>

          <div
            className={
              isMobile ? `${styles.info} ${styles.info__mobile}` : styles.info
            }
          >
            <p
              className={
                isMobile
                  ? `${styles.dates} ${styles.dates__mobile}`
                  : styles.dates
              }
            >
              {promoDates}
            </p>
            <p
              className={
                isMobile ? `${styles.city} ${styles.city__mobile}` : styles.city
              }
            >
              {promoCity}
            </p>
            <p
              className={
                isMobile
                  ? `${styles.place} ${styles.place__mobile}`
                  : styles.place
              }
            >
              {promoPlace}
            </p>
            {registrationLink && (
              <a
                href={registrationLink}
                className={
                  isMobile
                    ? `${styles.regisrtation} ${styles.regisrtation__mobile}`
                    : styles.regisrtation
                }
              >
                Регистрация
              </a>
            )}

            {/* <div className={styles.slider}>
              {logos.map((item) => {
                return <img src={item} alt="logo" />;
              })}
            </div> */}
          </div>
          <div
            className={
              isMobile
                ? `${styles.slider} ${styles.slider__mobile}`
                : styles.slider
            }
          >
            <PromoSlider slides={logos} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromoSection;
