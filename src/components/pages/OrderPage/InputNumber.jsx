import React, { useEffect, useState } from "react";

import styles from "./OrderPage.module.scss";

const InputNumber = ({ defaultValue, funcChange, quantity }) => {
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
    <div className={styles.input_number}>
      <div className={styles.value_filed}>
        <button className={styles.minus} onClick={decrement}>
          -
        </button>
        {value}
        <button className={styles.plus} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
