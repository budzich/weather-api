import './hour.css';
import React from 'react';

const Hour = ({data: {temperature, icon, hour} }) => (
  <li>
    <p className="day__hours_time">{hour}:00</p>
    <img className="day__hours_icon" src={icon} alt="src"/>
    <p className="day__hours_temperature">{temperature.split('.')[0]}°</p>
  </li>
);

export default Hour;
