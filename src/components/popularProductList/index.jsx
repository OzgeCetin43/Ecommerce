import { useState } from "react";
import { Layout, Tabs, Typography, Card, Image, Rate, Button } from "antd";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import product1 from "../../assets/images/popular-product-image-1.jpg";
import product2 from "../../assets/images/popular-product-image-2.jpg";

import { PopularProducts } from "../../assets/data/popular-products";

import { ProductDetailModal } from "../productDetailModal";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./popular-product-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

const items = [
  {
    key: "fashion",
    label: "Fashion",
  },
  {
    key: "electronics",
    label: "Electronics",
  },
  {
    key: "bags",
    label: "Bags",
  },
  {
    key: "footwear",
    label: "Footwear",
  },
  {
    key: "groceries",
    label: "Groceries",
  },
  {
    key: "beauty",
    label: "Beauty",
  },
  {
    key: "wellness",
    label: "Welness",
  },
  {
    key: "jewellery",
    label: "Jewellery",
  },
];

export const PopularProductList = () => {
  const [activeTab, setActiveTab] = useState("fashion");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const productList = PopularProducts[activeTab];

  return (
    <Content className="popular-product-list-container">
      <Content className="popular-product-list-title-container">
        <Content className="popular-product-list-title-left">
          <Title level={4} className="popular-product-list-title">
            Popular Products
          </Title>
          <Text className="popular-product-list-description-text">
            Do not miss the current offers until the end of the March.
          </Text>
        </Content>
        <Content className="popular-product-list-title-right">
          <Tabs
            defaultActiveKey="fashion"
            items={items}
            className="popular-product-list-tabs"
            onChange={handleTabChange}
          />
        </Content>
      </Content>
      <Content className="popular-product-list-slider-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="popular-product-list-slider"
        >
          {productList?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card hoverable className="popular-product-list-card">
                <Text className="popular-product-list-off-percentage">
                  {item.discount}
                </Text>
                <Content className="popular-product-list-actions-container">
                  <Button
                    icon={<MdOutlineZoomOutMap />}
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedProduct(item);
                    }}
                  />
                  <Button icon={<IoMdGitCompare />} />
                  <Button icon={<FaRegHeart />} />
                </Content>
                <Image
                  src={product1}
                  alt="popular product"
                  preview={false}
                  className="popular-product-img-1"
                />
                <Image
                  src={product2}
                  alt="popular product"
                  preview={false}
                  className="popular-product-img-2"
                />
                <Content className="popular-product-list-info-container">
                  <Text className="popular-product-brand-name-text">
                    {item.brand}
                  </Text>
                  <Title level={5} className="popular-product-name-title">
                    {item.name}
                  </Title>
                  <Rate
                    disabled
                    defaultValue={item.rate}
                    className="popular-product-list-rate"
                  />
                  <Text className="popular-product-list-rate-text">
                    ({item.rate})
                  </Text>
                  <Content className="popular-product-list-price-container">
                    <Text className="popular-product-list-old-price">
                      {item.oldPrice}
                    </Text>
                    <Text className="popular-product-list-new-price">
                      {item.newPrice}
                    </Text>
                  </Content>
                  <Content className="popular-product-list-available-info-content">
                    <Text className="popular-product-list-available-size-text">
                      Available Sizes: <b>{item.size}</b>
                    </Text>
                    <Text className="popular-product-list-available-color-text">
                      Available Colors: <b>{item.color}</b>
                    </Text>
                  </Content>
                  <Button
                    className="popular-product-list-add-to-cart-button"
                    icon={<FaCartShopping />}
                  >
                    Add to Cart
                  </Button>
                </Content>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
      <ProductDetailModal
        product={selectedProduct}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Content>
  );
};
