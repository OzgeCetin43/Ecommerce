import { Link } from "react-router-dom";
import { Breadcrumb, Layout } from "antd";

import {
  BlackFridayBanner,
  FreeShipping,
  ProductItemList,
  ProductListingSidebar,
  ServicesList,
} from "../../components";

import "./product-listing.css";

const { Content } = Layout;

const items = [
  {
    title: <Link to="/">Home</Link>,
  },
  {
    title: "Product Listing",
  },
];

export const ProductListing = () => {
  return (
    <>
      <Breadcrumb items={items} className="product-listing-breadcrumb" />
      <Content className="product-listing-inner-container">
        <Content className="product-listing-container-left">
          <ProductListingSidebar />
        </Content>
        <Content className="product-listing-container-right">
          <ProductItemList />
        </Content>
      </Content>
      <FreeShipping />
      <BlackFridayBanner />
      <ServicesList />
    </>
  );
};
