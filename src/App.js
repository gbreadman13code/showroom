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
import PrimaryPage from './components/pages/events/PrimaryPage/PrimaryPage';
import GridPage from './components/pages/showroom/GridPage/GridPage';

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
        <Route path='/gallery/confirm' element={<ConfirmPage />} />
        <Route path='/gallery/payment_and_delivery' element={<ContactsPage />} />
        <Route path='/gallery/profile/:id' element={<ProfilePage />} />
        <Route path='/showroom' element={<GridPage />} />
      </Routes>
    </>
  );
}

export default App;
