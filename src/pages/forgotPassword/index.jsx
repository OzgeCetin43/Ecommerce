import { Link } from "react-router-dom";
import { Layout, Typography, Image, Form, Input, Button } from "antd";

import banner from "../../assets/images/forgot-password-banner.jpg";
import logo from "../../assets/images/logo.png";

import "./forgot-password.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const ForgotPassword = () => {
  return (
    <Content className="forgot-password-container">
      <Content className="forgot-password-container-left">
        <Image
          src={banner}
          alt="forgot password banner"
          preview={false}
          className="forgot-password-banner-image"
        />
      </Content>
      <Content className="forgot-password-container-right">
        <Image
          src={logo}
          alt="logo"
          preview={false}
          className="forgot-password-logo-image"
        />
        <Title level={2} className="forgot-password-title">
          Reset Password
        </Title>
        <Text className="forgot-password-description">
          Enter the email address associated with your account.
        </Text>
        <Form name="forgot-password" className="forgot-password-form">
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="forgot-password-button"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
        <Content className="return-to-login-container">
          <Text className="return-text">Return to</Text>
          <Link to="/login">Login</Link>
        </Content>
      </Content>
    </Content>
  );
};
