import React from 'react';
import './AuthForm.css';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import AuthNavigation from '../AuthNavigation/AuthNavigation.js';
import ApiRequestResponse from '../ApiRequestResponse/ApiRequestResponse.js';

const AuthForm = ({ title, btnTitle, onRegister, onLogin, isErrorMessage, isRequestSent }) => {

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const location = useLocation().pathname;
  const locationLogin = location === '/signin';
  const typeAuthClass = locationLogin ? 'form__label_type_auth' : '';
  const disabledBtn = !isValid || isRequestSent;
  const btnDisabledClass = !isValid ? 'form__btn-submit_disabled_true' : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    locationLogin ? onLogin(email, password) : onRegister(name, email, password);
  }

  return (
    <form
      className="form"
      name="auth-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <fieldset className="form__fieldset">
        <legend className="form__title">{title}</legend>
        {!locationLogin && (
          <label className="form__label">
            Имя
            <input
              className="form__field"
              pattern="[a-zA-Z-А-Яа-яЁё\s-]+$"
              minLength="2"
              maxLength="30"
              type="text"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              placeholder="Введите имя"
              required
            />
            <span className="form__validation-error">
              {errors.name}
            </span>
          </label>
        )}
        <label className={`form__label ${typeAuthClass}`}>
          E-mail
          <input
            className="form__field"
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            placeholder="Введите email"
            required
          />
          <span className="form__validation-error">
            {errors.email}
          </span>
        </label>
        <label className={`form__label ${typeAuthClass}`}>
          Пароль
          <input
            className="form__field"
            type="password"
            name="password"
            minLength="5"
            maxLength="15"
            value={values.password || ''}
            onChange={handleChange}
            placeholder="Введите пароль"
            autoComplete="current-password"
            required
          />
          <span className="form__validation-error">
            {errors.password}
          </span>
        </label>
        <ApiRequestResponse requestResponse={isErrorMessage} />
        <button
          className={`form__btn-submit transparency-btn ${btnDisabledClass}`}
          type="submit"
          disabled={disabledBtn}
        >
          {btnTitle}
        </button>
        <AuthNavigation
          isAuthText={`${!locationLogin ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}`}
          link={`${!locationLogin ? '/signin' : '/signup'}`}
          titleLink={`${!locationLogin ? 'Войти' : 'Регистрация'}`}
        />
      </fieldset>
    </form>
  );
};

export default AuthForm;
