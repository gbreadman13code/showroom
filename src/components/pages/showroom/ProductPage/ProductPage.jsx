import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getProduct } from '../../../../redux/requests/getProduct';
import useMobileDetect from 'use-mobile-detect-hook';
import { ReactComponent as GoBackArrow } from '../../../../assets/img/arrow-left.svg';
import { ReactComponent as MobileGoBackArrow } from '../../../../assets/img/showroom/goBackMobile.svg';
import ProductImages from './ProductImages/ProductImages';
import OrderModal from '../../../elements/OrderModal/OrderModal';

const ProductPage = ({ addProductToOrder, orderDict }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let params = useParams();
  let location = useLocation();
  let [images, setImages] = useState([]);
  let [product, setProduct] = useState({});
  let [isModalActive, setIsModalActive] = useState(false);
  let [isButtonActive, setIsButtonActive] = useState(true);
  useEffect(() => {
    getProduct(params.id).then((res) => {
      setProduct(res);
      let images = [
        { id: 0, image: res.image, cropped_image: res.cropped_image },
        ...res.additional_photos,
      ];
      setImages(images);
    });

    if (orderDict[product.title]) {
      setIsButtonActive(false);
    }
  }, [location, orderDict]);

  let openModal = () => {
    setIsModalActive(true);
  };

  return (
    <div className={styles.wrapper}>
      {isModalActive && (
        <OrderModal
          onClose={() => {
            setIsModalActive(false);
          }}
          url={'shops/payments/'}
          product_ids={product.id + ':1'}
          localStorageVariableName={'paymentsShowroomIndustry'}
        />
      )}
      <PageTemplate
        header="absolute"
        orderLink="/showroom/order"
        order={true}
        orderDict={orderDict}
      >
        <Container>
          <div className={styles.backArrow}>
            {isMobile ? (
              <Link to={`/showroom/shops/${product.shop.id}`}>
                {' '}
                <MobileGoBackArrow />
              </Link>
            ) : (
              <Link to={`/showroom/shops/${product.shop.id}`}>
                {' '}
                <GoBackArrow /> Назад
              </Link>
            )}
          </div>
          {product.shop && (
            <div className={styles.product}>
              <div className={styles.productTitle}>{product.title}</div>
              <div className={styles.shop}>{product.shop.title}</div>

              <div className={styles.productImages}>
                <ProductImages images={images} title={product.title} />
              </div>
              <div className={styles.productDescription}>
                <div className={styles.productDescriptionTitle}>Описание</div>
                <div className={styles.productDescriptionText}>
                  {product.description}
                </div>
              </div>
              <div className={styles.productCost}>
                {String(product.price).replace(
                  /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                  '$1 '
                )}{' '}
                ₽
              </div>
              <button
                type="button"
                className={styles.productButton}
                disabled={(product.quantity < 1) | !isButtonActive}
                onClick={() => {
                  // openModal();
                  addProductToOrder(product);
                }}
              >
                {product.quantity > 0
                  ? isButtonActive
                    ? 'Купить'
                    : 'В корзине'
                  : 'Нет в наличии'}
              </button>
            </div>
          )}
        </Container>
      </PageTemplate>
    </div>
  );
};

export default ProductPage;
