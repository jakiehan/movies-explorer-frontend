import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useRenderingCardsByScreenWidth } from '../../hooks/useRenderingCardsByScreenWidth.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

const MoviesCardList = ({ listMovies, listSaveMovies, onCardBtnClick, onCardImageClick, isMessageError })  => {

  const location = useLocation().pathname;

  const { initialNumberOfCards, additionalNumberOfCards, setInitialNumberOfCards, setOnClickMoreButton } = useRenderingCardsByScreenWidth(listMovies);

  const handleClick = () => {
    setInitialNumberOfCards(initialNumberOfCards + additionalNumberOfCards);
    setOnClickMoreButton(true);
  }

  return (
    <section className="filmography">
      {isMessageError ? (
        <p className="filmography__error-message">
          {isMessageError}
        </p>
      ) : (
        <ul className="filmography__elements">
          {listMovies.slice(0, initialNumberOfCards).map((movieCard) =>
            <MoviesCard
              card={movieCard}
              key={movieCard.id || movieCard._id}
              onCardBtnClick={onCardBtnClick}
              onCardImageClick={onCardImageClick}
              saveMovies={listSaveMovies}
            />
          )}
        </ul>
      )}
      {location === '/movies' && (listMovies.length > initialNumberOfCards) && (
        <button
          className={`filmography__btn transparency-btn ${initialNumberOfCards === listMovies.length || isMessageError && 'filmography__btn_display_none'}`}
          type="button"
          aria-label="More button"
          onClick={handleClick}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
