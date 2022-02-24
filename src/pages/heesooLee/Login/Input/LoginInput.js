import React from 'react';

function LoginInput({
  name,
  type,
  placeholder,
  handledIdInput,
  handledPwInput,
}) {
  return (
    <input
      className={name}
      type={type}
      placeholder={placeholder}
      onChange={name === 'user-id' ? handledIdInput : handledPwInput}
      wer
    />
  );
}

export default LoginInput;
