import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

const SearchForm = () => {
  return (
    <div className="search">
      <form className="search__form">
        <img
          className="search__icon"
          src={searchIcon}
          alt="Иконка поиска" />
        <input
          className="search__field"
          type="search"
          placeholder="Фильм"
          required
        />
        <button
          className="search__btn transparency-btn"
          type="submit"
          aria-label="Search button"
        />
      </form>
      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;
