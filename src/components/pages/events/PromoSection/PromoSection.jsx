import React, { useEffect, useState } from 'react';
import styles from './PromoSection.module.scss';

import Container from '../../../templates/Container';
import PromoSlider from './Slider/PromoSlider';
import { getEvents } from '../../../../redux/requests/getEvents';

const PromoSection = () => {
  const [logos, setLogos] = useState([]);

  let [promoTitle, setPromoTitle] = useState('');
  let [promoDates, setPromoDates] = useState('');
  let [promoCity, setPromoCity] = useState('');
  let [promoPlace, setPlace] = useState('');
  let [backgroundImage, setbackgroundImage] = useState('');
  let [registrationLink, setRegistrationLink] = useState('');
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
    <div className={styles.promo} style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <Container>
        <div className={styles.container}>
          <h1 className={styles.ptomo_title}>{promoTitle}</h1>

          <div className={styles.info}>
            <p className={styles.dates}>{promoDates}</p>
            <p className={styles.city}>{promoCity}</p>
            <p className={styles.place}>{promoPlace}</p>
            {registrationLink && (
              <a href={registrationLink} className={styles.regisrtation}>
                Регистрация
              </a>
            )}

            {/* <div className={styles.slider}>
              {logos.map((item) => {
                return <img src={item} alt="logo" />;
              })}
            </div> */}
            <div className={styles.slider}>
              <PromoSlider slides={logos} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromoSection;
