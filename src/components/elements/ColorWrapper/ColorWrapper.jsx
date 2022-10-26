import React, { useEffect, useState } from "react";
import Container from "../../templates/Container";
import useMobileDetect from "use-mobile-detect-hook";

import styles from "./ColorWrapper.module.scss";
import { useSelector } from "react-redux";

const ColorWrapper = ({ name, color, children }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  const [title, setTitle] = useState("");
  const exhibitions = useSelector((state) => state.exhibitions.exhibitions[0]);

  useEffect(() => {
    if (exhibitions) {
      setTitle(exhibitions.title);
    }
  }, [exhibitions]);

  // console.log(title);

  return (
    <div
      style={
        isMobile
          ? { backgroundColor: color, paddingTop: 60, paddingBottom: 30 }
          : { backgroundColor: color, paddingTop: 150, paddingBottom: 30 }
      }
      className={styles.colorWrapper}
      data-title={title}
    >
      <Container>{children}</Container>
    </div>
  );
};

export default ColorWrapper;
