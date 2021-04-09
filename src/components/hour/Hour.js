import './hour.css';
import React from 'react';

const Hour = ({data: {temperature, icon, hour}, difference}) => (
  <div className="day__hour">
    <p className="day__hours_time">{(hour + +difference + 24) % 24}:00</p>
    <img className="day__hours_icon" src={icon} alt="src"/>
    <p className="day__hours_temperature">{temperature.split('.')[0]}°</p>
  </div>
);

export default Hour;
