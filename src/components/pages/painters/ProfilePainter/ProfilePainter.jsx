import React from 'react';
import styles from './ProfilePainter.module.scss';
import Container from '../../../templates/Container';
import PageTemplate from '../../../templates/PageTemplate';

import useMobileDetect from 'use-mobile-detect-hook';

const ProfilePainter = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return <div>ProfilePainter</div>;
};

export default ProfilePainter;
