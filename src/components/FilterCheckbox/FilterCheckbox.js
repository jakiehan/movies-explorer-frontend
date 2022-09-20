import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ handleChange, checked, onCheckboxClick, isEmptyList }) => {

  const handleClick = () => {
    onCheckboxClick();
  }

  return (
    <div className="checkbox-filter">
      <label className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          onChange={handleChange}
          checked={checked || false}
          onClick={handleClick}
          disabled={isEmptyList}
        />
        <span className={`checkbox__slider ${isEmptyList ? 'checkbox__slider_background_grey' : ''}`} />
      </label>
      <p className={`checkbox-filter__title ${isEmptyList ? 'checkbox-filter__title_color_grey' : ''}`}>
        Короткометражки
      </p>
    </div>
  );
};

export default FilterCheckbox;
