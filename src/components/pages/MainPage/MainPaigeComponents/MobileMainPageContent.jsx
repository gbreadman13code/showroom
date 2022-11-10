import React from "react";
import ButtonsBlot from "../../../elements/ButtonsBlot/ButtonsBlot";
import PalletSwitch from "../../../elements/PalletSwitch/PalletSwitch";

import styles from "../MainPage.module.scss";
import DescriptionSlider from "./Slider/DescriptionSlider";

const MobileMainPageContent = ({ data }) => {
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
        <DescriptionSlider description={description} />
      </div>

      {/* <ButtonsBlot /> */}
      <PalletSwitch title={title} />
    </div>
  );
};

export default MobileMainPageContent;
