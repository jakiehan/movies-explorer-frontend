import React, { useEffect, useState } from 'react';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import { useFilterMovies } from '../../hooks/useFilterMovies.js';
import { messageError } from '../../utils/constants.js';

const Movies = ({ onCardBtnClick, listSaveMovies, onCardImageClick }) => {

  const [isPreloader, setIsPreloader] = useState(false);

  const {
    handleSortMovies,
    setItemLocalStorage,
    getItemLocalStorage,
    showLastSearchQuery,
    checkValuesInput,
    toggleCheckbox,
    listSortedMovies,
    isMessageError,
    setIsMessageError,
    checked,
    setChecked,
    isStateForm,
    searchQuery,
    enteredValue,
    setEnteredValue,
  } = useFilterMovies();

  const { getMoviesError } = messageError;
  const emptyList = listSortedMovies.length === 0;

  const handleSubmit = (formElemValues) => {
    setIsPreloader(true);
    const movies = getItemLocalStorage('movies');

    if (movies === null) {
      moviesApi.getMovies()
        .then((res) => {
          setItemLocalStorage('movies', res);
          handleSortMovies(res, formElemValues);
        })
        .catch((err) => {
          setIsMessageError(getMoviesError);
          console.log(err);
        })
        .finally(() => setIsPreloader(false));
    } else {
      handleSortMovies(movies, formElemValues);
      setIsPreloader(false);
    }
  }

  const handleCheckboxClick = () => {
    toggleCheckbox();
  }

  useEffect(() => {
    const movies = getItemLocalStorage('movies');
    let result = checkValuesInput();

    if (result && movies && listSortedMovies.length !== 0) {
      handleSortMovies(movies, isStateForm);
    }
  }, [checked, searchQuery])

  useEffect(() => {
    showLastSearchQuery();
  }, [])

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSubmit}
        onCheckboxClick={handleCheckboxClick}
        setMessageError={setIsMessageError}
        checked={checked}
        setChecked={setChecked}
        searchQuery={searchQuery}
        setEnteredValue={setEnteredValue}
        enteredValue={enteredValue}
        isEmptyList={emptyList}
      />
      {isPreloader ?
        <Preloader />
        :
        <MoviesCardList
          listMovies={listSortedMovies}
          isMessageError={isMessageError}
          listSaveMovies={listSaveMovies}
          onCardBtnClick={onCardBtnClick}
          onCardImageClick={onCardImageClick}
        />
      }
    </section>
  );
};

export default Movies;
