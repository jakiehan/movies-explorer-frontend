import React from 'react';
import './FilterCheckbox.css'

const FilterCheckbox = () => {
  return (
    <div className="checkbox-filter">
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" />
        <span className="checkbox__slider" />
      </label>
      <p className="checkbox-filter__title">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
