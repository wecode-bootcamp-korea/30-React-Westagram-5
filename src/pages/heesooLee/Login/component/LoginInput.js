import React from 'react';

function LoginInput(props) {
  console.log(props);
  return (
    <input
      className={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={
        props.name === 'user-id' ? props.handledIdInput : props.handledPwInput
      }
    />
  );
}

export default LoginInput;
