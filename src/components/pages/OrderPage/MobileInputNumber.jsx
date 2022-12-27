import React, { useEffect, useState } from "react";

import styles from "./OrderPage.module.scss";

const MobileInputNumber = ({ defaultValue, funcChange, quantity }) => {
  const [value, setValue] = useState(defaultValue);

  const decrement = () => {
    if (value <= 1) return;
    setValue(value - 1);
  };
  const increment = () => {
    if (value === quantity) return;
    setValue(value + 1);
  };

  useEffect(() => {
    funcChange(value);
  }, [value]);

  return (
    <div className={styles.mobile_value_filed}>
      <button
        onClick={decrement}
        className={
          value <= 1 ? `${styles.minus} ${styles.disabled}` : styles.minus
        }
      >
        -
      </button>
      {value}
      <button
        onClick={increment}
        className={
          value >= quantity ? `${styles.plus} ${styles.disabled}` : styles.plus
        }
      >
        +
      </button>
    </div>
  );
};

export default MobileInputNumber;
