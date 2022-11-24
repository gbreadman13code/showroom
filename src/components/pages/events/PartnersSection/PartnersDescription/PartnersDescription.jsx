import React from 'react';
import styles from './PartnersDescription.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';

const PartnersDescription = (props) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <p
      className={
        isMobile ? `${styles.desc} ${styles.desc__mobile}` : styles.desc
      }
    >
      {props.description}
    </p>
  );
};

export default PartnersDescription;
