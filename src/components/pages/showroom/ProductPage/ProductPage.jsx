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

const ProductPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let params = useParams();
  let location = useLocation();
  let [images, setImages] = useState([]);
  let [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(params.id).then((res) => {
      setProduct(res);
      let images = [{ id: 0, image: res.image, cropped_image: res.cropped_image }, ...res.additional_photos];
      setImages(images);
    });
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <PageTemplate>
        <Container>
          {product.shop && (
            <div className={styles.product}>
              <div className={styles.productTitle}>{product.title}</div>
              <div className={styles.shop}>{product.shop.title}</div>
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
              <div className={styles.productImages}>
                <ProductImages images={images} title={product.title} />
              </div>
              <div className={styles.productDescription}>
                <div className={styles.productDescriptionTitle}>Описание</div>
                <div className={styles.productDescriptionText}>{product.description}</div>
              </div>
              <div className={styles.productCost}>
                {String(product.cost).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
              </div>
              {/* <button type='button' className={styles.productButton}>
                Купить
              </button> */}
            </div>
          )}
        </Container>
      </PageTemplate>
    </div>
  );
};

export default ProductPage;
