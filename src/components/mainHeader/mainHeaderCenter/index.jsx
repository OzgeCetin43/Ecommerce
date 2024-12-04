import { Link } from "react-router-dom";
import {
  Image,
  Row,
  Col,
  Typography,
  Layout,
  Divider,
  Badge,
  Tooltip,
} from "antd";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";

import { SearchBox } from "../../searchBox";

import logo from "../../../assets/images/logo.png";

import "./main-header-center.css";

const { Content } = Layout;
const { Text } = Typography;

const MainHeaderCenter = () => {
  return (
    <Row gutter={[0, 0]} className="main-header-center-container">
      <Col span={4}>
        <Link to="/" className="logo-container">
          <Image src={logo} width={50} preview={false} />
          <Content className="brand-container">
            <Text className="brand-name-text">Loop</Text>
            <Text className="brand-name-text">Ecommerce</Text>
          </Content>
        </Link>
      </Col>
      <Col span={14}>
        <SearchBox />
      </Col>
      <Col span={1} />
      <Col span={5}>
        <Row gutter={[0, 0]} className="main-header-center-user-info-container">
          <Col span={12} className="login-register-container">
            <Link to="/login">Login</Link>
            <Divider type="vertical" className="main-header-center-divider" />
            <Link to="/register">Register</Link>
          </Col>
          <Col span={4} className="main-header-center-icon-container">
            <Tooltip placement="bottom" title="Compare">
              <Badge count={1} color="#94a3b8">
                <IoMdGitCompare className="compare-icon" />
              </Badge>
            </Tooltip>
          </Col>
          <Col span={4} className="main-header-center-icon-container">
            <Tooltip placement="bottom" title="Wishlist">
              <Badge count={1} color="#94a3b8">
                <FaRegHeart className="wishlist-icon" />
              </Badge>
            </Tooltip>
          </Col>
          <Col span={4} className="main-header-center-icon-container">
            <Tooltip placement="bottom" title="Cart">
              <Badge count={1} color="#94a3b8">
                <FaCartShopping className="cart-icon" />
              </Badge>
            </Tooltip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainHeaderCenter;
