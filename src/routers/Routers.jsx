import { Routes, Route } from "react-router-dom";

import {
  Cart,
  Checkout,
  ForgotPassword,
  Home,
  Login,
  ProductDetail,
  ProductListing,
  Register,
} from "../pages";
import { MainLayout } from "../layouts";

const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Routers;
