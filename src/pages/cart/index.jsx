import { Layout, Typography, Card, Image, Rate, Button } from "antd";
import { FaTrash } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";

import { Cart as CartData } from "../../assets/data/cart";

import "./cart.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Cart = () => {
  const totalPrice = CartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  const totalPriceVat20 = (totalPrice * 0.2).toFixed(2);

  const totalPriceWithVat = (+totalPrice + +totalPriceVat20).toFixed(2);

  const totalProductCount = CartData.map((x) => x.quantity).reduce(
    (acc, item) => acc + item
  );

  return (
    <Content className="cart-container">
      <Title level={4} className="cart-title">
        My Cart
      </Title>
      <Text className="cart-description-text">
        There are <b>{totalProductCount}</b> products in your cart.
      </Text>
      <Content className="cart-inner-container">
        <Content className="cart-inner-container-left">
          {CartData.map((item) => (
            <Card className="cart-card" key={item.id}>
              <Image
                src={item.image}
                alt={item.name}
                preview={false}
                className="cart-image"
              />
              <Content className="cart-info-container">
                <Text className="cart-brand-text">Urban Wear</Text>
                <Text className="cart-name-text">{item.name}</Text>
                <Rate disabled value={4} className="cart-rate" />
                <Content className="cart-price-container">
                  <Text className="cart-price-text">
                    {item.quantity} x ${item.price}
                  </Text>
                  <Text className="cart-off-text">55% Off</Text>
                </Content>
              </Content>
              <Button icon={<FaTrash />} className="cart-delete-button" />
            </Card>
          ))}
        </Content>
        <Content className="cart-inner-container-right">
          <Card className="cart-totals-card">
            <Title level={4} className="cart-title">
              Cart Totals
            </Title>
            <Content className="cart-totals-price-container">
              <Content className="cart-totals-text-container">
                <Text className="cart-totals-text">Sub-Total:</Text>
                <Text className="cart-totals-amount-text">${totalPrice}</Text>
              </Content>
              <Content className="cart-totals-text-container">
                <Text className="cart-totals-text">VAT (20%):</Text>
                <Text className="cart-totals-amount-text">
                  ${totalPriceVat20}
                </Text>
              </Content>
              <Content className="cart-totals-text-container">
                <Text className="cart-totals-text">Shipping:</Text>
                <Text className="cart-totals-amount-text">Free</Text>
              </Content>
              <Content className="cart-totals-text-container">
                <Text className="cart-totals-text">Estimate For:</Text>
                <Text className="cart-totals-amount-text">United Kingdom</Text>
              </Content>
              <Content className="cart-totals-text-container">
                <Text className="cart-totals-text">Total:</Text>
                <Text className="cart-totals-total-text">
                  ${totalPriceWithVat}
                </Text>
              </Content>
            </Content>
            <Button
              icon={<IoBagCheck />}
              className="cart-totals-checkout-button"
            >
              Checkout
            </Button>
          </Card>
        </Content>
      </Content>
    </Content>
  );
};
