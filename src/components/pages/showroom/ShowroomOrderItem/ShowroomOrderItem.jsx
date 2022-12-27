import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../../../assets/img/close.svg';
import InputNumber from '../../OrderPage/InputNumber';

import styles from '../../OrderPage/OrderPage.module.scss';
import { useDispatch } from 'react-redux';
import { deleteItemFromOrderAction, incrementAction } from '../../../../redux/reducers/orderReducer';

const ShowroomOrderItem = ({ value, quantity, product, onChange, onClose }) => {
  const [localValue, setLocalValue] = useState(product.price);
  const dispatch = useDispatch();
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
        <img src={product.cropped_image} alt={product.title} />
      </div>
      <div className={styles.order_info}>
        <div className={styles.order_name}>
          <span className={styles.head_span}>{product.title}</span>
        </div>
        <div className={styles.other_info}>
          <div>
            <span className={styles.head_span}>Магазин</span>
            <span>{product.shop ? product.shop.title : 'Не указано'}</span>
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

export default ShowroomOrderItem;
