import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getProduct } from '../../../../redux/requests/getProduct';
import { ReactComponent as GoBackArrow } from '../../../../assets/img/arrow-left.svg';

const ProductPage = () => {
  let params = useParams();
  let location = useLocation();
  let [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(params.id).then((res) => {
      setProduct(res);
      console.log(res);
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
                <Link to={`/showroom/shops/${product.shop.id}`}>
                  {' '}
                  <GoBackArrow /> Назад
                </Link>
              </div>
              <div className={styles.productImages}>
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.productAdditionalImages}>
                  {product.additional_photos.map((photo) => (
                    <div className={styles.productAdditionalImage}>
                      <img src={photo.image} alt={product.title} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.productDescription}>
                <div className={styles.productDescriptionTitle}>Описание</div>
                <div className={styles.productDescriptionText}>{product.description}</div>
              </div>
              <div className={styles.productCost}>
                {String(product.cost).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')} ₽
              </div>
              <button type='button' className={styles.productButton}>
                Купить
              </button>
            </div>
          )}
        </Container>
      </PageTemplate>
    </div>
  );
};

export default ProductPage;
