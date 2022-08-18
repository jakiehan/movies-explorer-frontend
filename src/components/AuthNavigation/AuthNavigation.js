import React from 'react';
import './AuthNavigation.css';
import { Link } from 'react-router-dom';

const AuthNavigation = ({ isAuthText, link, titleLink }) => {
  return (
    <div className="auth-navigation">
      <p className="auth-navigation__text">
        {isAuthText}
      </p>
      <Link
        className="auth-navigation__redirect transparency-link"
        to={link}
      >
        {titleLink}
      </Link>
    </div>
  );
};

export default AuthNavigation;
