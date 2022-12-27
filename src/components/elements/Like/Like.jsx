import React from "react";
import styles from "./Like.module.scss";
import logoLike from "../../../assets/img/like-common.svg";

const Like = () => {
  return (
    <button className={styles.like}>
      <svg
        className={`${styles.white} ${styles.active} ${styles.gray}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 24 22"
      >
        <g>
          <path
            className={styles.path}
            fill="#D6358C"
            d="M12,20.7C5.5,15.5-0.7,8.5,1.4,4.1C2.4,2,3.8,1,5.8,1c2.8,0,5.6,2.1,5.6,2.1L12,3.5l0.6-0.4
   c0,0,2.8-2.1,5.6-2.1c2,0,3.4,1,4.4,3.1C24.7,8.5,18.5,15.5,12,20.7z"
          />
          <path
            className={styles.path}
            fill="#FFFFFF"
            d="M18.2,2c1,0,2.4,0.3,3.5,2.5c1.7,3.7-3.9,10.1-9.7,14.9C6.2,14.7,0.6,8.3,2.3,4.6C3.4,2.3,4.8,2,5.8,2
   c2.4,0,5,1.9,5,1.9L12,4.8l1.2-0.9C13.2,3.9,15.8,2,18.2,2 M18.2,0c-3,0-6,2.1-6.2,2.3C11.8,2.1,8.8,0,5.8,0c-2,0-3.9,0.9-5.3,3.7
   C-2.9,10.9,11.8,21.8,12,22c0.2-0.2,14.9-11.1,11.5-18.3C22.2,0.9,20.2,0,18.2,0L18.2,0z"
          />
        </g>
      </svg>
    </button>
  );
};

export default Like;
