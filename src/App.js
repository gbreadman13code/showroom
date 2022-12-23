import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import MainPage from './components/pages/gallery/MainPage/MainPage';
import WishListPage from './components/pages/gallery/WishListPage/WishListPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import ProfilePage from './components/pages/gallery/ProfilePage/ProfilePage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import getExhibitions from './redux/requests/getExhibitions';

import ContactsPage from './components/pages/gallery/ContactsPage/ContactsPage';
import ConfirmPage from './components/pages/gallery/ConfirmPage/ConfirmPage';
import PrimaryPage from './components/pages/events/PrimaryPage/PrimaryPage';
import GridPage from './components/pages/showroom/GridPage/GridPage';
import CategoryPage from './components/pages/showroom/CategoryPage/CategoryPage';
import ShopPage from './components/pages/showroom/ShopPage/ShopPage';
import ProductPage from './components/pages/showroom/ProductPage/ProductPage';
import ShowroomOrderItem from './components/pages/showroom/ShowroomOrderItem/ShowroomOrderItem';
import OrderItem from './components/pages/OrderPage/OrderItem';
import PagePainters from './components/pages/painters/PagePainters/PagePainters';
import ProfilePainter from './components/pages/painters/ProfilePainter/ProfilePainter';

function addProductToOrder(order, setOrder, product) {
  let old_order = { ...order };
  if (old_order[product.title]) {
    old_order[product.title].quantity += 1;
  } else {
    old_order[product.title] = { quantity: 1, product: product };
  }
  setOrder(old_order);
}

function removeProductFromOrder(order, setOrder, product) {
  let old_order = { ...order };
  delete old_order[product.title];
  setOrder(old_order);
}

function changeProductQuantity(order, setOrder, product, quantity) {
  let old_order = { ...order };
  old_order[product.title].quantity = quantity;
  setOrder(old_order);
}

function App() {
  const dispatch = useDispatch();
  const { pathname, hash, key } = useLocation();

  const [galleryOrder, setGalleryOrder] = useState([]);
  const [showroomOrder, setShowroomOrder] = useState([]);

  useEffect(() => {
    dispatch(getExhibitions());
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 400);
    }
  }, [dispatch, pathname, hash, key]);

  // useEffect(() => {
  //   dispatch(getExhibitions());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PrimaryPage />} />
        <Route
          path="/gallery"
          element={<MainPage orderDict={galleryOrder} />}
        />
        {/* <Route path='/gallery/wishlist' element={<WishListPage />} /> */}
        <Route
          path="gallery/order"
          element={
            <OrderPage
              url="exhibitions/payments/"
              orderLink="/gallery/order"
              orderDict={galleryOrder}
              OrderItemComponent={OrderItem}
              onClose={(product) => {
                removeProductFromOrder(galleryOrder, setGalleryOrder, product);
              }}
              onChange={(product, quantity) => {
                changeProductQuantity(
                  galleryOrder,
                  setGalleryOrder,
                  product,
                  quantity
                );
              }}
              backLink="/gallery/"
            />
          }
        />
        <Route
          path="/gallery/confirm"
          element={
            <ConfirmPage
              localStorageVariableName={'paymentsIndustry'}
              url={'exhibitions/payments/'}
            />
          }
        />
        <Route
          path="/gallery/payment_and_delivery"
          element={<ContactsPage orderDict={galleryOrder} />}
        />
        <Route
          path="/gallery/profile/:id"
          element={
            <ProfilePage
              orderDict={galleryOrder}
              addProductToOrder={(product) => {
                addProductToOrder(galleryOrder, setGalleryOrder, product);
              }}
            />
          }
        />
        <Route
          path="/showroom"
          element={<GridPage orderDict={showroomOrder} />}
        />
        <Route
          path="/showroom/categories/:id"
          element={<CategoryPage orderDict={showroomOrder} />}
        />
        <Route
          path="/showroom/categories"
          element={<CategoryPage orderDict={showroomOrder} />}
        />
        <Route
          path="/showroom/shops/:id"
          element={<ShopPage orderDict={showroomOrder} />}
        />
        <Route
          path="/showroom/products/:id"
          element={
            <ProductPage
              addProductToOrder={(product) => {
                addProductToOrder(showroomOrder, setShowroomOrder, product);
              }}
              orderDict={showroomOrder}
            />
          }
        />
        <Route
          path="/showroom/confirm"
          element={
            <ConfirmPage
              localStorageVariableName={'paymentsShowroomIndustry'}
              url={'shops/payments/'}
            />
          }
        />
        <Route
          path="/showroom/order"
          element={
            <OrderPage
              isBlack={true}
              url="shops/payments/"
              orderLink="/showroom/order"
              orderDict={showroomOrder}
              OrderItemComponent={ShowroomOrderItem}
              onClose={(product) => {
                removeProductFromOrder(
                  showroomOrder,
                  setShowroomOrder,
                  product
                );
              }}
              onChange={(product, quantity) => {
                changeProductQuantity(
                  showroomOrder,
                  setShowroomOrder,
                  product,
                  quantity
                );
              }}
              backLink="/showroom/"
            />
          }
        />
        <Route path="/painters/" element={<PagePainters />} />
        <Route path="/painters/:id" element={<ProfilePainter />} />
      </Routes>
    </>
  );
}

export default App;
