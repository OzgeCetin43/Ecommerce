import { useState } from "react";
import {
  Layout,
  Rate,
  Typography,
  Divider,
  Progress,
  Button,
  Input,
  Tooltip,
} from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";

import { Zoom } from "../zoom";
import { SpecialOffer } from "../specialOffer";

import "./product-details.css";

const { Content } = Layout;
const { Title, Text } = Typography;

const positiveNumberRegex = /^\d+$/;

export const ProductDetails = ({ product, category }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  const handleKeyPress = (e) => {
    if (
      !positiveNumberRegex.test(e.key) &&
      event.key !== "Backspace" &&
      event.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  return (
    <Content className="product-details-container">
      <Zoom />
      <Content className="product-detail-info-container">
        <Rate
          disabled
          defaultValue={product.rating}
          className="product-detail-rate"
        />
        <Text className="product-detail-review-text">(100+ Reviews)</Text>
        <Title level={2} className="product-detail-title">
          {product.name}
        </Title>
        <Text className="product-detail-description">
          {product.description}
        </Text>
        <Content className="product-detail-prices-container">
          <Text className="product-detail-old-price-text">
            {product.oldPrice}
          </Text>
          <Text className="product-detail-new-price-text">
            {product.newPrice}
          </Text>
        </Content>
        <Divider className="product-detail-divider" />
        <Content className="product-detail-inner-info-container">
          <Text className="product-detail-info-text">
            <b>Brand: </b> {product.brand}
          </Text>
          <Text className="product-detail-info-text">
            <b>Condition: </b> Used
          </Text>
          <Text className="product-detail-info-text">
            <b>Reference: </b> {category}
          </Text>
          <Text className="product-detail-info-text">
            <b>Available In Stock: </b> <span>10 Items</span>
          </Text>
        </Content>
        <Text className="product-detail-hurry-text">
          Hurry up! only <span>10</span> items left in stock!
        </Text>
        <Progress
          percent={10}
          showInfo={false}
          strokeColor="#bef264"
          className="product-detail-progress"
        />
        <SpecialOffer />
        <Content className="product-detail-size-container">
          <Text className="product-detail-size-text">Sizes:</Text>
          <Content className="product-detail-size-items-container">
            {product.sizes?.map((size, index) => (
              <Button
                className={`product-detail-size-button ${selectedSize === size ? "product-detail-active-size" : ""}`}
                key={index}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </Content>
        </Content>
        <Content className="product-detail-color-container">
          <Text className="product-detail-color-text">Colors:</Text>
          <Content className="product-detail-color-items-container">
            {product.colors?.map((color, index) => (
              <Button
                className={`product-detail-color-button ${selectedColor === color ? "product-detail-active-color" : ""}`}
                key={index}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </Button>
            ))}
          </Content>
        </Content>
        <Content className="product-detail-add-to-cart-container">
          <Text className="product-detail-free-shipping-text">
            Free Shipping (Est. Delivery Time 2-3 Days)
          </Text>
          <Content className="product-detail-add-to-cart-detail-container">
            <Input
              value={quantity}
              type="number"
              min={1}
              className="product-detail-quantity-input"
              onChange={(e) =>
                setQuantity(e.target.value < 1 ? 1 : e.target.value)
              }
              onKeyDown={handleKeyPress}
            />
            <Button
              className="product-detail-add-to-cart-button"
              icon={<FaCartShopping />}
            >
              Add to Cart
            </Button>
            <Tooltip placement="bottom" title="Add to Wishlist">
              <Button
                icon={<FaRegHeart />}
                className="product-detail-action-button"
              />
            </Tooltip>
            <Tooltip placement="bottom" title="Add to Compare">
              <Button
                icon={<IoMdGitCompare />}
                className="product-detail-action-button"
              />
            </Tooltip>
          </Content>
        </Content>
      </Content>
    </Content>
  );
};
