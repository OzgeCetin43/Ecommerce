import { Routes, Route } from "react-router-dom";

import {
  Cart,
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
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
