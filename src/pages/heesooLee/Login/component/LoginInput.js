import React from 'react';

function LoginInput(props) {
  return (
    <input
      className={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

export default LoginInput;
