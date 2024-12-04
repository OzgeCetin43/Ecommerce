import { Layout, Input, Button } from "antd";

import "./search-box.css";

const { Content } = Layout;

export const SearchBox = () => {
  return (
    <Content className="search-box-container">
      <Input placeholder="Search..." className="search-box-input" />
      <Button className="search-box-button">Search</Button>
    </Content>
  );
};
