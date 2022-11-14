import React, { useEffect, useState } from "react";
import styles from "./Months.module.scss";

const Months = ({ months, setActiveMonth }) => {
  return (
    <div className={styles.months}>
      {months.map((month, index) => (
        <button key={index} onClick={() => setActiveMonth(month)}>
          {month}
        </button>
      ))}
    </div>
  );
};

export default Months;
