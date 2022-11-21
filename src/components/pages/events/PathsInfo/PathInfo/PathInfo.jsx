import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import RecommendationPlace from "./RecommendationPlace/RecommendationPlace";
import styles from "./PathInfo.module.scss";

import useMobileDetect from "use-mobile-detect-hook";

const PathInfo = ({ path }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  // console.log(path.places.length);

  let [time, setTime] = useState("00:00");
  useEffect(() => {
    setTime(getPathTime(path));
  }, [path]);
  return (
    <div
      className={
        isMobile ? `${styles.path} ${styles.path__mobile}` : styles.path
      }
    >
      <div
        className={
          isMobile ? `${styles.info} ${styles.info__mobile}` : styles.info
        }
      >
        <div
          className={
            isMobile ? `${styles.time} ${styles.time__mobile}` : styles.time
          }
        >
          {time}
        </div>
        <div
          className={
            isMobile
              ? `${styles.event_title} ${styles.event_title__mobile}`
              : styles.event_title
          }
        >
          {path.event_title}
        </div>
        <div
          className={
            isMobile
              ? `${styles.location} ${styles.location__mobile}`
              : styles.location
          }
        >
          {path.event_location_start} | {path.event_location_end}
        </div>
        <div
          className={
            isMobile ? `${styles.desc} ${styles.desc__mobile}` : styles.desc
          }
        >
          {path.description && HTMLReactParser(path.description)}
        </div>
      </div>

      {/* Блок рекомендаций */}

      {isMobile ? (
        // Мобилка
        <div
          className={`${styles.recomend} ${styles.recomend__mobile}`}
          data-recomend="Рекомендуем посетить"
          style={
            path.places?.length === 0
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <div
            className={`${styles.recomend_text} ${styles.recomend_text__mobile}`}
          >
            {path.recommendation}
          </div>
          <div className={`${styles.grid} ${styles.grid__mobile}`}>
            {path.places &&
              path.places.map((place) => (
                <RecommendationPlace key={place.id} place={place} />
              ))}
          </div>
        </div>
      ) : (
        // Десктоп
        <div
          style={
            path.places?.length === 0
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <div className={styles.recomend} data-recomend="Рекомендуем посетить">
            <div className={styles.grid}>
              {path.places &&
                path.places.map((place) => (
                  <RecommendationPlace key={place.id} place={place} />
                ))}
            </div>
          </div>
          <div className={styles.recomend_text}>{path.recommendation}</div>
        </div>
      )}

      {/* <div
        style={
          path.places?.length === 0 ? { display: "none" } : { display: "block" }
        }
        className={
          isMobile
            ? `${styles.recomend} ${styles.recomend__mobile}`
            : styles.recomend
        }
        data-recomend="Рекомендуем посетить"
      >
        <div
          className={
            isMobile ? `${styles.grid} ${styles.grid__mobile}` : styles.grid
          }
        >
          {path.places &&
            path.places.map((place) => (
              <RecommendationPlace key={place.id} place={place} />
            ))}
        </div>
        <div
          className={
            isMobile
              ? `${styles.recomend_text} ${styles.recomend_text__mobile}`
              : styles.recomend_text
          }
        >
          {path.recommendation}
        </div>
      </div> */}
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
