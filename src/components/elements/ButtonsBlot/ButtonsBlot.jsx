import React from "react";
import styles from "./ButtonsBlot.module.scss";

import ButtonBlot from "./ButtonBlot/ButtonBlot";

import Blot_1 from "./Blots/Blot_1";
import Blot_2 from "./Blots/Blot_2";
import Blot_3 from "./Blots/Blot_3";
import Blot_4 from "./Blots/Blot_4";

import useMobileDetect from "use-mobile-detect-hook";

const ButtonsBlot = ({
  activeExhibition,
  setActiveExhibition,
  exhibitionsCount,
}) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let range = (n) => Array.from(Array(n).keys());
  const buttonsImagesArray = [<Blot_1 />, <Blot_2 />, <Blot_3 />, <Blot_4 />];
  if (exhibitionsCount === 1) {
    return;
  }

  return (
    <ul
      className={
        isMobile ? `${styles.buttons} ${styles.buttons_mobile}` : styles.buttons
      }
    >
      {range(exhibitionsCount).map((item, index) => {
        return (
          <ButtonBlot
            isActive={activeExhibition === index}
            setActiveExhibition={setActiveExhibition}
            key={index}
            id={index}
            image={buttonsImagesArray[index % 4]}
          />
        );
      })}
    </ul>
  );
};

export default ButtonsBlot;
