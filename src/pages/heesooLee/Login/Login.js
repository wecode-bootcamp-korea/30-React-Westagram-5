import React from 'react';
import './Login.scss';
import LoginToMain from './component/LoginToMain';
import LoginInput from './component/LoginInput';

const Login = () => {
  return (
    <section>
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <LoginInput
          name="user-id"
          type="text"
          placeholder="Phone number, username or email"
        />
        <LoginInput name="user-pw" type="password" placeholder="Password" />

        <LoginToMain />
        <p className="forgot">Forgot password?</p>
      </div>
    </section>
  );
};

export default Login;
