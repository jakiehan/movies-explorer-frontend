import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import  { refactorDuration } from '../../utils/refactorDuration.js';

const MoviesCard = ({ card, onCardBtnClick, onCardImageClick, saveMovies }) => {

  const { duration, image, description, nameRU } = card;

  const location = useLocation().pathname;
  const pathMovies = location === '/movies';
  const pathSavedMovies = location === '/saved-movies';

  const movieDuration = refactorDuration(duration);
  const isSaved = saveMovies?.some(i => card.id === i.movieId )
  const imageUrl = location === '/movies' ? `https://api.nomoreparties.co/${image.url}` : image;

  const handleBtnClick = () => onCardBtnClick(card);
  const handleImageClick = () => onCardImageClick(card);

  return (
    <li className="filmography__element">
      <article className="card">
        <div className="card__info">
          <h2 className="card__title">{nameRU}</h2>
          <p className="card__duration">{movieDuration}</p>
        </div>
        <img
          className="card__preview"
          src={imageUrl}
          alt={description}
          onClick={handleImageClick}
        />
        <button
          className={`card__btn transparency-btn ${isSaved && pathMovies && 'card__btn_active'} ${pathSavedMovies && 'card__btn_type_delete'}`}
          type="button"
          aria-label="Button"
          onClick={handleBtnClick}
        >
          {((isSaved && pathMovies) || pathSavedMovies) ? '' : 'Сохранить' }
        </button>
      </article>
    </li>
  );
};

export default MoviesCard;
