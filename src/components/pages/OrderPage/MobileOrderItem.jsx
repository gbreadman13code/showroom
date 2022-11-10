import React, { useState } from "react";

import { ReactComponent as CloseIcon } from "../../../assets/img/close.svg";
import InputNumber from "./InputNumber";

import styles from "./OrderPage.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteItemFromOrderAction,
  incrementAction,
} from "../../../redux/reducers/orderReducer";
import MobileInputNumber from "./MobileInputNumber";

const MobileOrderItem = ({
  id,
  url,
  name,
  author,
  material,
  technichs,
  size,
  price,
  value,
  quantity,
  onChange,
  onClose,
}) => {
  const [localValue, setLocalValue] = useState(price);
  const dispatch = useDispatch();
  const onChangeCounter = (value) => {
    setLocalValue(value);
    dispatch(incrementAction({ id: id, value: value }));
  };

  const onCloseHandler = () => {
    dispatch(deleteItemFromOrderAction(id));
  };
  return (
    <div className={styles.mobile_order_item}>
      <div className={styles.img_wrapper}>
        <img src={url} alt={name} />
      </div>
      <div className={styles.order_info}>
        <div className={styles.order_name}>
          <span className={styles.head_span}>{name}</span>
        </div>
        <div className={styles.other_info}>
          <div>
            <span className={styles.autor}>
              <span className={styles.head_span}>Автор:</span>{" "}
              <span>{author}</span>
            </span>
          </div>
          <div>
            <span className={styles.head_span}>Характеристики: </span>
            <span> {material && material}</span>,{" "}
            <span>{technichs && technichs}</span>, <span>{size && size}</span>
          </div>
        </div>
      </div>
      <div className={styles.price_info}>
        <span>
          {String(localValue * price).replace(
            /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
            "$1" + " "
          )}{" "}
          ₽
        </span>
        <MobileInputNumber
          defaultValue={value}
          quantity={quantity}
          funcChange={onChangeCounter}
        />
      </div>
      <div className={styles.close}>
        <CloseIcon onClick={onCloseHandler} />
      </div>
    </div>
  );
};

export default MobileOrderItem;
