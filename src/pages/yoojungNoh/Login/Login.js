import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Button from './Button/Button';

function LoginYoojung() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoojung');
  };

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };
  const loginOn = idInput.includes('@') && pwInput.length >= 5;
  return (
    <section>
      <article>
        <div className="loginBox">
          <h1 className="logo">Westagram</h1>
          <div>
            <form className="loginForm">
              <input
                type="text"
                id="idInput"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
              <input
                type="password"
                id="pwInput"
                placeholder="password"
                value={pwInput}
                onChange={handlePwInput}
              />
            </form>

            <Button
              onclick={goToMain}
              className={loginOn ? 'activeBtn' : 'unActiveBtn'}
            />
            <a className="forgotPwd">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default LoginYoojung;
