import css from "./login.module.css"


import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";



const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={css.Login}>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Tên đăng nhập không thể bỏ trống',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Mật khẩu không thể bỏ trống',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item className='login-form-forgot'>
        <Link to = "/forgot_password">
          <p>Quên mật khẩu ?</p>
        </Link>
      </Form.Item>

      <Form.Item>
        <div className={css.Bottom}>
            <Button 
              type="default" 
              htmlType="submit"
              block
              className="login-form-button"
              >
              Đăng nhập
            </Button>
        <Link to = "/register"> 
          <p>Đăng ký thành viên mới</p>
        </Link>
        </div>
      </Form.Item>
      </Form>
    </div>
  );
};

export default Login;