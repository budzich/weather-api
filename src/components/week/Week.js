import React, {useContext} from 'react';
import './week.css';
import {useQuery} from '@apollo/client';
import {GetWeekWeather, userLocation} from '../../helpers/constants';
import WeekDay from '../weekDay';

const Week = () => {
  const [currentLocation] = useContext(userLocation);

  const {data} = useQuery(GetWeekWeather, {
    variables: {
      name: currentLocation,
    }
  });

  return (
    <ul className="week">
      <li className="week__yesterday">
        Yesterday
        <span className="week__span">
            {data.getCity.yesterday.maxTemp.split('.')[0]}°/ {data.getCity.yesterday.minTemp.split('.')[0]}°
          </span>
      </li>
      {data.getCity.weekInfo.map(el => <WeekDay key={el.date} data={el}/>)}
    </ul>
  );
};

export default Week;
