import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

const Movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      {/*<Preloader />*/}
      <MoviesCardList />
    </section>
  );
};

export default Movies;
