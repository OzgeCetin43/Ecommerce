import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Typography,
  Card,
  Image,
  Rate,
  Button,
  Select,
  Pagination,
} from "antd";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { Products } from "../../assets/data/products";

import product1 from "../../assets/images/popular-product-image-2.jpg";
import product2 from "../../assets/images/popular-product-image-1.jpg";

import "./product-item-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const ProductItemList = () => {
  const [gridType, setGridType] = useState("four");
  const navigate = useNavigate();

  return (
    <>
      <Content className="product-item-list-header-container">
        <Content className="product-list-item-grid-container">
          <BsFillGridFill
            className={gridType === "four" ? "active-grid-type" : ""}
            onClick={() => setGridType("four")}
          />
          <GiHamburgerMenu
            className={gridType === "one" ? "active-grid-type" : ""}
            onClick={() => setGridType("one")}
          />
          <Text className="product-list-item-total-count-text">
            There are 24 products.
          </Text>
        </Content>
        <Content className="product-list-item-sort-by-container">
          <Text className="product-list-sort-by-text">Sort By:</Text>
          <Select
            defaultValue="relevance"
            options={[
              {
                value: "sales-highest-to-lowest",
                label: "Sales, highest to lowest",
              },
              { value: "relevance", label: "Relevance" },
              { value: "name-a-to-z", label: "Name, A to Z" },
              { value: "name-z-to-a", label: "Name, Z to A" },
              { value: "price-low-to-high", label: "Price, low to high" },
              { value: "price-high-to-low", label: "Price, high to low" },
            ]}
            className="product-list-sort-by-select"
          />
        </Content>
      </Content>
      <Content className="product-item-list-container">
        {Products?.map((categoryItems) => {
          return categoryItems?.items?.map((item, index) => (
            <Card
              hoverable
              className={`product-item-list-card ${gridType}`}
              key={index}
            >
              <Text className="product-item-list-category-text">
                {categoryItems.category}
              </Text>
              <Content className="product-item-list-actions-container">
                <Button icon={<MdOutlineZoomOutMap />} />
                <Button icon={<IoMdGitCompare />} />
                <Button icon={<FaRegHeart />} />
              </Content>
              <Image
                src={product1}
                alt="product item"
                preview={false}
                className="product-item-img-1"
              />
              <Image
                src={product2}
                alt="product item"
                preview={false}
                className="product-item-img-2"
              />
              <Content className="product-item-list-info-container">
                <Text className="product-item-list-brand-text">
                  {item.brand}
                </Text>
                <Title
                  level={5}
                  className="product-item-name-title"
                  onClick={() =>
                    navigate(`/product/${index}`, {
                      state: { name: item.name },
                    })
                  }
                >
                  {item.name}
                </Title>
                <Rate
                  disabled
                  defaultValue={item.rating}
                  className="product-item-list-rate"
                />
                <Text className="product-item-list-rate-text">
                  ({item.rating})
                </Text>
                {gridType === "one" && (
                  <Text className="product-item-list-description-text">
                    {item.description}
                  </Text>
                )}
                <Content className="product-item-list-price-container">
                  <Text className="product-item-list-old-price">
                    {item.oldPrice}
                  </Text>
                  <Text className="product-item-list-new-price">
                    {item.newPrice}
                  </Text>
                </Content>
                <Content className="product-item-list-available-info-content">
                  <Text className="product-item-list-available-size-text">
                    Available Sizes: <b>{item.sizes.join(", ")}</b>
                  </Text>
                  <Text className="product-item-list-available-color-text">
                    Available Colors: <b>{item.colors.join(", ")}</b>
                  </Text>
                </Content>
                <Button
                  className="product-item-list-add-to-cart-button"
                  icon={<FaCartShopping />}
                >
                  Add to Cart
                </Button>
              </Content>
            </Card>
          ));
        })}
        <Pagination
          showSizeChanger
          defaultCurrent={1}
          total={500}
          className="product-list-item-pagination"
        />
      </Content>
    </>
  );
};
