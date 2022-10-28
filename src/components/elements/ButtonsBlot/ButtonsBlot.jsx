import React from "react";
import styles from "./ButtonsBlot.module.scss";

import ButtonBlot from "./ButtonBlot/ButtonBlot";

import Blot_1 from "./Blots/Blot_1";
import Blot_2 from "./Blots/Blot_2";
import Blot_3 from "./Blots/Blot_3";
import Blot_4 from "./Blots/Blot_4";

const ButtonsBlot = () => {
  const ButtonsArray = [
    {
      id: 1,
      // eslint-disable-next-line react/jsx-pascal-case
      image: <Blot_1 />,
    },
    {
      id: 2,
      // eslint-disable-next-line react/jsx-pascal-case
      image: <Blot_2 />,
    },
    {
      id: 3,
      // eslint-disable-next-line react/jsx-pascal-case
      image: <Blot_3 />,
    },
    {
      id: 4,
      // eslint-disable-next-line react/jsx-pascal-case
      image: <Blot_4 />,
    },
  ];

  return (
    <ul className={styles.buttons}>
      {ButtonsArray.map((item) => {
        return <ButtonBlot key={item.id} id={item.id} image={item.image} />;
      })}
    </ul>
  );
};

export default ButtonsBlot;
