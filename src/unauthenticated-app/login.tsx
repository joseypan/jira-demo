import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";
export default function LoginView() {
  const { login, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton type="primary" htmlType="submit">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}
