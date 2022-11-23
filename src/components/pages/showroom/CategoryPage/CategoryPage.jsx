import React, { useEffect, useState } from 'react';
import styles from './CategoryPage.module.scss';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getShops } from '../../../../redux/requests/getShops';
import CategoryBlankPage from './CategoryBlankPage/CategoryBlankPage';
import NavBar from '../../../elements/NavBar/NavBar';
import CategoryCards from './CategoryCards/CategoryCards';

const CategoryPage = () => {
  let params = useParams();
  let [categories, setCategories] = useState([]);
  let [activeCategory, setActiveCategory] = useState(0);
  let [shops, setShops] = useState([]);
  let location = useLocation();
  let navigate = useNavigate();
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

  let changeActiveCategory = (category_id) => {
    navigate(`/showroom/categories/${category_id}`);
  };

  return (
    <div className={styles.wrapper}>
      <PageTemplate header='absolute' orderLink='/showroom/order'>
        <Container>
          <NavBar categories={categories} activeCategory={activeCategory} onClickCallback={changeActiveCategory} />
          <CategoryCards activeCategory={activeCategory} shops={shops} />
        </Container>
      </PageTemplate>
    </div>
  );
};

export default CategoryPage;
