import React from "react";
import Masonry from "react-masonry-css";

import useMobileDetect from "use-mobile-detect-hook";

import styles from "./MasonryBlock.module.scss";

const MasonryBlock = ({ children }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <Masonry
      breakpointCols={isMobile ? 1 : 4}
      className={
        isMobile ? styles.my_masonry_grid_mobile : styles.my_masonry_grid
      }
      columnClassName={
        isMobile
          ? styles.my_masonry_grid_column_mobile
          : styles.my_masonry_grid_column
      }
    >
      {children}
    </Masonry>
  );
};

export default MasonryBlock;
