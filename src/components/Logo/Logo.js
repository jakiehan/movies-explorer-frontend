import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link
      className="transparency-link"
      to="/"
    >
      <img
        className="logo"
        src={logo}
        alt="Логотип"
      />
    </Link>
  );
};

export default Logo;
