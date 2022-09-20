import React, { useEffect } from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import { messageError } from '../../utils/constants.js';

const SearchForm = ({
  onSubmit,
  setMessageError,
  checked,
  onCheckboxClick,
  searchQuery,
  onBtnResetClick,
  isBtnResetActive,
  enteredValue,
  setEnteredValue,
  deletedLastMovies,
  isEmptyList }) => {

  const { values, setValues, handleChange, isValid, setIsValid } = useFormAndValidation();
  const { noKeyword, collectionMoviesEmpty } = messageError;

  const location = useLocation().pathname;

  const btnVisibilityClass = !isBtnResetActive ? 'search__btn_visibility_hidden' : '';


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmptyList && location === '/saved-movies') {
      setMessageError(collectionMoviesEmpty);
    } else if (!isValid || values.search.trim() === '') {
      setMessageError(noKeyword);
    } else {
      onSubmit(values);
    }
  }

  const handleClick = () => {
    onBtnResetClick();
    setValues({...values, search: '', checkbox: false});
  }

  useEffect(() => {
    setValues({...values, search: '', checkbox: false});
  }, [deletedLastMovies])

  useEffect(() => {
    setEnteredValue({...enteredValue, search: values.search, checkbox: values.checkbox});
  }, [values])

  useEffect(() => {
    setValues({...values, search: searchQuery, checkbox: checked});
    setIsValid(true);
  }, [searchQuery])


  return (
    <div className="search">
      <form
        className="search__form"
        name="search-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <img
          className="search__icon"
          src={searchIcon}
          alt="Иконка поиска" />
        <input
          className="search__field"
          name="search"
          type="search"
          placeholder="Фильм"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button
          className="search__btn search__btn_type_submit transparency-btn"
          type="submit"
          aria-label="Search button"
        />
        <FilterCheckbox
          handleChange={handleChange}
          checked={checked}
          onCheckboxClick={onCheckboxClick}
          isEmptyList={isEmptyList}
        />
        <button
          className={`search__btn search__btn_type_reset transparency-btn ${btnVisibilityClass}`}
          type="button"
          aria-label="Reset button"
          onClick={handleClick}
        >
          Очистить поиск
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
