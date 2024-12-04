import { Carousel, Typography, Rate, Button, Layout, Image } from "antd";
import { FaHeart, FaPlay } from "react-icons/fa6";

import slideImage1 from "../../assets/images/home-slider-1.jpg";
import slideImage2 from "../../assets/images/home-slider-2.jpg";
import slideImage3 from "../../assets/images/home-slider-3.jpg";
import slideImage4 from "../../assets/images/home-slider-4.jpg";

import "./home-slider.css";

const { Content } = Layout;
const { Title, Text } = Typography;

const slideImages = [slideImage1, slideImage2, slideImage3, slideImage4];

export const HomeSlider = () => {
  return (
    <Content className="home-slider-container">
      <Carousel arrows autoplay infinite className="home-slider">
        {slideImages.map((slideImage, index) => (
          <Content
            gutter={[0, 0]}
            key={index}
            className="home-slider-inner-container"
          >
            <Content className="home-slider-left">
              <Title level={1} className="home-slider-title">
                Raw Ham Colorblock T-shirt
              </Title>
              <Rate disabled defaultValue={5} />
              <Text className="home-slider-description">
                The international hoodies with excellent durable fabric, not to
                heavy but simply PERFECT for American summer.
              </Text>
              <Content className="home-slider-price-container">
                <Text className="home-slider-new-price">$49.55</Text>
                <Text className="home-slider-old-price">$68.95</Text>
              </Content>
              <Content className="home-slider-actions">
                <Button className="home-slider-add-to-cart-button">
                  Add to Cart
                </Button>
                <Button
                  icon={<FaHeart />}
                  className="home-slider-wishlist-button"
                />
              </Content>
            </Content>
            <Content className="home-slider-center">
              <Text className="home-slider-sale-off-text">
                Sale <span>70% Off</span>
              </Text>
              <Title level={1} className="home-slider-title-center">
                New Trending Fashion
              </Title>
              <Text className="home-slider-buy-free-text">
                Buy One Get One <span>Free</span>
              </Text>
              <Content className="home-slider-discover-container">
                <Button
                  icon={<FaPlay />}
                  className="home-slider-discover-play-button"
                />
                <Content className="home-slider-discover-text-container">
                  <Text className="home-slider-discover-text">Discover</Text>
                  <Text className="home-slider-collection-text">
                    Our Collection
                  </Text>
                </Content>
              </Content>
            </Content>
            <Content className="home-slider-right">
              <Image src={slideImage} preview={false} alt="slideImage" />
            </Content>
          </Content>
        ))}
      </Carousel>
    </Content>
  );
};
