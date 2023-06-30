import React,{ useContext }from 'react'
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from 'antd';


const Register = () => {
  const { newUser } = useContext(UserContext);


const onFinish = async (values) => {
    await newUser(values);
}
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
}
  return (
    <>
    <h3>Register</h3>
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
          </Form.Item>
        <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        >
            <Input />
        </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            >
            <Input.Password />
      
            </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                    </Form>
                    </>
                    );
                }

export default Register