import { Link } from "react-router-dom";
import {
  Layout,
  Typography,
  Image,
  Form,
  Flex,
  Input,
  Checkbox,
  Button,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";

import banner from "../../assets/images/login-banner.jpg";
import logo from "../../assets/images/logo.png";

import "./login.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const Login = () => {
  return (
    <Content className="login-container">
      <Content className="login-container-left">
        <Image
          src={banner}
          alt="login"
          preview={false}
          className="login-banner-image"
        />
        <Content className="login-actions-container">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Content>
      </Content>
      <Content className="login-container-right">
        <Image
          src={logo}
          alt="logo"
          preview={false}
          className="login-logo-image"
        />
        <Title level={2} className="login-title">
          Login To Your Account
        </Title>
        <Text className="login-description">
          Login to continue in our website
        </Text>
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          className="login-form"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" type="email" />
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
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/" className="login-forgot-password-link">
                Forgot Password?
              </Link>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
          </Form.Item>
          <Text className="login-text">Or continue with social account</Text>
          <Form.Item>
            <Button icon={<FcGoogle />} className="login-with-google-button">
              Login with Google
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Content>
  );
};
