import React from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';

import styles from './ContactsPage.module.scss';

import mir from '../../../../assets/img/mir.png';
import visa from '../../../../assets/img/visa.png';
import master from '../../../../assets/img/master.png';
import maestro from '../../../../assets/img/maestro.png';
import green_slash from '../../../../assets/img/green-slash.svg';

import useMobileDetect from 'use-mobile-detect-hook';

const ContactsPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <PageTemplate order={true}>
      <Container>
        <div style={{ marginBottom: 80 }}>
          <h1>Доставка по всей территории РФ</h1>
          <div className={isMobile ? styles.mobile_point_wrap : styles.point_wrap}>
            <div>
              <div className={styles.left_text}>
                <span>От 1 дня</span>
                <p>Мы стараемся выполнить доставку в течение 5 дней после получения заказа</p>
              </div>
              <div className={styles.slash}>
                <img src={green_slash} alt='.' />
              </div>
              <div className={styles.right_text}>
                <p>
                  При этом сроки могут быть индивидуальными, если работа в данный момент участвует в выставке, к работе
                  заказано оформление или находится в другом регионе. Мы обязательно связываемся с вами, чтобы
                  согласовать удобный для вас день и время доставки.
                </p>
              </div>
            </div>
            {/* <div>
              <div className={styles.left_text}>
                <span>
                  {" "}
                  <img src={dpd} alt="dpd delivery" />{" "}
                </span>
                <p>
                  Доставка осуществляется международной курьерской службой DPD
                </p>
              </div>
              <div className={styles.slash}>
                <img src={green_slash} alt="." />
              </div>
              <div className={styles.right_text}>
                <p>
                  Заказы мы отправляем курьерской службой DPD. Рассчет стоимости
                  доставки осуществляется автоматически и включается в стоимость
                  заказа. Ваша работа будет застрахована в полном объеме.
                </p>
              </div>
            </div> */}
          </div>

          <div className={styles.payment}>
            <span>Способы оплаты</span>
            <p>
              Вы можете оплачивать заказ, любым удобным для вас способом: Банковской картой Visa, Mastercard, Maestro,
              Мир
            </p>
            <div className={styles.card_wrapper}>
              <img src={mir} alt='' />
              <img src={visa} alt='' />
              <img src={master} alt='' />
              <img src={maestro} alt='' />
            </div>
          </div>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default ContactsPage;
