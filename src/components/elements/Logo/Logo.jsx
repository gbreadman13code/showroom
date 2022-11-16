import React from "react";
import { ReactComponent as LogoImage } from "../../../assets/img/logo.svg";
import { ReactComponent as MobileLogoImage } from "../../../assets/img/mobile-footer-logo.svg";
import useMobileDetect from "use-mobile-detect-hook";

const Logo = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return <div>{isMobile ? <MobileLogoImage /> : <LogoImage />}</div>;
};

export default Logo;
