import "../App.css";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Alert,
  notification,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const { data } = await login("/api/auth/login", values);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (e) {
      notification.error({
        message: (
          <Typography.Title level={5} type="danger">
            Error
          </Typography.Title>
        ),
        description: (
          <Alert
            message={e.response.data.message}
            type="error"
            style={{ border: "none" }}
          />
        ),
        duration: 5,
      });
    }
  };

  return (
    <>
      <Typography.Title style={{ marginTop: "5rem" }}>
        Book Manament Login Page
      </Typography.Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        scrollToFirstError
      >
        <Row justify="center" align="middle">
          <Col span={14}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
          </Col>

          <Col span={14}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Col>

          <Col span={14}>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
          </Col>

          <Col span={14}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
