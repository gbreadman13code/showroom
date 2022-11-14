import React, { useEffect, useState } from 'react';
import Container from '../../../templates/Container';
import PageTemplate from '../../../templates/PageTemplate';

import styles from './MainPage.module.scss';
import { useSelector } from 'react-redux';
import MainPageContent from './MainPaigeComponents/MainPageContent';
import ColorWrapper from '../../../elements/ColorWrapper/ColorWrapper';
import MasonryBlock from '../../../elements/MasonryBlock/MasonryBlock';
import ExhibitionImage from '../../../elements/ExhibitionImage/ExhibitionImage';
import MobileMainPageContent from './MainPaigeComponents/MobileMainPageContent';
import useMobileDetect from 'use-mobile-detect-hook';
import background from '../../../../assets/img/promo_background.jpg';

const MainPage = () => {
  const [exhibitions, setExhibitions] = useState(false);
  let [activeExhibition, _setActiveExhibition] = useState(0);

  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const data = useSelector((state) => state.exhibitions.exhibitions);

  const COLORS = ['#4F4B98', '#F0E400', '#2CA99B', '#D6358C'];

  const IMAGES_PER_PAGE = 12;

  let parsePicturesArray = (array, pagesQuantity, picturesPerPage) => {
    let arrayCopy = [...array];
    let rez = [];
    for (let i = 0; i < pagesQuantity; i++) {
      let page = [];
      for (let i = 0; i < picturesPerPage; i++) {
        page.push(arrayCopy.shift());
      }
      rez.push(page);
    }

    return rez;
  };

  let getNextColor = (pageIndex) => {
    return COLORS[pageIndex % COLORS.length];
  };

  let pages = [];
  let sliderText;
  if (exhibitions) {
    let firstExhibition = exhibitions[activeExhibition];
    sliderText = firstExhibition.description;

    let exhibition_pictures = firstExhibition.pictures;
    let pagesQuantity = Math.ceil(exhibition_pictures.length / IMAGES_PER_PAGE);
    pages = parsePicturesArray(exhibition_pictures, pagesQuantity, IMAGES_PER_PAGE);
  }
  let setActiveExhibition = (exhibitionNumber) => {
    if (exhibitionNumber >= exhibitions.length) {
      _setActiveExhibition(exhibitionNumber % exhibitions.length);
    } else if (exhibitionNumber < 0) {
      setActiveExhibition(-exhibitionNumber);
    } else {
      _setActiveExhibition(exhibitionNumber);
    }
  };
  useEffect(() => {
    if (data.length > 0) {
      setExhibitions(data);
    }
  }, [data]);

  return (
    <PageTemplate>
      <canvas id='noisy-canvas' className={styles.noisy_canvas}></canvas>
      <Container>
        {exhibitions &&
          (isMobile ? (
            <MobileMainPageContent
              activeExhibition={activeExhibition}
              setActiveExhibition={setActiveExhibition}
              exhibitionsCount={exhibitions.length}
              data={exhibitions[activeExhibition]}
              sliderContent={sliderText}
            />
          ) : (
            <MainPageContent
              activeExhibition={activeExhibition}
              setActiveExhibition={setActiveExhibition}
              exhibitionsCount={exhibitions.length}
              data={exhibitions[activeExhibition]}
              sliderContent={sliderText}
            />
          ))}
      </Container>
      {isMobile ? (
        <div className={styles.mobile_paletteWrapper}>
          <div className={styles.palette_bg}></div>
        </div>
      ) : (
        <div className={styles.paletteWrapper}>
          <div className={styles.palette_bg}>
            {exhibitions && <img src={exhibitions[activeExhibition].background_image} alt='' />}
          </div>
        </div>
      )}
      {exhibitions && (
        <>
          {pages.map((page, index) => {
            return (
              <ColorWrapper color={getNextColor(index)} key={index} activeExhibition={activeExhibition}>
                <MasonryBlock>
                  {page.map(
                    (item, index) =>
                      item && (
                        <ExhibitionImage
                          key={index}
                          url={item.thumbnail}
                          author={item.author}
                          name={item.title}
                          id={item.id}
                        />
                      )
                  )}
                </MasonryBlock>
              </ColorWrapper>
            );
          })}
        </>
      )}
    </PageTemplate>
  );
};

export default MainPage;
