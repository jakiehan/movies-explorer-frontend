import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Layout = ({ onMenuBurger, isActive }) => {

  const location = useLocation().pathname;

  return (
    <>
      {location === '/profile'
        ? (
          <>
            <Header
              onMenuBurger={onMenuBurger}
              isActive={isActive}
            />
            <Outlet />
          </>
        )
        : (
          <>
            <Header
              onMenuBurger={onMenuBurger}
              isActive={isActive}
            />
            <Outlet />
            <Footer />
          </>
        )
      }
    </>
  );
};

export default Layout;
