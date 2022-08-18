import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <section className="profile">
      <form
        className="profile__form"
        name="profile-form"
      >
        <fieldset className="profile__form-fieldset">
          <legend className="profile__form-title">Привет, Виталий!</legend>
            <label className="profile__form-label">
              Имя
              <input
                className="profile__form-field"
                type="text"
                name="name"
                placeholder="Введите имя"
                value="Виталий"
                minLength="2"
                maxLength="20"
                required
              />
            </label>
            <span className="profile__form-validation-error">
            </span>
            <label className="profile__form-label">
              E-mail
              <input
                className="profile__form-field"
                type="email"
                name="email"
                value="pochta@yandex.ru"
                placeholder="Введите email"
                required
              />
            </label>
            <span className="profile__form-validation-error">
            </span>
            <button
              className="profile__form-btn-submit transparency-link"
              aria-label="Edit button"
              type="submit"
            >
              Редактировать
            </button>
            <Link
              className="profile__form-link transparency-link"
              to="/"
            >
              Выйти из аккаунта
            </Link>
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;
