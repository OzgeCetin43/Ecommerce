import { Card, Image, Layout, Typography } from "antd";

import { Services } from "../../assets/data/services";

import "./services-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const ServicesList = () => {
  return (
    <Content className="services-list-container">
      <Title level={4}>Our Services</Title>
      <Content className="services-container">
        {Services.map((service) => (
          <Card className="services-list-card" key={service.id}>
            <Image src={service.icon} alt={service.title} preview={false} />
            <Text className="services-name-text">{service.title}</Text>
            <Text className="services-description-text">
              {service.description}
            </Text>
          </Card>
        ))}
      </Content>
    </Content>
  );
};
