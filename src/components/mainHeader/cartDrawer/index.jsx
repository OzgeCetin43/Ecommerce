import { useNavigate } from "react-router-dom";
import { Drawer, Button, Layout, Image, Typography } from "antd";
import { FaDoorClosed } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

import { Cart } from "../../../assets/data/cart";

import "./cart-drawer.css";

const { Content } = Layout;
const { Text } = Typography;

export const CartDrawer = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const totalPrice = Cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  const totalPriceVat20 = (totalPrice * 0.2).toFixed(2);

  const totalPriceWithVat = (+totalPrice + +totalPriceVat20).toFixed(2);

  return (
    <Drawer
      title="My Cart"
      closable={false}
      onClose={() => setIsOpen(false)}
      open={isOpen}
      extra={
        <Button
          icon={<FaDoorClosed />}
          className="drawer-close-button"
          onClick={() => setIsOpen(false)}
        />
      }
      className="cart-drawer"
    >
      {Cart.map((cart) => (
        <Content className="cart-item-container" key={cart.id}>
          <Image src={cart.image} alt={cart.name} preview={false} />
          <Content className="cart-item-info-container">
            <Text className="cart-item-title-text">{cart.name}</Text>
            <Text className="cart-item-price-and-quantity-text">
              <b>${cart.price}</b> x {cart.quantity}
            </Text>
          </Content>
          <Button icon={<FaTrash />} className="cart-drawer-delete-button" />
        </Content>
      ))}
      <Content className="cart-total-price-container">
        <Content className="cart-text-container">
          <Text className="cart-text">Sub-Total:</Text>
          <Text className="cart-amount-text">${totalPrice}</Text>
        </Content>
        <Content className="cart-text-container">
          <Text className="cart-text">VAT (20%):</Text>
          <Text className="cart-amount-text">${totalPriceVat20}</Text>
        </Content>
        <Content className="cart-text-container">
          <Text className="cart-text">Total:</Text>
          <Text className="cart-amount-text">${totalPriceWithVat}</Text>
        </Content>
      </Content>
      <Content className="cart-actions-container">
        <Button className="cart-view-button" onClick={() => navigate("/cart")}>
          View Cart
        </Button>
        <Button
          className="cart-checkout-button"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </Content>
    </Drawer>
  );
};
