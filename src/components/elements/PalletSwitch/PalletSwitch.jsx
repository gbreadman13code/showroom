import React from 'react';
import styles from './PalletSwitch.module.scss';

import pallet from '../../../assets/img/pallet-switch.svg';
import useMobileDetect from 'use-mobile-detect-hook';

const PalletSwitch = ({
  title,
  activeExhibition,
  setActiveExhibition,
  isActivateButtons,
}) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <div
      className={
        isMobile ? `${styles.switch__mobile} ${styles.switch}` : styles.switch
      }
    >
      <p>{title}</p>

      {isActivateButtons && <div></div>}

      <img src={pallet} alt="" />
    </div>
  );
};

export default PalletSwitch;
