import React, { useEffect, useState } from 'react';

import styles from './OrderModal.module.scss';
import { useSelector } from 'react-redux';
import { setPayments } from '../../../redux/requests/setPayments';

import useMobileDetect from 'use-mobile-detect-hook';

const OrderModal = ({ onClose, url, product_ids, localStorageVariableName, orderDict }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [paymentsData, setPaymentsData] = useState({ email: '', fio: '', phone: '', product_ids: '' });

  // const currentOrder = useSelector((state) => state.order.orderList);

  const confirmOrder = () => {
    if (paymentsData.email && paymentsData.fio && paymentsData.phone && paymentsData.product_ids) {
      setPayments(paymentsData, url, localStorageVariableName);
    }
  };

  const closeModal = () => onClose(false);

  useEffect(() => {
    if (!orderDict) return;

    let orderArray = [];
    for (let key in orderDict) {
      let item = orderDict[key];
      orderArray.push(`${item.product.id}: ${item.quantity}`);
    }
    let orderToString = orderArray.join(', ');
    setPaymentsData({ ...paymentsData, product_ids: orderToString });
  }, [orderDict]);

  return (
    <div className={isMobile ? styles.mobile_modal_screen : styles.modal_screen}>
      <div className={styles.modal_wrapper}>
        <h3>Оформление заказа</h3>
        <input
          value={paymentsData.email}
          type='text'
          placeholder='E-mail'
          onChange={(event) => setPaymentsData({ ...paymentsData, email: event.target.value })}
        />
        <input
          value={paymentsData.fio}
          type='text'
          placeholder='ФИО'
          onChange={(event) => setPaymentsData({ ...paymentsData, fio: event.target.value })}
        />
        <input
          value={paymentsData.phone}
          type='text'
          pattern='[0-9]{10}'
          placeholder='Номер телефона'
          onChange={(event) => setPaymentsData({ ...paymentsData, phone: event.target.value })}
        />
        <div className={styles.button_container}>
          <button onClick={closeModal}>Назад</button>
          <button onClick={confirmOrder}>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
