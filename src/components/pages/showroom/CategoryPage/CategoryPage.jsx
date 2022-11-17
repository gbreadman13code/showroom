import React, { useEffect, useState } from 'react';
import styles from './CategoryPage.module.scss';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getShops } from '../../../../redux/requests/getShops';

const CategoryPage = () => {
  let params = useParams();
  let [categories, setCategories] = useState([]);
  let [activeCategory, setActiveCategory] = useState(0);
  let [shops, setShops] = useState([]);
  let location = useLocation();
  useEffect(() => {
    getShopsCategories().then((res) => {
      setCategories(res.results);
    });
    getShops().then((res) => {
      setShops(res.results);
    });

    if (params.id) {
      setActiveCategory(+params.id);
    }
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <PageTemplate>
        <Container>
          <nav className={styles.nav}>
            {categories.map((category) => (
              <Link
                className={activeCategory === category.id ? `${styles.category} ${styles.active}` : styles.category}
                key={category.id}
                to={`/showroom/categories/${category.id}`}>
                {category.title}
              </Link>
            ))}
          </nav>
          <div className={styles.cards}>
            {shops
              .filter((shop) => shop.category === activeCategory)
              .map((shop) => (
                <div className={styles.card} key={shop.id}>
                  <Link to={`/showroom/shops/${shop.id}`} className={styles.cardInfo}>
                    <div className={styles.shopImage}>
                      <img src={shop.image} alt={shop.title} />
                    </div>
                    <div className={styles.shopTitle}>{shop.title}</div>
                  </Link>
                </div>
              ))}
          </div>
        </Container>
      </PageTemplate>
    </div>
  );
};

export default CategoryPage;
