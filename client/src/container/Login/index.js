import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';



const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <LoginForm
        onLogin = {onFinish} />
    </div>
  )
} 

export default Login;