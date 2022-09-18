import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { useFilterMovies } from '../../hooks/useFilterMovies.js';

const SavedMovies = ({ listSaveMovies, onCardBtnClick, onCardImageClick, idCardDeleted, setIdCardDeleted, isClickCardSave }) => {

  const [isBtnResetActive, setIsBtnResetActive] = useState(false);
  const [deletedLastMovies, setDeletedLastMovies] = useState(false);
  const [initialListSavedMovies, setInitialListSavedMovies] = useState(listSaveMovies);

  const {
    handleSortMovies,
    showLastSearchQuery,
    handleClickBtnReset,
    checkValuesInput,
    toggleCheckbox,
    listSortedMovies,
    isMessageError,
    setIsMessageError,
    checked,
    isStateForm,
    searchQuery,
    enteredValue,
    setEnteredValue,
    setListSortedMovies,
    setIsStateForm,
    setChecked,
    sorted
  } = useFilterMovies(listSaveMovies);

  useEffect(() => setInitialListSavedMovies(listSaveMovies), [listSaveMovies]);

  const emptyList = listSaveMovies.length === 0;

  const handleSubmit = (formElemValues) => {

    if (initialListSavedMovies.length !== 0) {
      handleSortMovies(listSaveMovies, formElemValues);
    }
  }

  const handleCheckboxClick = () => {
    toggleCheckbox();
  }

  const handleBtnResetClick = () => {
    handleClickBtnReset();
  }

  const removeCardFromSortedList = () => {

    if (idCardDeleted !== '') {
      setListSortedMovies((savedMovies) => savedMovies.filter((movie) => movie._id !== idCardDeleted));
      setIdCardDeleted('');
    }

    if (idCardDeleted !== '' && initialListSavedMovies.length === 0) {
      setIsStateForm({...isStateForm, search: '', checkbox: false});
      setChecked(false);
    }
  }

  useEffect(() => {
    removeCardFromSortedList();
  }, [isClickCardSave])

  useEffect(() => {

    if (initialListSavedMovies.length !== 0) {
      let result = checkValuesInput();

      if (result) {
        handleSortMovies(initialListSavedMovies, isStateForm);
      }
    } else {
      setDeletedLastMovies(true);
      setIsStateForm({...isStateForm, search: '', checkbox: false})
      setIsBtnResetActive(false);
    }
  }, [checked, initialListSavedMovies])

  useEffect(() => {

    const { search, checkbox } = isStateForm;

    if (search !== '' || checkbox || sorted) {
      setIsBtnResetActive(true);
    } else {
      setIsBtnResetActive(false);
    }
  }, [isStateForm, sorted])

  useEffect(() => {
    showLastSearchQuery();
  }, [])

  return (
    <section className="saved-movies">
      <SearchForm
        onSubmit={handleSubmit}
        onCheckboxClick={handleCheckboxClick}
        onBtnResetClick={handleBtnResetClick}
        checked={checked}
        searchQuery={searchQuery}
        setMessageError={setIsMessageError}
        isBtnResetActive={isBtnResetActive}
        setEnteredValue={setEnteredValue}
        enteredValue={enteredValue}
        isEmptyList={emptyList}
        deletedLastMovies={deletedLastMovies}
      />
      <MoviesCardList
        listMovies={sorted ? listSortedMovies : listSaveMovies}
        isMessageError={isMessageError}
        onCardBtnClick={onCardBtnClick}
        onCardImageClick={onCardImageClick}
      />
    </section>
  );
};

export default SavedMovies;
