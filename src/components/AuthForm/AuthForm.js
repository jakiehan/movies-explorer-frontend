import React from 'react';
import './AuthForm.css';
import { useLocation } from 'react-router-dom';
import AuthNavigation from '../AuthNavigation/AuthNavigation.js';

const AuthForm = ({ title, btnTitle }) => {

  const location = useLocation().pathname;

  const typeAuthClass = location === '/signin' && 'form__label_type_auth';

  return (
    <form
      className="form"
      name="auth-form"
    >
      <fieldset className="form__fieldset">
        <legend className="form__title">{title}</legend>
        {location === '/signup'
          && (
            <label className="form__label">
              Имя
              <input
                className="form__field input-hover"
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                placeholder="Введите имя"
                required
              />
              <span className="form__validation-error">
              </span>
            </label>
          )
        }
        <label className={`form__label ${typeAuthClass}`}>
          E-mail
          <input
            className="form__field input-hover"
            type="email"
            name="email"
            value="pochta@yandex.ru"
            placeholder="Введите email"
            required
          />
          <span className="form__validation-error">
          </span>
        </label>
        <label className={`form__label ${typeAuthClass}`}>
          Пароль
          <input
            className="form__field input-hover"
            type="password"
            name="password"
            placeholder="Введите пароль"
            required
            minLength="5"
            maxLength="12"
            autoComplete="current-password"
          />
          <span className="form__validation-error">
            {!typeAuthClass
              && (
                'Что-то пошло не так'
              )
            }
          </span>
        </label>
        <button
          className="form__btn-submit transparency-btn"
          type="submit"
        >
          {btnTitle}
        </button>
        <AuthNavigation
          isAuthText={`${location === '/signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}`}
          link={`${location === '/signup' ? '/signin' : '/signup'}`}
          titleLink={`${location === '/signup' ? 'Войти' : 'Регистрация'}`}
        />
      </fieldset>
    </form>
  );
};

export default AuthForm;
