import React, { useContext } from 'react';
import './Header.css';
import Logo from '../Logo/Logo.js';
import Navigation from '../Navigation/Navigation.js';
import { AuthContext } from '../../contexts/AuthContext.js';

const Header = ({ onMenuBurger, isActive }) => {

  const loggedIn = useContext(AuthContext);

  return (
   <header className="header">
     <div className="header__content">
        <Logo />
       {!isActive && (
         <Navigation />
       )}
       {loggedIn && (
         <button
           className={!isActive
            ? "header__burger-btn header__burger-btn_type_dis-active-menu transparency-btn"
            : "header__burger-btn header__burger-btn_type_close header__burger-btn_type_active-menu transparency-btn"}
           type="button"
           aria-label="Button burger menu"
           onClick={onMenuBurger}
         />
       )}
     </div>
   </header>
  )
}

export default Header;
