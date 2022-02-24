import React, { useState } from 'react';
import './Login.scss';
import GoToMain from './Button/GoToMain';
// import LoginInput from './input/LoginInput';

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
        <input
          className="user-id"
          type="text"
          placeholder="Phone number, username or email"
          onChange={handledIdInput}
        />
        <input
          className="user-pw"
          type="password"
          placeholder="Password"
          onChange={handledPwInput}
        />

        <GoToMain idValue={idValue} passwordValue={passwordValue} />
        <p className="forgot">Forgot password?</p>
      </div>
    </section>
  );
};

export default Login;
