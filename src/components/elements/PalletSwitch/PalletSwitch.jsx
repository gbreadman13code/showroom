import React from 'react';
import styles from './PalletSwitch.module.scss';

import pallet from '../../../assets/img/pallet-switch.svg';
import useMobileDetect from 'use-mobile-detect-hook';

const PalletSwitch = ({ title, activeExhibition, setActiveExhibition, isActivateButtons }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <div className={isMobile ? `${styles.switch__mobile} ${styles.switch}` : styles.switch}>
      <p>{title}</p>

      {isActivateButtons && (
        <div>
          <button
            className={`${styles.button__left} ${styles.button}`}
            type='button'
            onClick={() => {
              setActiveExhibition(activeExhibition - 1);
            }}>
            <span></span>
          </button>

          <button
            className={`${styles.button__right} ${styles.button}`}
            type='button'
            onClick={() => {
              setActiveExhibition(activeExhibition + 1);
            }}>
            <span></span>
          </button>
        </div>
      )}

      <img src={pallet} alt='' />
    </div>
  );
};

export default PalletSwitch;
