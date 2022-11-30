import React from 'react';
import styles from './Footer.module.scss';
import FooterLogo from './FooterLogo';

import Location from '../../../assets/img/gps.svg';
import Phone from '../../../assets/img/phone.svg';
import Mail from '../../../assets/img/mail.svg';
import VkFix from '../../../assets/img/vk.png';
import tg from '../../../assets/img/tg.png';

import PinkSlash from '../../../assets/img/pink-slash.svg';

import AgreementLink from '../../../assets/docs/Agreement.pdf';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterLogo />
        <p className={styles.head_of_footer}>
          АНО «Сибирский институт развития креативных индустрий»
        </p>

        <div className={styles.footer_info}>
          <div className={styles.middle_of_header}>
            <ul className={styles.contacts}>
              <li>
                <img src={Location} alt="location" />
                Красноярск, ул. Красной Армии, 10, стр. 4, оф. 302
              </li>
              <li>
                <img src={Phone} alt="phone" />{' '}
                <a href="tel:+7 (391) 219-19-69">+7 (391) 219-19-69</a>
              </li>
              <li>
                <img src={Mail} alt="mail" />{' '}
                <a href="mailto:place@industry.art">place@industry.art</a>
              </li>
              <li className={styles.bottom_of_footer}>
                <p>
                  <span>ОГРН: </span>1222400007500
                </p>
                <p>
                  <span>ИНН: </span>2466291084
                </p>
              </li>
            </ul>
            <ul className={styles.docs}>
              <li className={styles.doc_links}>
                <a
                  href={AgreementLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PinkSlash} alt="." />
                  Пользовательское соглашение
                </a>
              </li>
              <li className={styles.doc_links}>
                <Link to={'/gallery/payment_and_delivery'}>
                  <img src={PinkSlash} alt="." />
                  Доставка и оплата
                </Link>
              </li>
              <li className={styles.socials}>
                <a
                  href="https://t.me/industry_art"
                  _blank="target"
                  className={styles.social}
                >
                  <img src={tg} alt="vk.com" />
                </a>
                <a
                  href="https://vk.com/industry_art"
                  _blank="target"
                  className={styles.social}
                >
                  <img src={VkFix} alt="Telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
