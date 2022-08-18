import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList isSavedMovies={true} />
    </section>
  );
};

export default SavedMovies;
