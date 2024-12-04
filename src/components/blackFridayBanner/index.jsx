import { Layout, Image, Typography, Button } from "antd";

import logo from "../../assets/images/logo.png";
import hero from "../../assets/images/black-friday-hero.png";

import "./black-friday-banner.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const BlackFridayBanner = () => {
  return (
    <Content className="black-friday-banner-container">
      <Content className="black-friday-banner-logo-container">
        <Image
          src={logo}
          preview={false}
          alt="logo"
          className="black-friday-banner-logo"
        />
        <Text className="black-friday-banner-brand-text">Loop Ecommerce</Text>
      </Content>
      <Text className="black-friday-text">Black Friday</Text>
      <Title level={1} className="black-friday-title">
        A new shoes
      </Title>
      <Title level={4} className="black-friday-banner-title-description">
        Best in the market
      </Title>
      <Text className="black-friday-info-text">
        Get ready for the biggest shopping event of the year with our Black
        Friday Sale! Enjoy unbeatable discounts on a wide range of products,
        including fashion, electronics, beauty, footwear, and more. Whether
        you're treating yourself or getting ahead on holiday gifts, now is the
        perfect time to score incredible deals on top-quality items. Hurry,
        these offers are available for a limited time only — shop now before
        they’re gone!
      </Text>
      <Image
        src={hero}
        alt="black friday"
        preview={false}
        className="black-friday-banner-hero"
      />
      <Text className="black-friday-banner-text">
        Keep calm and don’t miss black Friday sale fun
      </Text>
      <Button className="black-friday-shop-button">Buy Now Here !</Button>
    </Content>
  );
};
