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

import "./featured-product-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const FeaturedProductList = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = PopularProducts[type];

  return (
    <Content className="featured-product-list-container">
      <Title level={4}>Featured Products</Title>
      <Content className="featured-product-list-slider-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="featured-product-list-slider"
        >
          {productList?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card hoverable className="featured-product-list-card">
                <Text className="featured-product-list-off-percentage">
                  {item.discount}
                </Text>
                <Content className="featured-product-list-actions-container">
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
                  alt="featured product"
                  preview={false}
                  className="featured-product-img-1"
                />
                <Image
                  src={product2}
                  alt="featured product"
                  preview={false}
                  className="featured-product-img-2"
                />
                <Content className="featured-product-list-info-container">
                  <Text className="featured-product-brand-name-text">
                    {item.brand}
                  </Text>
                  <Title level={5} className="featured-product-name-title">
                    {item.name}
                  </Title>
                  <Rate
                    disabled
                    defaultValue={item.rate}
                    className="featured-product-list-rate"
                  />
                  <Text className="featured-product-list-rate-text">
                    ({item.rate})
                  </Text>
                  <Content className="featured-product-list-price-container">
                    <Text className="featured-product-list-old-price">
                      {item.oldPrice}
                    </Text>
                    <Text className="featured-product-list-new-price">
                      {item.newPrice}
                    </Text>
                  </Content>
                  <Content className="featured-product-list-available-info-content">
                    <Text className="featured-product-list-available-size-text">
                      Available Sizes: <b>{item.size}</b>
                    </Text>
                    <Text className="featured-product-list-available-color-text">
                      Available Colors: <b>{item.color}</b>
                    </Text>
                  </Content>
                  <Button
                    className="featured-product-list-add-to-cart-button"
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
