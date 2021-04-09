import React from 'react';
import './day.css';
import DayInfo from '../DayInfo';
import HoursInfo from '../hoursInfo';

const Day = () => {
  return (
    <div className="day">
      <DayInfo/>
      <HoursInfo/>
    </div>
  );
};


export default Day;
