import { Link } from "react-router-dom";
import { Layout, Typography, Image, Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined, MailFilled } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";

import banner from "../../assets/images/register-banner.jpg";
import logo from "../../assets/images/logo.png";

import "./register.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Register = () => {
  return (
    <Content className="register-container">
      <Content className="register-container-left">
        <Image
          src={logo}
          alt="logo"
          preview={false}
          className="register-logo-image"
        />
        <Title level={2} className="register-title">
          Create A New Account
        </Title>
        <Text className="register-description">
          Register to continue in our website
        </Text>
        <Form name="register" className="register-form">
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input prefix={<MailFilled />} placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-button"
            >
              Register
            </Button>
          </Form.Item>
          <Text className="register-text">Or continue with social account</Text>
          <Form.Item>
            <Button icon={<FcGoogle />} className="register-with-google-button">
              Register with Google
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Content className="register-container-right">
        <Image
          src={banner}
          alt="register"
          preview={false}
          className="register-banner-image"
        />
        <Content className="register-actions-container">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Content>
      </Content>
    </Content>
  );
};
