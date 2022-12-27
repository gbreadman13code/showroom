import React, { useEffect, useState } from "react";
import styles from "./Months.module.scss";
import useMobileDetect from "use-mobile-detect-hook";

const Months = ({ months, setActiveMonth }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div
      className={
        isMobile ? `${styles.months__mobile} ${styles.months}` : styles.months
      }
    >
      {months.map((month, index) => (
        <button key={index} onClick={() => setActiveMonth(month)}>
          {month}
        </button>
      ))}
    </div>
  );
};

export default Months;
