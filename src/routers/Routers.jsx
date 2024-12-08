import { Routes, Route } from "react-router-dom";

import { Home, ProductDetail, ProductListing } from "../pages";
import { MainLayout } from "../layouts";

const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default Routers;
