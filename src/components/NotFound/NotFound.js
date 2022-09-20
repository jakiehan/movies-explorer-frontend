import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="not-found">
      <p className="not-found__title">
        404
      </p>
      <p className="not-found__description">
        Страница не найдена
      </p>
      <button
        className="not-found__btn transparency-link"
        type="button"
        aria-label="Back button"
        onClick={goBack}
      >
        Назад
      </button>
    </div>
  );
};

export default NotFound;
