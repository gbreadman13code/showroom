import React, { useEffect, useState, useRef } from 'react';
import styles from './CategoryPage.module.scss';
import { getShopsCategories } from '../../../../redux/requests/getShopsCategories';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';
import { getShops } from '../../../../redux/requests/getShops';
import CategoryBlankPage from './CategoryBlankPage/CategoryBlankPage';
import NavBar from '../../../elements/NavBar/NavBar';
import CategoryCards from './CategoryCards/CategoryCards';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

const CategoryPage = ({ orderDict }) => {
  const mode = 'out-in';
  const cardRef = useRef(null);

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

  // console.log(activeCategory);

  return (
    <div className={styles.wrapper}>
      <PageTemplate
        header="absolute"
        orderLink="/showroom/order"
        order={true}
        orderDict={orderDict}
      >
        <Container>
          <NavBar
            categories={categories}
            activeCategory={activeCategory}
            onClickCallback={changeActiveCategory}
          />
          <SwitchTransition mode={mode}>
            <CSSTransition
              className={'fade'}
              key={activeCategory}
              nodeRef={cardRef}
              timeout={{ enter: 250, exit: 250 }}
              unmountOnExit
            >
              <div ref={cardRef}>
                <CategoryCards activeCategory={activeCategory} shops={shops} />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </PageTemplate>
    </div>
  );
};

export default CategoryPage;
