import React from 'react';
import './PopupBurger.css';
import Navigation from '../Navigation/Navigation.js';

const PopupBurger = ({ isActive, onClose }) => {

  return (
    <div
      className={isActive ? "popup popup_active" : "popup"}
      onMouseDown={onClose}
    >
      <div
        className={isActive ? "popup__container popup__container_active" : "popup__container"}
        onMouseDown={((e) => e.stopPropagation())}
      >
        <Navigation
          isActive={isActive}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default PopupBurger;
