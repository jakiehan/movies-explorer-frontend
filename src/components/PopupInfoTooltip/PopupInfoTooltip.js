import React, { useEffect } from 'react';
import './PopupInfoTooltip.css';
import error from '../../images/error-icon.svg';

const PopupInfoTooltip = ({ messageError, isOpen, onClose }) => {

  useEffect(() => {
    const closePopupOnEscape = (e) => {

      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closePopupOnEscape);
    return () => document.removeEventListener('keydown', closePopupOnEscape);
  })

  return (
    <div
      className={`popup-info-tooltip ${isOpen ? 'popup-info-tooltip_opened' : ''}`}
      onMouseDown={onClose}>
      <div
        className="popup-info-tooltip__container"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <p className="popup-info-tooltip__message">
          {messageError}
        </p>
        <img className="popup-info-tooltip__icon" src={error} alt="Ошибка" />
        <button
          className="popup-info-tooltip__btn-close"
          type="button"
          aria-label="Close button"
          onMouseDown={onClose}
        />
      </div>
    </div>
  );
};

export default PopupInfoTooltip;
