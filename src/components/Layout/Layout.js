import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const Layout = ({ onMenuBurger, isActive }) => {

  const location = useLocation().pathname;

  return (
    <>
      {location === '/profile' ? (
        <>
          <Header
            onMenuBurger={onMenuBurger}
            isActive={isActive}
          />
          <Outlet />
        </>
      ) : (
        <>
          <Header
            onMenuBurger={onMenuBurger}
            isActive={isActive}
          />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
