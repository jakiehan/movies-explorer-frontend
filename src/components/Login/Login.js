import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo.js';
import AuthForm from '../AuthForm/AuthForm.js';

const Login = ({ onLogin, isMessage, isRequestSent }) => {
  return (
    <section className="login">
      <Logo />
      <AuthForm
        title="Рады видеть!"
        btnTitle="Войти"
        onLogin={onLogin}
        isErrorMessage={isMessage}
        isRequestSent={isRequestSent}
      />
    </section>
  );
};

export default Login;
