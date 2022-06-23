import "./register.css"

import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';

import { Link } from "react-router-dom";
const { Option } = Select;



const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      className = "Register"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: '',
          },
          {
            required: true,
            message: 'Email không đúng',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message:"Mật khẩu sai định dạng"
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Xác nhận"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Hai mật khẩu không giống nhau',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Mật khẩu không khớp'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: 'Số điện thoại chưa chính xác',
          },
        ]}
      >
        <Input
          addonBefore="+84"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Giới tính"
        rules={[
          {
            required: true,
            message:"Vui lòng chọn "
          },
        ]}
        style = {{
          width: "50%"
        }}

      >
        <Select placeholder="">
          <Option value="male">Nam</Option>
          <Option value="female">Nữ</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="andress"
        label="Địa chỉ"
        rules={[
          {
            required: true,
            message: 'Không thể bỏ trống',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">
          Đăng ký
        </Button>

        <Link to = "/login">
          <p>Về trang đăng nhập</p>
        </Link>
        
      </Form.Item>  
    </Form>
  );
};

export default Register;