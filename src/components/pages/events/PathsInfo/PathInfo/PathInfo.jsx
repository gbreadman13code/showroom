import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import RecommendationPlace from "./RecommendationPlace/RecommendationPlace";
import styles from "./PathInfo.module.scss";

const PathInfo = ({ path }) => {
  let [time, setTime] = useState("00:00");
  useEffect(() => {
    setTime(getPathTime(path));
  }, [path]);
  return (
    <div className={styles.path}>
      <div className={styles.info}>
        <div>{time}</div>
        <div>{path.event_title}</div>
        <div>
          {path.event_location_start} | {path.event_location_end}
        </div>
        <div>{path.description && HTMLReactParser(path.description)}</div>
      </div>
      <div className={styles.recomend} data-recomend="Рекомендуем посетить">
        <div>{path.recommendation}</div>
        <div>
          {path.places &&
            path.places.map((place) => (
              <RecommendationPlace key={place.id} place={place} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PathInfo;

function getPathTime(path) {
  let date = new Date(path.start_datetime);
  return `${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
}
