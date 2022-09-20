import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import validator from 'validator/es';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Layout from '../Layout/Layout.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import PopupBurger from '../PopupBurger/PopupBurger.js';
import PopupInfoTooltip from '../PopupInfoTooltip/PopupInfoTooltip.js';
import mainApi from '../../utils/MainApi.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { refactorCardMovie } from '../../utils/refactorCardMovie.js';
import { messageError } from '../../utils/constants.js';
import { updateUserOkMessage } from '../../utils/constants.js';
import { backupTrailerLink } from '../../utils/constants.js';

const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isClickCardSave, setIsClickCardSave] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [idCardDeleted, setIdCardDeleted] = useState('');
  const [requestResponse, setRequestResponse ] = useState('');

  const navigate = useNavigate();
  const location = useLocation().pathname;

  const { getInfoUserError, deleteMoviesError, setMoviesError } = messageError;

  useEffect(() => {
    checkJwt();
  },[])

  const checkJwt = () => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.checkJwt(jwt)
        .then(() => {
          setLoggedIn(true);

          if (location === '/signin' || location === '/signup') {
            navigate('/movies', {replace: true});
          }
        })
        .catch((err) => setRequestResponse(err.message))
        .finally(() => setIsAuthLoading(true))
    } else {
      setIsAuthLoading(true);
    }
  }

  useEffect(() => {

    if (loggedIn) {
      const jwt = localStorage.getItem('jwt');
      Promise.all([mainApi.checkJwt(jwt), mainApi.getMovies(jwt)])
        .then(([resUser, resCard]) => {
          const cardsCurrentUser = resCard.filter(({ owner }) => owner._id === resUser._id);
          setCurrentUser(resUser);
          setSavedMovies(cardsCurrentUser.reverse());
        })
        .catch(err => {
          setRequestResponse(`${getInfoUserError} ${err.message}`);
          console.log(`Ошибка: ${err}`);
        })
    }
  },[loggedIn])

  useEffect(() => {
    setRequestResponse('');
    setIsClickCardSave(false);
    setIsRequestSent(false);
  },[location])

  const handleRegister = (name, email, password) => {
    setIsRequestSent(true);
    mainApi.register(name, email, password)
      .then((res) => {

        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setRequestResponse(err.message);
        setIsRequestSent(false);
      })
  }

  const handleLogin = (email, password) => {
    setIsRequestSent(true);
    mainApi.login(email, password)
      .then((res) => {

        if (res.token) {
          localStorage.setItem('jwt', res.token);
          checkJwt();
        }
      })
      .catch((err) => {
        setRequestResponse(err.message);
        setIsRequestSent(false);
      })
  }

  const updateUserData = (name, email) => {
    setIsRequestSent(true);
    const jwt = localStorage.getItem('jwt');
    mainApi.updateUserData(name, email, jwt)
      .then((res) => {

        if (res) {
          setCurrentUser(res);
          setRequestResponse(updateUserOkMessage);
          setIsInputDisabled(true);
        }
      })
      .catch((err) => {
        setRequestResponse(err.message);
        setIsRequestSent(false);
      })
  }

  const handleCardSave = (cardMovie) => {
    const newMovieCard = refactorCardMovie(cardMovie);
    const jwt = localStorage.getItem('jwt');
    mainApi.setMovies(newMovieCard, jwt)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
        setIsClickCardSave(true);
      })
      .catch((err) => {
        setPopupIsOpen(true);
        setRequestResponse(`${setMoviesError} ${err.message}`);
        console.log(`Ошибка: ${err}`);
      })
  }

  const handleCardDelete = (cardMovie) => {
    const { _id } = cardMovie;
    const jwt = localStorage.getItem('jwt');
    mainApi.deleteMovies(_id, jwt)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== cardMovie._id));
        setIdCardDeleted(_id);
      })
      .catch((err) => {
        setPopupIsOpen(true);
        setRequestResponse(`${deleteMoviesError} ${err.message}`);
        console.log(`Ошибка: ${err}`);
      })
  }

  const handleCardBtnClick = (cardMovie) => {
    const card = savedMovies.find(elem => elem.movieId === cardMovie.id);

    if (card) {
      handleCardDelete(card);
    } else {
      handleCardSave(cardMovie);
    }
  }

  const handleCardImageClick = (cardMovie) => {
    const trailerLink = validator.isURL(cardMovie.trailerLink) ? cardMovie.trailerLink : backupTrailerLink;
    window.open(trailerLink);
  }

  const handleEditProfileClick = (e) => {
    e.preventDefault();
    setIsInputDisabled(false);
    setRequestResponse('');
  }

  const handleBurgerMenuClick = () => setIsMenuActive(!isMenuActive);

  const closePopup = () => {
    setIsMenuActive(false);
    setPopupIsOpen(false);
    setRequestResponse('');
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('form-movies');
    localStorage.removeItem('form-saved-movies');
    setLoggedIn(false);
    setIsAuthLoading(false);
    setIsRequestSent(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AuthContext.Provider value={loggedIn}>
        <div className="app">
          <Routes>
            <Route path="/" element={
              <Layout
                onMenuBurger={handleBurgerMenuClick}
                isActive={isMenuActive}
              />
            }>
              <Route index element={<Main />} />
              <Route path="profile" element={
                <ProtectedRoute isAuthLoading={isAuthLoading}>
                  <Profile
                    onEditProfileClick={handleEditProfileClick}
                    onInputDisabled={isInputDisabled}
                    isMessage={requestResponse}
                    onUpdateData={updateUserData}
                    onSignOut={handleSignOut}
                    setRequestResponse={setRequestResponse}
                    setIsInputDisabled={setIsInputDisabled}
                    isRequestSent={isRequestSent}
                  />
                </ProtectedRoute>
              } />
              <Route path="movies" element={
                <ProtectedRoute isAuthLoading={isAuthLoading}>
                  <Movies
                    onCardBtnClick={handleCardBtnClick}
                    listSaveMovies={savedMovies}
                    onCardImageClick={handleCardImageClick}
                  />
                </ProtectedRoute>
              } />
              <Route path="saved-movies" element={
                <ProtectedRoute isAuthLoading={isAuthLoading}>
                  <SavedMovies
                    listSaveMovies={savedMovies}
                    onCardBtnClick={handleCardDelete}
                    onCardImageClick={handleCardImageClick}
                    idCardDeleted={idCardDeleted}
                    isClickCardSave={isClickCardSave}
                    setIdCardDeleted={setIdCardDeleted}
                  />
                </ProtectedRoute>
              } />
            </Route>
            <Route path="/signup" element={
              <Register
                onRegister={handleRegister}
                isMessage={requestResponse}
                isRequestSent={isRequestSent}
              />
            } />
            <Route path="/signin" element={
              <Login
                onLogin={handleLogin}
                isMessage={requestResponse}
                isRequestSent={isRequestSent}
              />
            } />
            <Route path="*" element={<NotFound />}/>
          </Routes>

          <PopupBurger
            isActive={isMenuActive}
            onClose={closePopup}
          />

          <PopupInfoTooltip
            messageError={requestResponse}
            isOpen={popupIsOpen}
            onClose={closePopup}
          />
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
