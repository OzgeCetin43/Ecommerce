import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

import { ProductDetails, ServicesList, CategoryList } from "../../components";

import { Products } from "../../assets/data/products";

import "./product-detail.css";

export const ProductDetail = () => {
  const location = useLocation();
  const { name } = location.state;

  const product = Products.flatMap((x) => x.items).find((x) => x.name === name);
  const category = Products.find((x) =>
    x.items.find((y) => y.name === name)
  ).category;

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Product Detail",
    },
    {
      title: product.name,
    },
  ];

  return (
    <>
      <Breadcrumb items={items} className="product-detail-breadcrumb" />
      <ProductDetails product={product} category={category} />
      <CategoryList />
      <ServicesList />
    </>
  );
};
