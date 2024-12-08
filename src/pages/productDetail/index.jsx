import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import "./product-detail.css";

const items = [
  {
    title: <Link to="/">Home</Link>,
  },
  {
    title: "Product Detail",
  },
];

export const ProductDetail = () => {
  return (
    <>
      <Breadcrumb items={items} className="product-detail-breadcrumb" />
    </>
  );
};
