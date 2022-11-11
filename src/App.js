import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/pages/gallery/MainPage/MainPage';
import WishListPage from './components/pages/gallery/WishListPage/WishListPage';
import OrderPage from './components/pages/gallery/OrderPage/OrderPage';
import ProfilePage from './components/pages/gallery/ProfilePage/ProfilePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getExhibitions from './redux/requests/getExhibitions';

import ContactsPage from './components/pages/gallery/ContactsPage/ContactsPage';
import ConfirmPage from './components/pages/gallery/ConfirmPage/ConfirmPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitions());
  }, [dispatch]);

  return (
    <>
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
