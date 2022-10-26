import React, { useEffect, useState } from "react";
import Container from "../../templates/Container";
import PageTemplate from "../../templates/PageTemplate";

import styles from "./OrderPage.module.scss";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { Link, useNavigate } from 'react-router-dom';
import { MEDIA_URL } from "../../../redux/API/BASE_URL";

import { ReactComponent as GoBackArrow } from "../../../assets/img/arrow-left.svg";
import { ReactComponent as MobileGoBackArrow } from "../../../assets/img/mobile-left-arrow.svg";
import OrderModal from "../../elements/OrderModal/OrderModal";
import MobileOrderItem from './MobileOrderItem';

import useMobileDetect from 'use-mobile-detect-hook';


const OrderPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [summury, setSummury] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const order = useSelector((state) => state.order.orderList);

  const navigate = useNavigate();

  useEffect(() => {
    if (order) {
      let summuryCounter = 0;
      order.map(item => {
        summuryCounter += item.price * item.count;
      })
      setSummury(summuryCounter);
    }
  }, [order])

  

  return (
    <PageTemplate>
      <Container>
        {isShowModal && <OrderModal onClose={setIsShowModal} />}
        {isMobile && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30
          }}>
            <span style={{
              fontSize: 30,
              fontWeight: 500,
            }}>Корзина</span>
            <Link to={'/'}> <MobileGoBackArrow /></Link>
          </div>
        )}
        {order && order.length > 0 ? (
          <>
            {isMobile ? (
              order.map((item, index) => (
                <MobileOrderItem
                  key={index}
                  id={item.id}
                  url={MEDIA_URL + item.thumbnail}
                  name={item.title}
                  author={item.author}
                  material={item.material}
                  technichs={item.technique}
                  size={item.size}
                  price={item.price}
                  value={item.count}
                  quantity={item.quantity}
                />
              ))
            ) : (
              order.map((item, index) => (
                <OrderItem
                  key={index}
                  id={item.id}
                  url={MEDIA_URL + item.thumbnail}
                  name={item.title}
                  author={item.author}
                  material={item.material}
                  technichs={item.technique}
                  size={item.size}
                  price={item.price}
                  value={item.count}
                  quantity={item.quantity}
                />
              ))
            )}
            <div className={isMobile ? styles.mobile_order_page_footer : styles.order_page_footer}>
              <div className={styles.summury}>
                <p>Итого: {summury} ₽</p>
              </div>
              <div className={styles.button_group}>
                {!isMobile && <Link to={'/'}> <GoBackArrow /> Назад</Link>}
                <button onClick={() => setIsShowModal(true)}>Оформить заказ</button>
                {isMobile && <button style={{backgroundColor: '#D4D8DA', color: '#50535A'}} onClick={() => navigate('/')}>Продолжить покупки</button>  }
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 40,
                fontWeight: 500,
              }}
            >
              В корзине пусто
            </p>
          </div>
        )}
      </Container>
    </PageTemplate>
  );
};

export default OrderPage;
