import { Button, Image, Layout, Typography, Row, Col } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { HomeBanners } from "../../assets/data/home-banners";

import smallBanner1 from "../../assets/images/banner-1.avif";
import smallBanner2 from "../../assets/images/banner-2.avif";
import smallBanner3 from "../../assets/images/banner-3.avif";
import smallBanner4 from "../../assets/images/banner-4.avif";
import smallBanner5 from "../../assets/images/banner-5.avif";
import smallBanner6 from "../../assets/images/banner-6.avif";
import smallBanner7 from "../../assets/images/banner-7.avif";
import smallBanner8 from "../../assets/images/banner-8.avif";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home-banner-slider.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const HomeBannerSlider = () => {
  return (
    <Content className="home-banner-slider-container">
      <Content className="home-banner-slider-container-left">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="home-banner-slider"
        >
          {HomeBanners.map((banner) => (
            <SwiperSlide key={banner.id} className="home-banner-slider-item">
              <Image preview={false} src={banner.image} alt="banner" />
              <Content className="home-banner-slider-info-container">
                <Title className="home-banner-slide-title">
                  {banner.title}
                </Title>
                <Text className="home-banner-slide-text">
                  {banner.description}
                </Text>
                <Button className="home-banner-slide-button">
                  {banner.buttonText}
                </Button>
              </Content>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
      <Content className="home-banner-slider-container-right">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Image src={smallBanner1} alt="banner" preview={false} />
          </Col>
          <Col span={12}>
            <Image src={smallBanner2} alt="banner" preview={false} />
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Image src={smallBanner3} alt="banner" preview={false} />
          </Col>
          <Col span={12}>
            <Image src={smallBanner4} alt="banner" preview={false} />
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Image src={smallBanner5} alt="banner" preview={false} />
          </Col>
          <Col span={12}>
            <Image src={smallBanner6} alt="banner" preview={false} />
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Image src={smallBanner7} alt="banner" preview={false} />
          </Col>
          <Col span={12}>
            <Image src={smallBanner8} alt="banner" preview={false} />
          </Col>
        </Row>
      </Content>
    </Content>
  );
};
