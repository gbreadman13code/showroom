import React, { useEffect, useState } from "react";
import styles from "../PathDays/PathDays.module.scss";

const Days = ({ days, setActiveDay }) => {
  console.log(setActiveDay);
  return (
    <div className={styles.days}>
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => setActiveDay(day)}
          className={setActiveDay ? styles.active : ""}
        >
          <span>{day}</span>
        </button>
      ))}
    </div>
  );
};

export default Days;
