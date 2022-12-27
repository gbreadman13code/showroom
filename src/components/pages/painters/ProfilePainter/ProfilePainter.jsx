import React, { useEffect, useState } from 'react';
import styles from './ProfilePainter.module.scss';
import Container from '../../../templates/Container';
import PageTemplate from '../../../templates/PageTemplate';

import HTMLReactParser from 'html-react-parser';

import { Link, useLocation, useParams } from 'react-router-dom';
import { getPainterProfile } from '../../../../redux/requests/getPainterProfile';
import { MEDIA_URL } from '../../../../redux/API/BASE_URL';

import useMobileDetect from 'use-mobile-detect-hook';

import { ReactComponent as Icon_vk } from '../../../../assets/img/icon_vk.svg';
import { ReactComponent as Icon_tlgrm } from '../../../../assets/img/icon_telegram.svg';

import { ReactComponent as GoBackArrow } from '../../../../assets/img/arrow-left.svg';
import { ReactComponent as MobileGoBackArrow } from '../../../../assets/img/showroom/goBackMobile.svg';

const ProfilePainter = ({ setBackLink }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let painterId = useParams();
  let location = useLocation();
  let [painter, setPainter] = useState({});

  useEffect(() => {
    getPainterProfile(painterId.id).then((res) => {
      setPainter(res);
    });

    return () => {
      setBackLink('/painters/' + painterId?.id);
    };
  }, [location]);

  return (
    <>
      <PageTemplate>
        <Container>
          <div className={styles.backArrow}>
            {isMobile ? (
              <Link to={`/painters/`}>
                {' '}
                <MobileGoBackArrow />
              </Link>
            ) : (
              <Link to={`/painters/`}>
                {' '}
                <GoBackArrow /> Назад
              </Link>
            )}
          </div>
          <section
            className={
              isMobile
                ? `${styles.sectionPainter} ${styles.sectionPainter__mobile}`
                : styles.sectionPainter
            }
          >
            <div
              className={
                isMobile ? `${styles.info} ${styles.info__mobile}` : styles.info
              }
            >
              <div
                className={
                  isMobile
                    ? `${styles.image} ${styles.image__mobile}`
                    : styles.image
                }
              >
                <img
                  src={painter.photo}
                  alt={painter.fio}
                  width="315"
                  height="auto"
                />
              </div>
              <h1
                className={
                  isMobile
                    ? `${styles.name} ${styles.name__mobile}`
                    : styles.name
                }
              >
                {painter.fio}
              </h1>
              <p
                className={
                  isMobile
                    ? `${styles.short} ${styles.short__mobile}`
                    : styles.short
                }
              >
                {painter.short_description}
              </p>

              <h2
                className={
                  isMobile
                    ? `${styles.title_h2} ${styles.title_h2__mobile}`
                    : styles.title_h2
                }
              >
                Биография
              </h2>
              <div
                className={
                  isMobile
                    ? `${styles.biography} ${styles.biography__mobile}`
                    : styles.biography
                }
              >
                <div>
                  {painter.biography && HTMLReactParser(painter.biography)}
                </div>
              </div>
              <div
                className={
                  isMobile
                    ? `${styles.social} ${styles.social__mobile}`
                    : styles.social
                }
              >
                {painter.tg_link ? (
                  <a
                    href={'//' + painter.tg_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon_tlgrm />
                  </a>
                ) : null}

                {painter.vk_link ? (
                  <a
                    href={'//' + painter.vk_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon_vk />
                  </a>
                ) : null}
              </div>
            </div>
          </section>

          <section
            className={
              isMobile
                ? `${styles.pictures} ${styles.pictures__mobile}`
                : styles.pictures
            }
          >
            <h2
              className={
                isMobile
                  ? `${styles.title_h2} ${styles.title_h2__mobile}`
                  : styles.title_h2
              }
            >
              Картины художника
            </h2>

            <div
              className={
                isMobile
                  ? `${styles.wrapper} ${styles.wrapper__mobile}`
                  : styles.wrapper
              }
            >
              {painter.pictures?.map((item) => (
                <Link
                  to={'/gallery/profile/' + item.id}
                  className={
                    isMobile
                      ? `${styles.picture_item} ${styles.picture_item__mobile}`
                      : styles.picture_item
                  }
                  key={item.id}
                >
                  <div
                    className={
                      isMobile
                        ? `${styles.picture} ${styles.picture__mobile}`
                        : styles.picture
                    }
                  >
                    <img src={MEDIA_URL + item.thumbnail} alt={item.title} />

                    <div
                      className={
                        isMobile
                          ? `${styles.pic_wrapper} ${styles.pic_wrapper__mobile}`
                          : styles.pic_wrapper
                      }
                    >
                      <p
                        className={
                          isMobile
                            ? `${styles.title} ${styles.title__mobile}`
                            : styles.title
                        }
                      >
                        {item.title}
                      </p>
                      <p
                        className={
                          isMobile
                            ? `${styles.price} ${styles.price__mobile}`
                            : styles.price
                        }
                      >
                        {item.price.slice(0, -3) + ' ₽'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </PageTemplate>
    </>
  );
};

export default ProfilePainter;
