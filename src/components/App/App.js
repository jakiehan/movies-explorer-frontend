import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Layout from '../Layout/Layout.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import PopupBurger from '../PopupBurger/PopupBurger.js';

function App() {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleBurgerMenuClick = () => setIsMenuActive(!isMenuActive);

  const closePopup = () => setIsMenuActive(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onMenuBurger={handleBurgerMenuClick}
              isActive={isMenuActive}
            />
        }
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="movies"
            element={<Movies />}
          />
          <Route
            path="saved-movies"
            element={<SavedMovies />}
          />
        </Route>
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <PopupBurger
        isActive={isMenuActive}
        onClose={closePopup}
      />
    </div>
  );
}

export default App;
