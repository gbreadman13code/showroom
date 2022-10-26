import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../templates/Container";
import PageTemplate from "../../templates/PageTemplate";
import { ReactComponent as GoBackArrow } from "../../../assets/img/arrow-left.svg";
import { ReactComponent as MobileGoBackArrow } from "../../../assets/img/mobile-left-arrow.svg";

import styles from "./ProfilePage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setNewItemToOrderAction } from "../../../redux/reducers/orderReducer";
import { MEDIA_URL } from "../../../redux/API/BASE_URL";

import useMobileDetect from "use-mobile-detect-hook";
import ProfileSlider from "./Slider/ProfileSlider";

const ProfilePage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [currentProfile, setCurrentProfile] = useState();
  const [currentOrder, setCurrentOrder] = useState();
  const [quantity, setQuantity] = useState(true);
  const [canIBuy, setCanIBay] = useState(true);
  const [descriptions, setDescriptions] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const item = useSelector((state) => state.exhibitions.exhibitions[0]);
  const orderList = useSelector((state) => state.order.orderList);

  useEffect(() => {
    if (!item) return;
    setCurrentProfile(item.pictures.find((point) => point.id == params.id));
  }, [item]);

  useEffect(() => {
    setCurrentOrder(orderList.find((point) => point.id == params.id));
  }, [orderList]);

  const addToOrder = () => {
    let newObj = { count: 1 };
    Object.assign(newObj, currentProfile);
    dispatch(setNewItemToOrderAction(newObj));
  };

  useEffect(() => {
    if (currentProfile && currentProfile.description) {
      const arr = currentProfile.description.split("\n");
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
  }, [orderList]);

  return (
    <PageTemplate>
      <Container>
        {currentProfile ? (
          <div>
            <div
              className={isMobile ? styles.mobile_main_info : styles.main_info}
            >
              <div className={styles.profileTitle}>
                <div>
                  <span className={styles.title}>{currentProfile.title}</span>
                  <span className={styles.author}>{currentProfile.author}</span>
                </div>
                <Link to="/">
                  {isMobile ? (
                    <MobileGoBackArrow />
                  ) : (
                    <>
                      <GoBackArrow /> Назад
                    </>
                  )}
                </Link>
              </div>
              <div className={styles.grid_container}>
                <div className={styles.profileImg}>
                  {currentProfile.additional_photos.length > 0 ? (
                    <ProfileSlider
                      additional_photos={currentProfile.additional_photos}
                    />
                  ) : (
                    <div className={styles.slide}>
                      <img
                        src={MEDIA_URL + currentProfile.thumbnail}
                        alt={currentProfile.title}
                      />
                    </div>
                  )}
                </div>

                <div className={styles.profileInfo}>
                  <div>
                    <span className={styles.info_title}>Материал</span>
                    <span className={styles.info_param}>
                      {currentProfile.material
                        ? currentProfile.material
                        : "Не указано"}
                    </span>
                    <span className={styles.info_title}>Техника</span>
                    <span className={styles.info_param}>
                      {currentProfile.technique
                        ? currentProfile.technique
                        : "Не указано"}
                    </span>
                    <span className={styles.info_title}>Размер</span>
                    <span className={styles.info_param}>
                      {currentProfile.size ? currentProfile.size : "Не указано"}
                    </span>
                  </div>
                  <div className={styles.buy_block}>
                    <span className={styles.price}>
                      {currentProfile.price} ₽
                    </span>
                    <button
                      className={
                        currentProfile.is_bought ? styles.saled : undefined
                      }
                      onClick={addToOrder}
                      disabled={currentProfile.is_bought || !canIBuy}
                    >
                      {currentProfile.is_bought
                        ? "Продано"
                        : !canIBuy
                        ? "В корзине"
                        : "В корзину"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {currentProfile.description !== "" && (
              <div className={styles.description}>
                <p>Описание</p>
                <div className={styles.description_text}>
                  {descriptions &&
                    descriptions.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Упс, такой работы нет на сайте</p>
        )}
      </Container>
    </PageTemplate>
  );
};

export default ProfilePage;
