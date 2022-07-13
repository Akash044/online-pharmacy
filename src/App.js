import './App.css';
import Categories from './pages/Categories';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CategoryItems from './pages/CategoryItems';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import { createContext, useState } from 'react';
import Checkout from './pages/Checkout';
import CartItems from './pages/CartItems';
import Account from './pages/Account';
export const UserContext = createContext();

const App = () => {
  const [store, setStore] = useState({
    cart: []
  });
  return (
    <UserContext.Provider value={[store, setStore]}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:id" element={<CategoryItems />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="cart" element={<CartItems />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
