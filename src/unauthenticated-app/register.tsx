import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";
export default function RegisterView() {
  const { register, user } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input type="text" id="username" />
      </Form.Item>
      <Form.Item name="password">
        <Input type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton type="primary" htmlType="submit">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}
