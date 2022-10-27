import React from "react";
import useMobileDetect from "use-mobile-detect-hook";

const Container = ({ children }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  return (
    <div
      style={
        !isMobile
          ? { width: "1100px", margin: "0 auto" }
          : { width: "80%", margin: "0 auto" }
      }
    >
      {children}
    </div>
  );
};

export default Container;
