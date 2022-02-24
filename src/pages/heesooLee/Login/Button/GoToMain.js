import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoToMain({ idValue, passwordValue }) {
  const navigate = useNavigate();

  const onClickButton = () => {
    fetch('http://10.58.5.209:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('로그인 성공!');
          navigate('/main-Heesoo');
        } else {
          alert('땡');
        }
      });
  };

  return (
    <button className="login-button" onClick={onClickButton}>
      Login
    </button>
  );
}

export default GoToMain;
