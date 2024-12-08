import { useState } from "react";
import { Layout, Typography, Checkbox, Slider, Rate } from "antd";

import "./product-listing-sidebar.css";

const { Content } = Layout;
const { Text } = Typography;

export const ProductListingSidebar = () => {
  const [priceRange, setPriceRange] = useState([20, 50]);
  return (
    <Content className="product-listing-sidebar">
      <Text className="product-listing-text">Shop by Category</Text>
      <Content className="sidebar-list-container">
        <Checkbox className="sidebar-checkbox">Fashion</Checkbox>
        <Checkbox className="sidebar-checkbox">Electronics</Checkbox>
        <Checkbox className="sidebar-checkbox">Bags</Checkbox>
        <Checkbox className="sidebar-checkbox">Footwear</Checkbox>
        <Checkbox className="sidebar-checkbox">Groceries</Checkbox>
        <Checkbox className="sidebar-checkbox">Beauty</Checkbox>
        <Checkbox className="sidebar-checkbox">Wellness</Checkbox>
        <Checkbox className="sidebar-checkbox">Jewellery</Checkbox>
      </Content>
      <Text className="product-listing-text">Availability</Text>
      <Content className="sidebar-list-container">
        <Checkbox className="sidebar-checkbox">Available</Checkbox>
        <Checkbox className="sidebar-checkbox">In Stock</Checkbox>
        <Checkbox className="sidebar-checkbox">Not Available</Checkbox>
      </Content>
      <Text className="product-listing-text">Size</Text>
      <Content className="sidebar-list-container">
        <Checkbox className="sidebar-checkbox">Small</Checkbox>
        <Checkbox className="sidebar-checkbox">Medium</Checkbox>
        <Checkbox className="sidebar-checkbox">Large</Checkbox>
        <Checkbox className="sidebar-checkbox">XL</Checkbox>
        <Checkbox className="sidebar-checkbox">XXL</Checkbox>
      </Content>
      <Text className="product-listing-text">Filter by Price</Text>
      <Content className="sidebar-list-container">
        <Slider
          range
          defaultValue={priceRange}
          onChange={(range) => setPriceRange(range)}
        />
        <Text className="sidebar-price-range-text">
          <span>From:</span> ${priceRange[0]} / <span>To:</span> $
          {priceRange[1]}
        </Text>
      </Content>
      <Text className="product-listing-text">Filter by Rating</Text>
      <Content className="sidebar-list-container">
        {Array.from({ length: 5 }, (_, i) => i + 1)
          .reverse()
          .map((rate) => (
            <Rate
              disabled
              defaultValue={rate}
              key={rate}
              className="sidebar-rate"
            />
          ))}
      </Content>
    </Content>
  );
};
