import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo.js';
import Navigation from '../Navigation/Navigation.js';
import { useLocation } from 'react-router-dom';

const Header = ({ onMenuBurger, isActive }) => {

  const location = useLocation().pathname;

  return (
   <header className="header">
     <div className="header__content">
        <Logo />
       {!isActive
         && (
           <Navigation/>
         )
       }
       {location !== '/'
         && (
           <button
             className={!isActive ? "header__burger-btn header__burger-btn_type_dis-active-menu transparency-btn" : "header__burger-btn header__burger-btn_type_close header__burger-btn_type_active-menu transparency-btn"}
             type="button"
             aria-label="Button burger menu"
             onClick={onMenuBurger}
           />
         )
       }
     </div>
   </header>
  )
}

export default Header;
