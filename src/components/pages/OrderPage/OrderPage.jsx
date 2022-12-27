import React, { useEffect, useState } from 'react';
import Container from '../../templates/Container';
import PageTemplate from '../../templates/PageTemplate';

import styles from './OrderPage.module.scss';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { Link, useNavigate } from 'react-router-dom';
import { MEDIA_URL } from '../../../redux/API/BASE_URL';

import { ReactComponent as GoBackArrow } from '../../../assets/img/arrow-left.svg';
import { ReactComponent as MobileGoBackArrow } from '../../../assets/img/mobile-left-arrow.svg';
import OrderModal from '../../elements/OrderModal/OrderModal';
import MobileOrderItem from './MobileOrderItem';

import useMobileDetect from 'use-mobile-detect-hook';

const OrderPage = ({
  isBlack = false,
  orderLink,
  orderDict,
  OrderItemComponent,
  onClose,
  onChange,
  url,
  backLink,
}) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [summury, setSummury] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let orderToSet = [];
    for (let key in orderDict) {
      orderToSet.unshift(orderDict[key]);
    }
    setOrder(orderToSet);

    if (orderToSet) {
      let summuryCounter = 0;
      orderToSet.forEach((item) => {
        summuryCounter += item.product.price * item.quantity;
      });
      setSummury(summuryCounter);
    }
  }, [orderDict]);

  return (
    <div
      className={isBlack ? `${styles.wrapper} ${styles.black}` : styles.wrapper}
    >
      <PageTemplate
        orderLink={orderLink}
        order={true}
        orderDict={orderDict}
        header={isBlack ? 'absolute' : ''}
      >
        <Container>
          <div className={styles.innerWrapper}></div>
          {isShowModal && (
            <OrderModal
              onClose={setIsShowModal}
              url={url}
              localStorageVariableName={'paymentsIndustry'}
              orderDict={orderDict}
            />
          )}
          {isMobile && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 30,
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 500,
                }}
              >
                Корзина
              </span>
              <Link to={backLink}>
                {' '}
                <MobileGoBackArrow />
              </Link>
            </div>
          )}
          {order && order.length > 0 ? (
            <>
              {isMobile
                ? order.map((item, index) => (
                    <MobileOrderItem
                      key={index}
                      product={item.product}
                      value={item.quantity}
                      onClose={onClose}
                      onChange={onChange}
                      text={
                        item.product.material
                          ? `${item.product.material}, ${item.product.technique}, ${item.product.size}`
                          : item.product.shop.title
                      }
                    />
                  ))
                : order.map((item, index) => (
                    <OrderItemComponent
                      key={index}
                      product={item.product}
                      value={item.quantity}
                      onClose={onClose}
                      onChange={onChange}
                    />
                  ))}
              <div
                className={
                  isMobile
                    ? styles.mobile_order_page_footer
                    : styles.order_page_footer
                }
              >
                <div className={styles.summury}>
                  <p>
                    {/* Итого:{" "} */}
                    {String(summury).replace(
                      /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                      '$1 '
                    )}{' '}
                    ₽
                  </p>
                </div>
                <div className={styles.button_group}>
                  {!isMobile && (
                    <Link to={backLink}>
                      {' '}
                      <GoBackArrow /> Назад
                    </Link>
                  )}
                  <button onClick={() => setIsShowModal(true)}>
                    Оформить заказ
                  </button>
                  {isMobile && (
                    <button
                      style={{ backgroundColor: '#D4D8DA', color: '#50535A' }}
                      onClick={() => navigate(backLink)}
                    >
                      Продолжить покупки
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                width: '100%',
                height: 250,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                }}
                className={styles.emptyCard}
              >
                В корзине пусто
              </p>
            </div>
          )}
        </Container>
      </PageTemplate>
    </div>
  );
};

export default OrderPage;
