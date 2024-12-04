import { Layout, Typography, Image } from "antd";

import payment from "../../../assets/images/payment.png";

import "./footer-bottom.css";

const { Content } = Layout;
const { Text } = Typography;

export const FooterBottom = () => {
  return (
    <Content className="footer-bottom-container">
      <Text className="footer-copyright-text">
        &copy; {new Date().getFullYear()} - Created by Loop Ecommerce
      </Text>
      <Image src={payment} preview={false} alt="payment" />
    </Content>
  );
};
