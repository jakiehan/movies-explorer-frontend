import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { Link, useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ApiRequestResponse from '../ApiRequestResponse/ApiRequestResponse.js';

const Profile = ({ onEditProfileClick, onInputDisabled, isMessage, onUpdateData, onSignOut, setIsInputDisabled, isRequestSent }) => {

  const currentUser = useContext(CurrentUserContext);
  const location = useLocation().pathname;

  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

  const saveBtn = ((values.name !== currentUser.name) || (values.email !== currentUser.email));
  const btnClassDisabled = (!saveBtn || !isValid) ? 'profile__form-btn_disabled_true' : '';
  const disabledBtn = !isValid || isRequestSent;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values;
    onUpdateData(name, email);
  }

  useEffect(() => {
    setValues(currentUser);
  },[currentUser]);

  useEffect(() => {
    setIsInputDisabled(true);
  },[location])

  return (
    <section className="profile">
      <form
        className="profile__form"
        name="profile-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset className="profile__form-fieldset">
          <legend className="profile__form-title">{`Привет, ${currentUser.name}!`}</legend>
            <label className="profile__form-label">
              Имя
              <input
                className="profile__form-field"
                type="text"
                name="name"
                placeholder="Введите имя"
                value={values.name || ""}
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                pattern="[a-zA-Z-А-Яа-яЁё\s-]+$"
                required
                disabled={onInputDisabled}
              />
            </label>
            <span className="profile__form-validation-error">
              {errors.name}
            </span>
            <label className="profile__form-label">
              E-mail
              <input
                className="profile__form-field"
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="Введите email"
                required
                disabled={onInputDisabled}
              />
            </label>
            <span className="profile__form-validation-error">
              {errors.email}
            </span>
            <ApiRequestResponse okRequestResponse={isMessage} />
            {onInputDisabled ? (
              <>
                <button
                  className="profile__form-btn transparency-link"
                  aria-label="Edit button"
                  type="button"
                  onClick={onEditProfileClick}
                >
                  Редактировать
                </button>
                <Link
                  className="profile__form-link transparency-link"
                  to="/"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </Link>
              </>
            ) : (
              <>
                <button
                  className={`profile__form-btn profile__form-btn_type_submit transparency-link ${btnClassDisabled}`}
                  aria-label="Save button"
                  type="submit"
                  disabled={disabledBtn}
                >
                  Сохранить
                </button>
              </>
            )}
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;
