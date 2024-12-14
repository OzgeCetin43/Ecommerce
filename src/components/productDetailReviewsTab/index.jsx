import React from "react";
import {
  Card,
  List,
  Typography,
  Avatar,
  Space,
  Form,
  Input,
  Button,
  Row,
  Col,
} from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

import "./product-detail-reviews-tab.css";

const { Title } = Typography;

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "/",
  title: "Amelia Rodriguez",
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: "Customer",
  content:
    "Men’s Slim Fit Dress Shirt is an excellent choice for those who value modern style and impeccable tailoring. Crafted from a high-quality blend of cotton and polyester, this shirt offers a smooth, wrinkle-resistant finish that stays crisp throughout the day.",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ProductDetailReviewsTab = () => {
  return (
    <Card>
      <Title level={4} className="product-detail-reviews-tab-title">
        Total Reviews ({data.length})
      </Title>
      <List
        itemLayout="vertical"
        className="product-detail-reviews-tab-list"
        size="small"
        pagination={{
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
      <Title level={4}>Write Comment</Title>
      <Form
        name="reviews"
        autoComplete="off"
        layout="vertical"
        className="product-detail-reviews-form"
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Comment"
          name="comment"
          rules={[
            {
              required: true,
              message: "Please enter your comment!",
            },
          ]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            className="product-detail-review-tab-button"
          >
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
