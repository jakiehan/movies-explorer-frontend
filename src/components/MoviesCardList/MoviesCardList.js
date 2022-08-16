import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard.js';

const MoviesCardList = ({ isSavedMovies })  => {

  const location = useLocation().pathname;


  return (
    <section className="filmography">
      <ul className="filmography__elements">
        {location === '/saved-movies'
          ? (
            <>
              <MoviesCard isSavedMovies={isSavedMovies} />
              <MoviesCard isSavedMovies={isSavedMovies} />
              <MoviesCard isSavedMovies={isSavedMovies} />
            </>
          ) : (
            <>
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
            </>
          )
        }
      </ul>
      {location === '/movies'
        && (
          <button
            className="filmography__btn transparency-btn"
            type="button"
            aria-label="More button"
          >
            Ещё
          </button>
        )
      }
    </section>
  );
};

export default MoviesCardList;
