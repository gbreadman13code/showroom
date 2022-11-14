import React from 'react';
import PalletSwitch from '../../../../elements/PalletSwitch/PalletSwitch';
import ButtonsBlot from '../../../../elements/ButtonsBlot/ButtonsBlot';

import styles from '../MainPage.module.scss';
import DescriptionSlider from './Slider/DescriptionSlider';

const MobileMainPageContent = ({ data, sliderContent, activeExhibition, setActiveExhibition, exhibitionsCount }) => {
  const { image, title, sub_title, description } = data;

  return (
    <div className={styles.mobile_main_page_container}>
      <div className={styles.mobile_main_image_wrapper}>
        <img src={image} alt={title} />
        <div className={styles.info}>
          <h1>{title}</h1>
          <h2>{sub_title}</h2>
        </div>
      </div>

      <div className={styles.mobile_slider_wrapper}>
        <DescriptionSlider description={description} sliderContent={sliderContent} />
      </div>

      <ButtonsBlot
        activeExhibition={activeExhibition}
        setActiveExhibition={setActiveExhibition}
        exhibitionsCount={exhibitionsCount}
      />
      <PalletSwitch
        title={title}
        activeExhibition={activeExhibition}
        setActiveExhibition={setActiveExhibition}
        isActivateButtons={exhibitionsCount > 2}
      />
    </div>
  );
};

export default MobileMainPageContent;
