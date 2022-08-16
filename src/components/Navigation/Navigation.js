import React from 'react';
import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import accIcon from '../../images/account-icon.svg';

const Navigation = ({ isActive, onClose }) => {

  const location = useLocation().pathname;

  return (
    <>
      {location === '/'
        && (
          <nav className="navigation">
            <Link
              to="/signup"
              className="navigation__link transparency-link"
            >
              Регистрация
            </Link>
            <Link
              to="/signin"
              className="navigation__link navigation__link_type_auth transparency-link"
            >
              Войти
            </Link>
          </nav>
        )
      }
      {!isActive && (location === '/movies' || location === '/saved-movies' || location === '/profile')
        && (
          <nav className="navigation navigation_type_movies">
            <div className="navigation__wrapper">
              <NavLink
                to="/movies"
                className="navigation__link navigation__link_type_movies transparency-link"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navigation__link navigation__link_type_movies transparency-link"
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <NavLink
              to="/profile"
              className="navigation__link navigation__link_type_account transparency-link"
            >
              Аккаунт
              <img className="navigation__profile-icon" src={accIcon} alt="Иконка аккаунта"/>
            </NavLink>
          </nav>
        )
      }
      {isActive && (location === '/movies' || location === '/saved-movies' || location === '/profile')
        && (
          <nav className="navigation navigation_type_menu">
            <div className="navigation__wrapper navigation__wrapper_type_menu">
              <NavLink
                to="/"
                className="navigation__link navigation__link_type_menu transparency-link"
                onClick={onClose}
              >
                Главная
              </NavLink>
              <NavLink
                to="/movies"
                className="navigation__link navigation__link_type_menu transparency-link"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navigation__link navigation__link_type_menu transparency-link"
                onClick={onClose}
              >
                Сохраненные фильмы
              </NavLink>
            </div>
            <NavLink
              to="/profile"
              className="navigation__link navigation__link_type_account navigation__link_type_account-menu transparency-link"
              onClick={onClose}
            >
              Аккаунт
              <img className="navigation__profile-icon" src={accIcon} alt="Иконка аккаунта"/>
            </NavLink>
          </nav>
        )
      }
    </>
  );
};

export default Navigation;
