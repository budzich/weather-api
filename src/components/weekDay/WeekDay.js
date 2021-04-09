import React from 'react';
import './weekDay.css';
import {formatDay} from '../../helpers/functions';

const WeekDay = ({data: {minTemperature, maxTemperature, date, icon, nightIcon, humidity}}) => {
  return (
    <li className="week__item">
      <div className="week__date">
        <p className="week__day">{formatDay(date)}</p>
        <div className="week__possession">
          <div className="week__possession_icon"
               style={{
                 background: `linear-gradient(135deg, rgba(0,0,0,0) ${100 - humidity}%, deepskyblue ${humidity}%)`
               }}
          />
          <p className="week__possession_text">{humidity}%</p>
        </div>
      </div>
      <div className="week__temperature">
        <div className="week__icons">
          <img className="week__temperature_icon" src={icon} alt="src"/>
          <img className="week__temperature_icon" src={nightIcon} alt="src"/>
        </div>
        <p className="week__temperature_text">{maxTemperature.split('.')[0]}°/{minTemperature.split('.')[0]}°</p>
      </div>
    </li>
  );
};

export default WeekDay;
