import { useState } from "react";
import { Layout, Typography, Card, Image, Rate, Button } from "antd";
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

import "./latest-product-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const LatestProductList = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = PopularProducts[type];

  return (
    <Content className="latest-product-list-container">
      <Title level={4}>Latest Products</Title>
      <Content className="latest-product-list-slider-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="latest-product-list-slider"
        >
          {productList?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card hoverable className="latest-product-list-card">
                <Text className="latest-product-list-off-percentage">
                  {item.discount}
                </Text>
                <Content className="latest-product-list-actions-container">
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
                  src={product2}
                  alt="latest product"
                  preview={false}
                  className="latest-product-img-1"
                />
                <Image
                  src={product1}
                  alt="latest product"
                  preview={false}
                  className="latest-product-img-2"
                />
                <Content className="latest-product-list-info-container">
                  <Text className="latest-product-brand-name-text">
                    {item.brand}
                  </Text>
                  <Title level={5} className="latest-product-name-title">
                    {item.name}
                  </Title>
                  <Rate
                    disabled
                    defaultValue={item.rate}
                    className="latest-product-list-rate"
                  />
                  <Text className="latest-product-list-rate-text">
                    ({item.rate})
                  </Text>
                  <Content className="latest-product-list-price-container">
                    <Text className="latest-product-list-old-price">
                      {item.oldPrice}
                    </Text>
                    <Text className="latest-product-list-new-price">
                      {item.newPrice}
                    </Text>
                  </Content>
                  <Content className="latest-product-list-available-info-content">
                    <Text className="latest-product-list-available-size-text">
                      Available Sizes: <b>{item.size}</b>
                    </Text>
                    <Text className="latest-product-list-available-color-text">
                      Available Colors: <b>{item.color}</b>
                    </Text>
                  </Content>
                  <Button
                    className="latest-product-list-add-to-cart-button"
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
