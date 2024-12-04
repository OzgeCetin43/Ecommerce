import { Link } from "react-router-dom";
import { Row, Col, Typography, Select } from "antd";

import "./main-header-top.css";

const { Text } = Typography;

const MainHeaderTop = () => {
  return (
    <Row gutter={[0, 0]} className="main-header-top-container">
      <Col span={12}>
        <Text className="main-header-top-description">
          Get up to 50% off new season styles, limited time only.
        </Text>
      </Col>
      <Col span={12}>
        <Row gutter={[0, 0]}>
          <Col span={12}></Col>
          <Col span={4}>
            <Link to="/help-center" className="main-header-top-link">
              Help Center
            </Link>
          </Col>
          <Col span={4}>
            <Link to="/order-tracking" className="main-header-top-link">
              Order Tracking
            </Link>
          </Col>
          <Col span={4}>
            <Select
              className="language-dropdown"
              defaultValue="EN"
              options={[
                { value: "EN", label: "English" },
                { value: "TR", label: "Türkçe" },
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainHeaderTop;
