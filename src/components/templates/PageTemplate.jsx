import React from 'react';
import Footer from '../elements/Footer/Footer';
import Header from '../elements/Header/Header';
import Container from './Container';
import styles from './PageTemplate.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';
import MobileHeader from '../elements/MobileHeader/MobileHeader';
import MobileFooter from '../elements/Footer/MobileFooter';

const PageTemplate = ({ children, header, order }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div className={styles.PageTemplate}>

      <Container>
        {isMobile ? (
          <MobileHeader header={header} order={order} />
        ) : (
          <Header header={header} order={order} />
        )}
      </Container>
      <main style={{ flex: "1 1 auto" }}>{children}</main>

      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default PageTemplate;
