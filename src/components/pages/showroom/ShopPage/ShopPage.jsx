import React, { useEffect, useState } from 'react';
import styles from './ShopPage.module.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getShop } from '../../../../redux/requests/getShop';
import useMobileDetect from 'use-mobile-detect-hook';
import { ReactComponent as GoBackArrow } from '../../../../assets/img/arrow-left.svg';
import { ReactComponent as MobileGoBackArrow } from '../../../../assets/img/mobile-left-arrow.svg';

const ShopPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let params = useParams();
  let [shop, setShop] = useState({});
  let location = useLocation();
  useEffect(() => {
    getShop(params.id).then((res) => {
      setShop(res);
      console.log(res);
    });
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <PageTemplate>
        <Container>
          <div className={styles.shop}>
            <div className={styles.shopInfo}>
              <div className={styles.shopImage}>
                <img src={shop.image} alt='' />
              </div>
              <div className={styles.shopTitle}> {shop.title}</div>
              <div className={styles.shopDescription}>{shop.description}</div>
            </div>
            <div className={styles.products}>
              {shop.products &&
                shop.products.map((product) => (
                  <Link className={styles.productLink} to={`/showroom/products/${product.id}`}>
                    <div
                      className={styles.product}
                      key={product.id}
                      style={{ backgroundImage: `url(${product.image})` }}>
                      <div className={styles.productReadMore}>Подробнее</div>
                      <div className={styles.productInfo}>
                        <div className={styles.productTitle}>{product.title}</div>
                        <div className={styles.productCost}>
                          {String(product.cost).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')}р.
                        </div>
                        <button type='button' className={styles.productButton}>
                          Купить
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              <Link className={styles.backLink} to={`/showroom/categories/${shop.category}`}>
                {isMobile ? (
                  <MobileGoBackArrow />
                ) : (
                  <>
                    <GoBackArrow /> Назад
                  </>
                )}
              </Link>
            </div>
          </div>
        </Container>
      </PageTemplate>
    </div>
  );
};

export default ShopPage;
