import React from 'react';
import './day.css';

const Day = () => {
  return (
    <div className="day">
      <img className="day__location-icon" src="./location.ico" alt="err"/>
      <p className="day__location">City</p>
      <p className="day__date">mon, 6 may, 11:33</p>
      <div className="day__current">
        <div className="day__container">
          <img className="day__current_icon" src="./cloudy.png" alt="src"/>
          <p className="day__current_temperature">3°</p>
        </div>
        <ul className="day__current_details">
          <li>Cloudy</li>
          <li>7°/-2°</li>
          <li>Feels like -2°</li>
        </ul>
      </div>
      <ul className="day__hours">
        <li>
          <p className="day__hours_time">12:00</p>
          <img className="day__hours_icon" src="./cloudy.png" alt="src"/>
          <p className="day__hours_temperature">4°</p>
        </li>
        <li>
          <p className="day__hours_time">12:00</p>
          <img className="day__hours_icon" src="./cloudy.png" alt="src"/>
          <p className="day__hours_temperature">4°</p>
        </li>
        <li>
          <p className="day__hours_time">12:00</p>
          <img className="day__hours_icon" src="./cloudy.png" alt="src"/>
          <p className="day__hours_temperature">4°</p>
        </li>
        <li>
          <p className="day__hours_time">12:00</p>
          <img className="day__hours_icon" src="./cloudy.png" alt="src"/>
          <p className="day__hours_temperature">4°</p>
        </li>
        <li>
          <p className="day__hours_time">12:00</p>
          <img className="day__hours_icon" src="./cloudy.png" alt="src"/>
          <p className="day__hours_temperature">4°</p>
        </li>
      </ul>
    </div>
  );
};

export default Day;
