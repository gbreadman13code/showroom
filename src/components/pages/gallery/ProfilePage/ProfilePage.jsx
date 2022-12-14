import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../../templates/Container';
import PageTemplate from '../../../templates/PageTemplate';
import { ReactComponent as GoBackArrow } from '../../../../assets/img/arrow-left.svg';
import { ReactComponent as MobileGoBackArrow } from '../../../../assets/img/mobile-left-arrow.svg';

import styles from './ProfilePage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setNewItemToOrderAction } from '../../../../redux/reducers/orderReducer';
import { MEDIA_URL } from '../../../../redux/API/BASE_URL';

import useMobileDetect from 'use-mobile-detect-hook';
import ProfileSlider from './Slider/ProfileSlider';

const ProfilePage = ({ addProductToOrder, orderDict, backLink }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [currentProfile, setCurrentProfile] = useState();
  const [currentOrder, setCurrentOrder] = useState();
  const [quantity, setQuantity] = useState(true);
  const [canIBuy, setCanIBay] = useState(true);
  const [descriptions, setDescriptions] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const exhibitions = useSelector((state) => state.exhibitions.exhibitions);
  let item = { pictures: [] };
  exhibitions.forEach((exhibition) => {
    item.pictures.unshift(...exhibition.pictures);
  });
  const orderList = useSelector((state) => state.order.orderList);

  useEffect(() => {
    if (!item) return;

    setCurrentProfile(item.pictures.find((point) => point.id === +params.id));
  }, [item, params.id]);

  useEffect(() => {
    setCurrentOrder(orderList.find((point) => point.id === +params.id));
  }, [orderList, params.id]);

  const addToOrder = () => {
    addProductToOrder(currentProfile);
  };

  useEffect(() => {
    if (currentProfile && currentProfile.description) {
      const arr = currentProfile.description.split('\n');
      setDescriptions(arr);
    }
  }, [currentProfile]);

  useEffect(() => {
    if (currentOrder && currentOrder.count >= quantity) {
      setCanIBay(false);
      return;
    }
  }, [currentOrder, quantity]);
  useEffect(() => {
    if (!orderList || !currentProfile) return;
    if (orderList.count === currentProfile.quantity) setQuantity(false);
  }, [currentProfile, orderList]);

  return (
    <PageTemplate orderLink='/gallery/order' order={true} orderDict={orderDict}>
      <Container>
        {currentProfile ? (
          <div>
            <div className={isMobile ? styles.mobile_main_info : styles.main_info}>
              <div className={styles.profileTitle}>
                <div>
                  <span className={styles.title}>{currentProfile.title}</span>
                  <span className={styles.author}>{currentProfile.author}</span>
                </div>
                <Link to={backLink}>
                  {isMobile ? (
                    <MobileGoBackArrow />
                  ) : (
                    <>
                      <GoBackArrow /> ??????????
                    </>
                  )}
                </Link>
              </div>
              <div className={styles.grid_container}>
                <div className={styles.profileImg}>
                  {currentProfile.additional_photos.length > 0 ? (
                    <ProfileSlider
                      additional_photos={currentProfile.additional_photos}
                      main_photo={currentProfile.thumbnail}
                    />
                  ) : (
                    <div className={`${styles.slide} ${styles.slide_single}`}>
                      <img src={MEDIA_URL + currentProfile.thumbnail} alt={currentProfile.title} />
                    </div>
                  )}
                </div>

                <div className={styles.profileInfo}>
                  <dl>
                    <dt className={styles.info_title}>????????????????</dt>
                    <dd className={styles.info_param}>
                      {currentProfile.material ? currentProfile.material : '???? ??????????????'}
                    </dd>

                    <dt className={styles.info_title}>??????????????</dt>
                    <dd className={styles.info_param}>
                      {currentProfile.technique ? currentProfile.technique : '???? ??????????????'}
                    </dd>
                    <dt className={styles.info_title}>????????????</dt>
                    <dd className={styles.info_param}>{currentProfile.size ? currentProfile.size : '???? ??????????????'}</dd>
                  </dl>

                  <div className={styles.buy_block}>
                    <span className={styles.price}>
                      {currentProfile.price.slice(0, -3).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ???
                    </span>
                    <button
                      className={currentProfile.is_bought ? styles.saled : undefined}
                      onClick={addToOrder}
                      disabled={currentProfile.quantity < 1 || orderDict[currentProfile.title]}>
                      {currentProfile.quantity < 1
                        ? '?? ?????????????? ??????????????????'
                        : orderDict[currentProfile.title]
                        ? '?? ??????????????'
                        : '????????????'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {currentProfile.description !== '' && (
              <div className={styles.description}>
                <p>????????????????</p>
                <div className={styles.description_text}>
                  {descriptions && descriptions.map((item, index) => <p key={index}>{item}</p>)}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>??????, ?????????? ???????????? ?????? ???? ??????????</p>
        )}
      </Container>
    </PageTemplate>
  );
};

export default ProfilePage;
