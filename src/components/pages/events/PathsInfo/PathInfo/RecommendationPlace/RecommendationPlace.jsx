import React from "react";
import styles from "./RecommendationPlace.module.scss";

const RecommendationPlace = ({ place }) => {
  return (
    <div className={styles.place}>
      <img src={place.image} alt="" className={styles.image} />
      <p className={styles.title}>{place.title}</p>
      <p className={styles.location}>{place.location}</p>
    </div>
  );
};

export default RecommendationPlace;
