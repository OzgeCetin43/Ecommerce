import { Card, Layout, Typography, Image } from "antd";

import { Categories } from "../../assets/data/categories";

import "./category-list.css";

const { Content } = Layout;
const { Text } = Typography;

export const CategoryList = () => {
  return (
    <Content className="category-list-container">
      {Categories.map((category) => (
        <Card className="category-list-card" key={category.id}>
          <Image src={category.icon} alt="category" preview={false} />
          <Text className="category-list-name">{category.name}</Text>
        </Card>
      ))}
    </Content>
  );
};
