import React from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import PromoSection from '../PromoSection/PromoSection';
import PromoPaths from '../PromoPaths/PromoPaths';
import PartnersSection from '../PartnersSection/PartnersSection';

import useMobileDetect from 'use-mobile-detect-hook';

const PrimaryPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <PageTemplate header='absolute'>
      <PromoSection />
      <PromoPaths />
      {/* <PartnersSection /> */}
    </PageTemplate>
  );
};

export default PrimaryPage;
