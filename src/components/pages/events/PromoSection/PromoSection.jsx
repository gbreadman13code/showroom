import React from 'react';
import styles from './PromoSection.module.scss';

import logo_1 from '../../../../assets/img/white_logos/white-logo_01.svg';
import logo_2 from '../../../../assets/img/white_logos/white-logo_02.svg';
import logo_3 from '../../../../assets/img/white_logos/white-logo_03.svg';
import logo_4 from '../../../../assets/img/white_logos/white-logo_04.svg';
import Container from '../../../templates/Container';
import PromoSlider from './Slider/PromoSlider';

const PromoSection = () => {
  const logos = [logo_1, logo_2, logo_3, logo_4];
  let promoTitle = 'Российская креативная неделя';
  let promoDates = '24-25 ноября 2022';
  let promoCity = 'Красноярск';
  let promoPlace = 'Конгресс-Холл СФУ';

  return (
    <div className={styles.promo}>
      <Container>
        <div className={styles.container}>
          <h1 className={styles.ptomo_title}>{promoTitle}</h1>

          <div className={styles.info}>
            <p className={styles.dates}>{promoDates}</p>
            <p className={styles.city}>{promoCity}</p>
            <p className={styles.place}>{promoPlace}</p>

            <button className={styles.regisrtation}>Регистрация</button>

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
