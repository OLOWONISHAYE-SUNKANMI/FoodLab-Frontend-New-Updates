import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Quickpicks from './components/MenuBody/Quickpicks/Quickpicks';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Login from './pages/SignIn/Login';
import RegisterPage from './pages/SignUp/Register';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import RestaurantMenuPage from './pages/RestaurantMenuPage/RestaurantMenuPage';
import ScrollToTop from '../scrollToTop';

import 'leaflet/dist/leaflet.css';
import ResetPassword from './pages/ResetPassword/ResetPassword';


const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <ScrollToTop />
      <div className='app'>
        {location.pathname !== '/login' && 
         location.pathname !== '/register' && 
         location.pathname !== '/forgot-password' && 
         location.pathname !== '/verify-account' && 
         location.pathname !== '/restaurant-page' && 
         location.pathname !== '/reset-password' && 
         !location.pathname.startsWith('/restaurant/') && // Updated condition to exclude /restaurant/:id
         location.pathname !== '/cart' && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/menu' element={<ProtectedRoute><Menu /></ProtectedRoute> } />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element = {<ResetPassword/>} />
          <Route path='/quickpicks' element={<Quickpicks />} />
          <Route path='/restaurant-page' element={<RestaurantPage />} />
          <Route path='/restaurant/:id' element={<RestaurantMenuPage />} />
          <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;