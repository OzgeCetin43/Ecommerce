import { useState } from "react";
import { Layout, Image } from "antd";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import product1 from "../../assets/images/popular-product-image-2.jpg";
import product2 from "../../assets/images/popular-product-image-1.jpg";
import product3 from "../../assets/images/product-detail-1.jpg";
import product4 from "../../assets/images/product-detail-2.jpg";
import product5 from "../../assets/images/product-detail-3.jpg";
import product6 from "../../assets/images/product-detail-4.jpg";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./zoom.css";

const { Content } = Layout;

const images = [product1, product2, product3, product4, product5, product6];

export const Zoom = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Content className="zoom-container">
      <Swiper
        direction="vertical"
        slidesPerView={4}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="zoom-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              preview={false}
              alt="product"
              onClick={() => setCurrentImage(index)}
              className={currentImage === index ? "product-active-image" : ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <InnerImageZoom
        zoomType="hover"
        zoomScale={1.5}
        src={images[currentImage]}
        className="inner-image-zoom"
      />
    </Content>
  );
};
