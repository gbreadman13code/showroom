import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../../assets/img/close.svg';

import styles from './OrderPage.module.scss';
import MobileInputNumber from './MobileInputNumber';
import { MEDIA_URL } from '../../../redux/API/BASE_URL';

const MobileOrderItem = ({ product, value, onClose, onChange, text, isGallery }) => {
  const [localValue, setLocalValue] = useState(product.price);
  const onChangeCounter = (value) => {
    setLocalValue(value);
    onChange(product, value);
  };

  const onCloseHandler = () => {
    onClose(product);
  };
  return (
    <div className={styles.mobile_order_item}>
      <div className={styles.img_wrapper}>
        <img src={product.thumbnail ? MEDIA_URL + product.thumbnail : product.cropped_image} alt={product.name} />
      </div>
      <div className={styles.order_info}>
        <div className={styles.order_name}>
          <span className={styles.head_span}>{product.name}</span>
        </div>
        <div className={styles.other_info}>
          {isGallery && (
            <div>
              <span className={styles.autor}>
                <span className={styles.head_span}>Автор:</span> <span>{product.author}</span>
              </span>
            </div>
          )}

          <div>
            <span className={styles.head_span}>{isGallery ? 'Характеристики' : 'Магазин'}: </span>
            <span>{text}</span>
          </div>
        </div>
      </div>
      <div className={styles.price_info}>
        <span>{String(localValue * product.price).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽</span>
        <MobileInputNumber defaultValue={value} quantity={product.quantity} funcChange={onChangeCounter} />
      </div>
      <div className={styles.close}>
        <CloseIcon onClick={onCloseHandler} />
      </div>
    </div>
  );
};

export default MobileOrderItem;
