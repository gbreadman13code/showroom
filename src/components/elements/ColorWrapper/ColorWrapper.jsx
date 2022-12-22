import React, { useEffect, useState } from 'react';
import Container from '../../templates/Container';
import useMobileDetect from 'use-mobile-detect-hook';

import styles from './ColorWrapper.module.scss';
import { useSelector } from 'react-redux';

const ColorWrapper = ({ name, color, children, activeExhibition }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  const [title, setTitle] = useState('');
  const exhibitions = useSelector(
    (state) => state.exhibitions.exhibitions[activeExhibition]
  );

  useEffect(() => {
    if (exhibitions) {
      setTitle(exhibitions.title);
    }
  }, [exhibitions]);

  return (
    <div
      style={isMobile ? { backgroundColor: color } : { backgroundColor: color }}
      // className={styles.colorWrapper}
      className={
        isMobile
          ? `${styles.colorWrapper} ${styles.colorWrapper__mobile}`
          : styles.colorWrapper
      }
      // data-title={title}
    >
      <Container>{children}</Container>
    </div>
  );
};

export default ColorWrapper;
