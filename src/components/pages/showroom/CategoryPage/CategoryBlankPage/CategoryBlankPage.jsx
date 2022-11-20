import React, { useEffect, useState } from 'react';
import styles from './CategoryBlankPage.module.scss';

const CategoryBlankPage = () => {
  return (
    <div className={styles.wrapper}>
      <span> К сожалению, магазинов в этой категории пока нет, но скоро точно появятся!</span>
    </div>
  );
};

export default CategoryBlankPage;
