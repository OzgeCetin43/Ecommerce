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

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./related-product-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const RelatedProductList = ({ type }) => {
  const productList = PopularProducts[type];

  return (
    <Content className="related-product-list-container">
      <Title level={4}>Related Products</Title>
      <Content className="related-product-list-slider-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={4}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="related-product-list-slider"
        >
          {productList?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card hoverable className="related-product-list-card">
                <Text className="related-product-list-off-percentage">
                  {item.discount}
                </Text>
                <Content className="related-product-list-actions-container">
                  <Button icon={<MdOutlineZoomOutMap />} />
                  <Button icon={<IoMdGitCompare />} />
                  <Button icon={<FaRegHeart />} />
                </Content>
                <Image
                  src={product2}
                  alt="related product"
                  preview={false}
                  className="related-product-img-1"
                />
                <Image
                  src={product1}
                  alt="related product"
                  preview={false}
                  className="related-product-img-2"
                />
                <Content className="related-product-list-info-container">
                  <Text className="related-product-brand-name-text">
                    {item.brand}
                  </Text>
                  <Title level={5} className="related-product-name-title">
                    {item.name}
                  </Title>
                  <Rate
                    disabled
                    defaultValue={item.rate}
                    className="related-product-list-rate"
                  />
                  <Text className="related-product-list-rate-text">
                    ({item.rate})
                  </Text>
                  <Content className="related-product-list-price-container">
                    <Text className="related-product-list-old-price">
                      {item.oldPrice}
                    </Text>
                    <Text className="related-product-list-new-price">
                      {item.newPrice}
                    </Text>
                  </Content>
                  <Content className="related-product-list-available-info-content">
                    <Text className="related-product-list-available-size-text">
                      Available Sizes: <b>{item.size}</b>
                    </Text>
                    <Text className="related-product-list-available-color-text">
                      Available Colors: <b>{item.color}</b>
                    </Text>
                  </Content>
                  <Button
                    className="related-product-list-add-to-cart-button"
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
    </Content>
  );
};