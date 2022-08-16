import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo.js';
import AuthForm from '../AuthForm/AuthForm.js';

const Login = () => {
  return (
    <section className="login">
      <Logo />
      <AuthForm
        title="Рады видеть!"
        btnTitle="Войти"
      />
    </section>
  );
};

export default Login;
