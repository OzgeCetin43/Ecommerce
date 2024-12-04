import { Layout, Typography } from "antd";

import "./watch-banner.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const WatchBanner = () => {
  return (
    <Content className="watch-banner-container">
      <Title level={1} className="watch-banner-title">
        Watch
      </Title>
      <Content className="watch-banner-description-container">
        <Text className="watch-banner-description">
          M6 Smart Band 2.3 – Fitness Band
        </Text>
        <Text className="watch-banner-description">
          Men’s and Women’s Health Tracking, Red Strap
        </Text>
      </Content>
    </Content>
  );
};
