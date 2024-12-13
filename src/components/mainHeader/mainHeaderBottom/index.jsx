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
    label: <Link to="/productListing">Men</Link>,
    key: "men",
    children: [
      {
        label: <Link to="/productListing">Tshirt</Link>,
        key: "men-tshirt",
      },
      {
        label: <Link to="/productListing">Jeans</Link>,
        key: "men-jeans",
      },
      {
        label: <Link to="/productListing">Footwear</Link>,
        key: "men-footwear",
      },
      {
        label: <Link to="/productListing">Watch</Link>,
        key: "men-watch",
      },
    ],
  },
  {
    label: <Link to="/productListing">Women</Link>,
    key: "women",
  },
  {
    label: <Link to="/productListing">Kids</Link>,
    key: "kids",
  },
  {
    label: <Link to="/productListing">Girls</Link>,
    key: "girls",
  },
  {
    label: <Link to="/productListing">Boys</Link>,
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
                <Link to="/productListing">Fashion</Link>
              </Dropdown>
            </Col>
            <Col span={4}>
              <Link to="/productListing">Electronics</Link>
            </Col>
            <Col span={2}>
              <Link to="/productListing">Bags</Link>
            </Col>
            <Col span={3}>
              <Link to="/productListing">Footwear</Link>
            </Col>
            <Col span={3}>
              <Link to="/productListing">Groceries</Link>
            </Col>
            <Col span={3}>
              <Link to="/productListing">Beauty</Link>
            </Col>
            <Col span={3}>
              <Link to="/productListing">Wellness</Link>
            </Col>
            <Col span={3}>
              <Link to="/productListing">Jewellery</Link>
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
          <SubMenu
            key="fashion"
            title={<Link to="/productListing">Fashion</Link>}
          >
            <SubMenu key="men" title={<Link to="/productListing">Men</Link>}>
              <Menu.Item key="tshirt">
                <Link to="/productListing">Tshirt</Link>
              </Menu.Item>
              <Menu.Item key="jeans">
                <Link to="/productListing">Jeans</Link>
              </Menu.Item>
              <Menu.Item key="footwear">
                <Link to="/productListing">Footwear</Link>
              </Menu.Item>
              <Menu.Item key="watch">
                <Link to="/productListing">Watch</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="women">
              <Link to="/productListing">Women</Link>
            </Menu.Item>
            <Menu.Item key="kids">
              <Link to="/productListing">Kids</Link>
            </Menu.Item>
            <Menu.Item key="girls">
              <Link to="/productListing">Girls</Link>
            </Menu.Item>
            <Menu.Item key="boys">
              <Link to="/productListing">Boys</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="electronics">
            <Link to="/productListing">Electronics</Link>
          </Menu.Item>
          <Menu.Item key="bags">
            <Link to="/productListing">Bags</Link>
          </Menu.Item>
          <Menu.Item key="footwear">
            <Link to="/productListing">Footwear</Link>
          </Menu.Item>
          <Menu.Item key="groceries">
            <Link to="/productListing">Groceries</Link>
          </Menu.Item>
          <Menu.Item key="beauty">
            <Link to="/productListing">Beauty</Link>
          </Menu.Item>
          <Menu.Item key="wellness">
            <Link to="/productListing">Wellness</Link>
          </Menu.Item>
          <Menu.Item key="jewellery">
            <Link to="/productListing">Jewellery</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Content>
  );
};

export default MainHeaderBottom;
