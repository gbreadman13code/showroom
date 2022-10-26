import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/MainPage/MainPage';
import WishListPage from './components/pages/WishListPage/WishListPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getExhibitions from './redux/requests/getExhibitions';

import useMobileDetect from 'use-mobile-detect-hook';

import img from './assets/default.png';
import ContactsPage from './components/pages/ContactsPage/ContactsPage';
import ConfirmPage from './components/pages/ConfirmPage/ConfirmPage';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitions());
  }, [dispatch])

  return (
    <>
    {/* <img src={img} style={{position: 'fixed', width: '100vw', height: '100vh'}} /> */}
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/wishlist' element={<WishListPage />} />
      <Route path='/order' element={<OrderPage />} />
      <Route path='/confirm' element={<ConfirmPage />} />
      <Route path='/payment_and_delivery' element={<ContactsPage />} />
      <Route path='/profile/:id' element={<ProfilePage />} />
    </Routes>
    </>
  );
}

export default App;
