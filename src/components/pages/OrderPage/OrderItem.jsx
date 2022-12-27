import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../../assets/img/close.svg';
import InputNumber from './InputNumber';

import styles from './OrderPage.module.scss';
import { MEDIA_URL } from '../../../redux/API/BASE_URL';

const OrderItem = ({ product, value, onChange, onClose }) => {
  const [localValue, setLocalValue] = useState(product.price);
  const onChangeCounter = (value) => {
    setLocalValue(value);
    onChange(product, value);
  };

  const onCloseHandler = () => {
    onClose(product);
  };

  return (
    <div className={styles.order_item}>
      <div className={styles.img_wrapper}>
        <img src={MEDIA_URL + product.thumbnail} alt={product.title} />
      </div>
      <div className={styles.order_info}>
        <div className={styles.order_name}>
          <span className={styles.head_span}>{product.title}</span>
          <span>{product.author}</span>
        </div>
        <div className={styles.other_info}>
          <div>
            <span className={styles.head_span}>Материал</span>
            <span>{product.material ? product.material : 'Не указано'}</span>
          </div>
          <div>
            <span className={styles.head_span}>Техника</span>
            <span>{product.technichs ? product.technichs : 'Не указано'}</span>
          </div>
          <div>
            <span className={styles.head_span}>Размер</span>
            <span>{product.size ? product.size : 'Не указано'}</span>
          </div>
        </div>
      </div>
      <div className={styles.price_info}>
        <div className={styles.wrap}>
          <span>{String(localValue * product.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽</span>
          <InputNumber defaultValue={value} quantity={product.quantity} funcChange={onChangeCounter} />
        </div>
        <CloseIcon onClick={onCloseHandler} />
      </div>
    </div>
  );
};

export default OrderItem;
