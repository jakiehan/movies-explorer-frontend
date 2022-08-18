import React from 'react';
import './TimeLine.css';

const TimeLine = () => {
  return (
    <div className="time-line">
      <div className="time-line__sector time-line__sector_background-color_3DDC84">
        <p className="time-line__title time-line__title_color_black">1 неделя</p>
      </div>
      <div className="time-line__sector time-line__sector_background-color_303030">
        <p className="time-line__title">4 недели</p>
      </div>
      <p className="time-line__description">Back-end</p>
      <p className="time-line__description">Front-end</p>
    </div>
  )
}

export default TimeLine;
