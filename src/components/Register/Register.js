import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo.js';
import AuthForm from '../AuthForm/AuthForm.js';

const Register = ({ onRegister, isMessage, isRequestSent }) => {
  return (
    <section className="register">
      <Logo />
      <AuthForm
        title="Добро пожаловать!"
        btnTitle="Зарегистрироваться"
        onRegister={onRegister}
        isErrorMessage={isMessage}
        isRequestSent={isRequestSent}
      />
    </section>
  );
};

export default Register;
