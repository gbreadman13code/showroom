import React, { useEffect, useState } from "react";
import styles from "../PathDays/PathDays.module.scss";
import useMobileDetect from "use-mobile-detect-hook";

const Days = ({ days, setActiveDay, activeDay }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  // const [isActive, setActive] = useState(true);

  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  return (
    <div
      className={
        isMobile ? `${styles.days__mobile} ${styles.days}` : styles.days
      }
    >
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => setActiveDay(day)}
          // onClick={() => setActiveDay(day) && toggleClass}
          className={day === activeDay ? styles.active : null}
        >
          <span data-days={day}>{day}</span>
        </button>
      ))}
    </div>
  );
};

export default Days;
