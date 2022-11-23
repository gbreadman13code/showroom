import React from 'react';
import Footer from '../elements/Footer/Footer';
import Header from '../elements/Header/Header';
import Container from './Container';
import styles from './PageTemplate.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';
import MobileHeader from '../elements/MobileHeader/MobileHeader';
import MobileFooter from '../elements/Footer/MobileFooter';

const PageTemplate = ({ children, header, order, isFooter = true, headerBackground, orderLink }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <div className={styles.PageTemplate}>
      <Container>
        {isMobile ? (
          <MobileHeader header={header} order={order} headerBackground={headerBackground} orderLink={orderLink} />
        ) : (
          <Header header={header} order={order} headerBackground={headerBackground} orderLink={orderLink} />
        )}
      </Container>
      <main style={{ flex: '1 1 auto' }}>{children}</main>

      {isFooter ? isMobile ? <MobileFooter /> : <Footer /> : null}
    </div>
  );
};

export default PageTemplate;
