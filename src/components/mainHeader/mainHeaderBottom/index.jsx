import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Button,
  Drawer,
  Menu,
  Typography,
  Dropdown,
} from "antd";
import {
  FaClipboardList,
  FaDoorClosed,
  FaPlus,
  FaRocket,
} from "react-icons/fa6";

import "./main-header-bottom.css";

const { Content } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;

const items = [
  {
    label: <Link to="/men">Men</Link>,
    key: "men",
    children: [
      {
        label: <Link to="/">Tshirt</Link>,
        key: "men-tshirt",
      },
      {
        label: <Link to="/">Jeans</Link>,
        key: "men-jeans",
      },
      {
        label: <Link to="/">Footwear</Link>,
        key: "men-footwear",
      },
      {
        label: <Link to="/">Watch</Link>,
        key: "men-watch",
      },
    ],
  },
  {
    label: <Link to="/women">Women</Link>,
    key: "women",
  },
  {
    label: <Link to="/kids">Kids</Link>,
    key: "kids",
  },
  {
    label: <Link to="/girls">Girls</Link>,
    key: "girls",
  },
  {
    label: <Link to="/boys">Boys</Link>,
    key: "boys",
  },
];

const MainHeaderBottom = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Content className="main-header-bottom-container">
      <Row gutter={[0, 0]}>
        <Col span={6}>
          <Button
            className="shop-by-category-button"
            icon={<FaClipboardList />}
            iconPosition="start"
            onClick={() => setIsDrawerOpen(true)}
          >
            Shop By Categories
          </Button>
        </Col>
        <Col span={12}>
          <Row gutter={[0, 0]} className="main-header-bottom-links-container">
            <Col span={3}>
              <Dropdown
                menu={{ items }}
                arrow
                className="main-header-bottom-dropdown-menu"
              >
                <Link to="/fashion">Fashion</Link>
              </Dropdown>
            </Col>
            <Col span={4}>
              <Link to="/electronics">Electronics</Link>
            </Col>
            <Col span={2}>
              <Link to="/bags">Bags</Link>
            </Col>
            <Col span={3}>
              <Link to="/footwear">Footwear</Link>
            </Col>
            <Col span={3}>
              <Link to="/groceries">Groceries</Link>
            </Col>
            <Col span={3}>
              <Link to="/beauty">Beauty</Link>
            </Col>
            <Col span={3}>
              <Link to="/wellness">Wellness</Link>
            </Col>
            <Col span={3}>
              <Link to="/jewellery">Jewellery</Link>
            </Col>
          </Row>
        </Col>
        <Col span={6} className="free-international-delivery-text-container">
          <FaRocket />
          <Text className="free-international-delivery-text">
            Free International Delivery
          </Text>
        </Col>
      </Row>
      <Drawer
        title="Shop By Categories"
        placement="left"
        closable={false}
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        extra={
          <Button
            icon={<FaDoorClosed />}
            className="drawer-close-button"
            onClick={() => setIsDrawerOpen(false)}
          />
        }
        className="shop-by-category-drawer"
      >
        <Menu mode="inline" className="drawer-menu" expandIcon={<FaPlus />}>
          <SubMenu key="fashion" title={<Link to="/fashion">Fashion</Link>}>
            <SubMenu key="men" title={<Link to="/men">Men</Link>}>
              <Menu.Item key="tshirt">
                <Link to="/">Tshirt</Link>
              </Menu.Item>
              <Menu.Item key="jeans">
                <Link to="/">Jeans</Link>
              </Menu.Item>
              <Menu.Item key="footwear">
                <Link to="/">Footwear</Link>
              </Menu.Item>
              <Menu.Item key="watch">
                <Link to="/">Watch</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="women">
              <Link to="/women">Women</Link>
            </Menu.Item>
            <Menu.Item key="kids">
              <Link to="/kids">Kids</Link>
            </Menu.Item>
            <Menu.Item key="girls">
              <Link to="/girls">Girls</Link>
            </Menu.Item>
            <Menu.Item key="boys">
              <Link to="/boys">Boys</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="electronics">
            <Link to="/electronics">Electronics</Link>
          </Menu.Item>
          <Menu.Item key="bags">
            <Link to="/bags">Bags</Link>
          </Menu.Item>
          <Menu.Item key="footwear">
            <Link to="/footwear">Footwear</Link>
          </Menu.Item>
          <Menu.Item key="groceries">
            <Link to="/groceries">Groceries</Link>
          </Menu.Item>
          <Menu.Item key="beauty">
            <Link to="/beauty">Beauty</Link>
          </Menu.Item>
          <Menu.Item key="wellness">
            <Link to="/wellness">Wellness</Link>
          </Menu.Item>
          <Menu.Item key="jewellery">
            <Link to="/jewellery">Jewellery</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Content>
  );
};

export default MainHeaderBottom;
