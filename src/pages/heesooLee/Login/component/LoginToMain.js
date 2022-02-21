import React from 'react';
import { Link } from 'react-router-dom';

function LoginToMain({ idValue, passwordValue }) {
  return (
    <Link to="/main-Heesoo">
      <input type="button" id="loginbutton" value="Login" />
    </Link>
  );
}

export default LoginToMain;
