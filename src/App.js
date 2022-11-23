import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/gallery/MainPage/MainPage';
import WishListPage from './components/pages/gallery/WishListPage/WishListPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import ProfilePage from './components/pages/gallery/ProfilePage/ProfilePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getExhibitions from './redux/requests/getExhibitions';

import ContactsPage from './components/pages/gallery/ContactsPage/ContactsPage';
import ConfirmPage from './components/pages/gallery/ConfirmPage/ConfirmPage';
import PrimaryPage from './components/pages/events/PrimaryPage/PrimaryPage';
import GridPage from './components/pages/showroom/GridPage/GridPage';
import CategoryPage from './components/pages/showroom/CategoryPage/CategoryPage';
import ShopPage from './components/pages/showroom/ShopPage/ShopPage';
import ProductPage from './components/pages/showroom/ProductPage/ProductPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitions());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<PrimaryPage />} />
        <Route path='/gallery' element={<MainPage />} />
        <Route path='/gallery/wishlist' element={<WishListPage />} />
        <Route path='/gallery/order' element={<OrderPage />} />
        <Route
          path='/gallery/confirm'
          element={<ConfirmPage localStorageVariableName={'paymentsIndustry'} url={'exhibitions/payments'} />}
        />
        <Route path='/gallery/payment_and_delivery' element={<ContactsPage />} />
        <Route path='/gallery/profile/:id' element={<ProfilePage />} />
        <Route path='/showroom' element={<GridPage />} />
        <Route path='/showroom/categories/:id' element={<CategoryPage />} />
        <Route path='/showroom/categories' element={<CategoryPage />} />
        <Route path='/showroom/shops/:id' element={<ShopPage />} />
        <Route path='/showroom/products/:id' element={<ProductPage />} />
        <Route
          path='/showroom/confirm'
          element={<ConfirmPage localStorageVariableName={'paymentsShowroomIndustry'} url={'shops/payments'} />}
        />
      </Routes>
    </>
  );
}

export default App;
