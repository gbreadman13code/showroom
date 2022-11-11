import React from 'react';
import PageTemplate from '../../../templates/PageTemplate';

import useMobileDetect from 'use-mobile-detect-hook';
import PromoSection from '../PromoSection/PromoSection';

const PrimaryPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <PageTemplate header='absolute'>
      <PromoSection />
    </PageTemplate>
  );
};

export default PrimaryPage;
