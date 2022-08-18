import React from 'react';
import './MoviesCard.css';
import cardPreview from '../../images/preview.png';

const MoviesCard = ({ isSavedMovies }) => {

  const isLiked = true;  // Это только для этапа верстки, ради демонстрации

  return (
    <li className="filmography__element">
      <article className="card">
        <div className="card__info">
          <h2 className="card__title">В погоне за Бенкси</h2>
          <p className="card__duration">27 минут</p>
        </div>
        <img
          className="card__preview"
          src={cardPreview}
          alt="Превью"
        />
        <button
          className={`card__add-btn transparency-btn ${isLiked && "card__add-btn_active"} ${isSavedMovies && "card__add-btn_type_delete"}`}
          type="button"
          aria-label="Add button"
        >
          {isLiked ? "" : "Сохранить" }
        </button>
      </article>
    </li>
  );
};

export default MoviesCard;
