import React from "react";

import styles from "../MainPage.module.scss";
import DescriptionSlider from "./Slider/DescriptionSlider";

const MainPageContent = ({ data }) => {
  const { image, title, sub_title, description } = data;
  // const [test] = test;
  // console.log(test);
  return (
    <div className={styles.main_page_container}>
      <div className={styles.image_wrapper}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{sub_title}</h2>
        <div className={styles.slider_wrapper}>
          <DescriptionSlider description={description} />
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
