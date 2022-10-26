import React from 'react';
import Logo from '../../../assets/img/footer-logo.svg';
import MobileLogo from '../../../assets/img/mobile-footer-logo.svg';
import useMobileDetect from 'use-mobile-detect-hook';


const FooterLogo = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <img src={isMobile ? MobileLogo : Logo} alt="logo" />
  )
}

export default FooterLogo;