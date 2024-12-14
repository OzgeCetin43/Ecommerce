import { Card, List, Typography } from "antd";

import "./product-detail-description-tab.css";

const { Title, Text } = Typography;

const data = [
  "Function First",
  "Summer Breeze",
  "Casual and Rugged",
  "Possible Interpretations",
];

export const ProductDetailDescriptionTab = () => {
  return (
    <Card>
      <Title level={4} className="product-detail-description-tab-title">
        Description
      </Title>
      <Text clasName="product-detail-description-tab-text">
        Cargo shorts: Rugged, casual shorts with multiple pockets for utility,
        often in khaki or olive green. Sundress with drawstring: A breezy,
        summery dress with a flowy skirt, often made from light, patterned
        fabric. It has a drawstring waist for a comfortable, adjustable fit.
        Designed for practicality, cargo shorts boast numerous pockets on the
        legs and hips. everyday wear for someone who needs to carry a lot.
      </Text>
      <Title level={4} className="product-detail-description-tab-title">
        Features
      </Title>
      <List
        size="small"
        header={null}
        footer={null}
        dataSource={data}
        className="product-detail-description-list"
        renderItem={(item) => (
          <List.Item className="product-detail-description-list-item">
            {item}
          </List.Item>
        )}
      />
    </Card>
  );
};
