import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo.js';
import AuthForm from '../AuthForm/AuthForm.js';

const Register = () => {
  return (
    <section className="register">
      <Logo />
      <AuthForm
        title="Добро пожаловать!"
        btnTitle="Зарегистрироваться"
      />
    </section>
  );
};

export default Register;
