import React, { useState } from 'react';
import './Login.scss';
import LoginToMain from './component/LoginToMain';
import LoginInput from './component/LoginInput';

const Login = () => {
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handledIdInput = event => {
    setIdValue(event.target.value);
  };

  const handledPwInput = event => {
    setPasswordValue(event.target.value);
  };

  return (
    <section>
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <LoginInput
          name="user-id"
          type="text"
          placeholder="Phone number, username or email"
          handledIdInput={handledIdInput}
        />
        <LoginInput
          name="user-pw"
          type="password"
          placeholder="Password"
          handledPwInput={handledPwInput}
        />

        <LoginToMain idValue={idValue} passwordValue={passwordValue} />
        <p className="forgot">Forgot password?</p>
      </div>
    </section>
  );
};

export default Login;
