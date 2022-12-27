import React, { useState, useEffect } from 'react';
import styles from './PagePainters.module.scss';
import Container from '../../../templates/Container';
import PageTemplate from '../../../templates/PageTemplate';

import useMobileDetect from 'use-mobile-detect-hook';

import { getPainters } from '../../../../../src/redux/requests/getPainters';
import { MEDIA_URL } from '../../../../redux/API/BASE_URL';

import { Link } from 'react-router-dom';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stylesSlider from './PaintersSlider.scss';

const PagePainters = ({ setBackLink }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    getPainters().then((res) => {
      setCategories(res.results);
    });

    return () => {
      setBackLink('/painters/');
    };
  }, []);

  let settings = {
    fade: false,
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <PageTemplate
      // order={orderActive}
      // orderLink="/gallery/order"
      // orderDict={orderDict}
      >
        <Container>
          <section
            className={
              isMobile
                ? `${styles.painters} ${styles.painters__mobile}`
                : styles.painters
            }
          >
            <h1
              className={
                isMobile
                  ? `${styles.title} ${styles.title__mobile}`
                  : styles.title
              }
            >
              Художники
            </h1>

            {/* Список */}
            <ul
              className={
                isMobile ? `${styles.list} ${styles.list__mobile}` : styles.list
              }
            >
              {categories.map((item) => (
                // Художник
                <li
                  className={
                    isMobile
                      ? `${styles.painter} ${styles.painter__mobile}`
                      : styles.painter
                  }
                  key={item.id}
                >
                  <Link to={'/painters/' + item.id}>
                    <h3
                      className={
                        isMobile
                          ? `${styles.painter_nick} ${styles.painter_nick__mobile}`
                          : styles.painter_nick
                      }
                    >
                      {!item.nickname ? item.fio : item.nickname}
                    </h3>

                    {item.nickname ? (
                      <p
                        className={
                          isMobile
                            ? `${styles.painter_name} ${styles.painter_name__mobile}`
                            : styles.painter_name
                        }
                      >
                        {item.nickname ? item.fio : null}
                      </p>
                    ) : null}
                  </Link>

                  {/* Список картин */}
                  <div
                    className={
                      isMobile
                        ? `${styles.painter_list} ${styles.painter_list__mobile}`
                        : styles.painter_list
                    }
                    id="PaintersSlider"
                  >
                    <Slider {...settings}>
                      {item.pictures.map((pic) => (
                        // Картина
                        <Link
                          to={'/gallery/profile/' + pic.id}
                          className={
                            isMobile
                              ? `${styles.picture} ${styles.picture__mobile}`
                              : styles.picture
                          }
                          key={pic.id}
                        >
                          <img
                            src={MEDIA_URL + pic.thumbnail}
                            alt={pic.title}
                            width="74"
                            height="74"
                          />
                        </Link>
                      ))}
                    </Slider>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </PageTemplate>
    </>
  );
};

export default PagePainters;
