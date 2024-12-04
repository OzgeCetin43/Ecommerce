import { Link } from "react-router-dom";
import { Layout, Typography, Row, Col, Input, Button, Checkbox } from "antd";
import { IoChatbubblesSharp } from "react-icons/io5";

import { FooterBottom } from "./footerBottom";

import "./main-footer.css";

const { Footer, Content } = Layout;
const { Title, Text } = Typography;

export const MainFooter = () => {
  return (
    <Footer className="main-footer">
      <Row gutter={[0, 0]}>
        <Col span={7} className="footer-col">
          <Title level={4} className="footer-title-text">
            Contact Us
          </Title>
          <Text className="footer-address-text">
            Loop Ecommerce - İzmir / Turkey
          </Text>
          <Text className="footer-email-text">loop@ecommerce.com</Text>
          <Text className="footer-phone-text">(+90) 123 456 78 90</Text>
          <Content className="footer-help-container">
            <IoChatbubblesSharp />
            <Content className="footer-help-text-container">
              <Text className="footer-help-text">Online Chat</Text>
              <Text className="footer-help-text">Get Expert Help</Text>
            </Content>
          </Content>
        </Col>
        <Col span={5} className="footer-col">
          <Title level={4} className="footer-title-text">
            Products
          </Title>
          <Link to="/">Prices Drop</Link>
          <Link to="/">New Products</Link>
          <Link to="/">Best Sales</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Sitemap</Link>
          <Link to="/">Stores</Link>
        </Col>
        <Col span={5} className="footer-col">
          <Title level={4} className="footer-title-text">
            Our Company
          </Title>
          <Link to="/">Delivery</Link>
          <Link to="/">Legal Notice</Link>
          <Link to="/">Terms & Conditions Of Use</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Secure Payment</Link>
          <Link to="/">Login</Link>
        </Col>
        <Col span={7} className="footer-col">
          <Title level={4} className="footer-title-text">
            Subscribe To Newsletter
          </Title>
          <Text className="footer-newsletter-description-text">
            Subscribe to our latest newsletter to get news about special
            discounts.
          </Text>
          <Input
            className="footer-newsletter-input"
            placeholder="Your Email Address"
          />
          <Button className="footer-newsletter-button">Subscribe</Button>
          <Checkbox className="footer-newsletter-checkbox">
            I agree to the terms and conditions and the privacy policy
          </Checkbox>
        </Col>
      </Row>
      <FooterBottom />
    </Footer>
  );
};
