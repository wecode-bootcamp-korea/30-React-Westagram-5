import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';

function LoginYunsook() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  // const [isLogin, setLoginOn] = useState(false);
  // const [color, setColor] = useState('#');
  // const [navigate] = useNavigate();
  const handleIdInput = e => {
    setIdValue(e.target.value);
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  console.log(idValue, pwValue);

  // const goToMain = () => {
  //   setLoginOn(isLoginOn);
  // };
  // // console.log(isLoginOn);

  const onChangeBtn = () => {
    setColor('blue');
  };

  // function Login() {
  //   const navigate = useNavigate();
  //   const goToMain = () => {
  //     navigate('/main');
  //   };
  // }

  const goToMain = () => {
    fetch('http://10.58.5.235:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  // const goToMain = {} => {
  // if(response.message === "valid user") {
  //   navigate('/main');
  //   } else {
  //     alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.")
  //     navigate('/signup');
  //   }
  // }

  return (
    <div>
      <div className="container">
        <div className="box">
          <h1>Westagram</h1>
          <div className="login">
            <div id="login-form">
              <form className="login-form">
                <input
                  required
                  maxlength="@ + 5"
                  type="type"
                  onChange={handleIdInput}
                  placeholder="전화번호, 사용자 이름또는 이메일"
                  name="name"
                />
                <input
                  type="text"
                  placeholder="비밀번호"
                  text="password"
                  onChange={handlePwInput}
                />
                <button type="button" className="login-btn" onClick={goToMain}>
                  로그인
                </button>
              </form>
            </div>
            <div className="forgot">
              <a href="button"> 비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginYunsook;
