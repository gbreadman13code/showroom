import React from 'react';
import styles from './Footer.module.scss';
import FooterLogo from './FooterLogo';

import Location from '../../../assets/img/gps.svg';
import Phone from '../../../assets/img/phone.svg';
import Mail from '../../../assets/img/mail.svg';

import { ReactComponent as Icon_vk } from '../../../assets/img/icon_vk.svg';
import { ReactComponent as Icon_tlgrm } from '../../../assets/img/icon_telegram.svg';

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
              <li className={styles.contacts_item}>
                <img src={Phone} alt="phone" />
                <a href="tel:+7 (391) 219-19-69">+7 (391) 219-19-69</a>
              </li>
              <li className={styles.contacts_item}>
                <img src={Mail} alt="mail" />
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
                  target="_blank"
                  className={styles.social}
                  rel="noreferrer"
                >
                  <Icon_tlgrm />
                </a>
                <a
                  href="https://vk.com/industry_art"
                  target="_blank"
                  className={styles.social}
                  rel="noreferrer"
                >
                  <Icon_vk />
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
