import { Layout, Typography } from "antd";
import { FaTruckFast } from "react-icons/fa6";

import "./free-shipping.css";

const { Content } = Layout;
const { Text } = Typography;

export const FreeShipping = () => {
  return (
    <Content className="free-shipping-container">
      <Content className="free-shipping-left">
        <FaTruckFast />
        <Text className="free-shipping-text">Free Shipping</Text>
      </Content>
      <Content className="free-shipping-center">
        <Text className="free-delivery-text">
          Free Delivery Now On Your First Order and over $200
        </Text>
      </Content>
      <Content className="free-shipping-right">
        <Text className="free-shipping-info-text">Only $200</Text>
      </Content>
    </Content>
  );
};
