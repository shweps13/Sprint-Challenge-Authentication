import React from 'react';

import Login from "./Login";


function LoginForm(props) {


  return (
    <>
        <Login history={props.history} />
    </>
  );
}

export default LoginForm;
