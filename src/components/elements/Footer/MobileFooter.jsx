import React from 'react';
import styles from './Footer.module.scss';
import FooterLogo from './FooterLogo';

import Location from '../../../assets/img/mobile-gps.svg';
import Phone from '../../../assets/img/mobile-phone.svg';
import Mail from '../../../assets/img/mobile-mail.svg';
import PinkSlash from '../../../assets/img/pink-slash.svg';

import Vk from '../../../assets/img/mob-vk.svg';
import VkFix from '../../../assets/img/vk.png';
import Tg from '../../../assets/img/tg.png';

import AgreementLink from '../../../assets/docs/Agreement.pdf';
import { Link } from 'react-router-dom';
import Container from '../../templates/Container';

const MobileFooter = () => {
  return (
    <footer className={styles.mobile_footer}>
      <Container>
        <div className={styles.footer_info}>
          <div className={styles.head_of_footer}>
            <FooterLogo />
            <p>АНО «Сибирский институт развития креативных индустрий»</p>
          </div>
          <div className={styles.middle_of_header}>
            <ul className={styles.contacts}>
              <li className={styles.address}>
                <img src={Location} alt='location' />
                <address>Красноярск, ул. Красной Армии, 10, стр. 4, оф. 302</address>
              </li>
              <li>
                <img src={Phone} alt='phone' /> <a href='tel:+7 (391) 219-19-69'>+7 (391) 219-19-69</a>
              </li>
              <li>
                <img src={Mail} alt='mail' /> <a href='mailto:info@industry.art'>info@industry.art</a>
              </li>
            </ul>
            <ul className={styles.docs}>
              <li>
                <img src={PinkSlash} alt='.' />
                <a href={AgreementLink} download target='_blank' rel='noopener noreferrer'>
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <img src={PinkSlash} alt='.' />
                <Link to={'/gallery/payment_and_delivery'}>Доставка и оплата</Link>
              </li>
            </ul>
          </div>
          <div className={styles.bottom_of_footer}>
            <p>
              <span>ОГРН: </span>1222400007500
            </p>
            <p>
              <span>ИНН: </span>2466291084
            </p>
          </div>
          <div className={styles.socials}>
            <a href='https://t.me/industry_art' _blank='target' className={styles.social}>
              <img src={Tg} alt='Telegram' />
            </a>
            <a href='https://vk.com/industry_art' _blank='target' className={styles.social}>
              <img src={VkFix} alt='vk.com' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default MobileFooter;
