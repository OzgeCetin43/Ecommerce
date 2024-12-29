import { Layout, Typography, Form, Input, Row, Col, Card, Button } from "antd";
import { IoBagCheck } from "react-icons/io5";

import { Cart } from "../../assets/data/cart";

import "./checkout.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Checkout = () => {
  const totalPrice = Cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <Content className="checkout-container">
      <Content className="checkout-container-left">
        <Title level={4} className="checkout-title">
          Billing Details
        </Title>
        <Form name="checkout" className="checkout-form">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name!",
                  },
                ]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Please enter your country!",
                  },
                ]}
              >
                <Input placeholder="Country" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="houseNoStreetName"
            rules={[
              {
                required: true,
                message: "Please enter your house no. and street name!",
              },
            ]}
          >
            <Input placeholder="House No. and Street Name" />
          </Form.Item>
          <Form.Item name="apartmentSuitUnit">
            <Input placeholder="Apartment, Suit, Unit etc. (optional)" />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name="townCity"
                rules={[
                  {
                    required: true,
                    message: "Please enter your town / city!",
                  },
                ]}
              >
                <Input placeholder="Town / City" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="stateCountry"
                rules={[
                  {
                    required: true,
                    message: "Please enter your state / country!",
                  },
                ]}
              >
                <Input placeholder="State / Country" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="postCodeZip"
            rules={[
              {
                required: true,
                message: "Please enter your post code / Zip!",
              },
            ]}
          >
            <Input placeholder="Post Code / Zip" />
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input placeholder="Email" type="email" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
      <Content className="checkout-container-right">
        <Card className="checkout-card">
          <Title level={4}>Your Order</Title>
          {Cart.map((item) => (
            <Content key={item.id} className="cart-item">
              <Text className="cart-item-text">
                {item.name} <span>x {item.quantity}</span>
              </Text>
              <Text className="cart-item-total-price">
                ${(item.quantity * item.price).toFixed(2)}
              </Text>
            </Content>
          ))}
          <Content className="checkout-total-price-container">
            <Text className="checkout-total-text">Total: </Text>
            <Text className="checkout-total-price-text">${totalPrice}</Text>
          </Content>
          <Button icon={<IoBagCheck />} className="checkout-button">
            Checkout
          </Button>
        </Card>
      </Content>
    </Content>
  );
};
