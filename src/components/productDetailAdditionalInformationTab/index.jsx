import { Card, Typography, List } from "antd";

import "./product-detail-additional-information-tab.css";

const { Title, Text } = Typography;

const data = [
  "Fabric type: Georgette",
  "Care instructions: Machine Wash",
  "Occasion type: Casual",
  "Sleeve type: Long Sleeve",
  "Pattern: Solid",
  "Closure type: Georgette",
  "Country of origin: Bangladesh",
];

export const ProductDetailAdditionalInformationTab = () => {
  return (
    <Card>
      <Title level={4} className="product-detail-additional-information-title">
        Additional Information:
      </Title>
      <List
        size="small"
        header={null}
        footer={null}
        dataSource={data}
        className="product-detail-additional-information-list"
        renderItem={(item) => (
          <List.Item className="product-detail-additional-information-list-item">
            {item}
          </List.Item>
        )}
      />
    </Card>
  );
};
