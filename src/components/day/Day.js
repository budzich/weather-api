import React, {useContext} from 'react';
import './day.css';
import Hour from '../hour';
import {useQuery} from '@apollo/client';
import {formatDate, sliceHours} from '../../helpers/functions';
import {GetDayWeather, userLocation} from '../../helpers/constants';

const Day = () => {
  const currentLocation = useContext(userLocation);

  const {data} = useQuery(GetDayWeather, {
    variables: {
      name: currentLocation,
    }
  });

  if (data.getCity) {
    return (
      <div className="day">
        <img className="day__location-icon" src="./location.ico" alt="err"/>
        <p className="day__location">{data.getCity.location.name}</p>
        <p className="day__date">{formatDate(data.getCity.location.localTime)}</p>
        <div className="day__current">
          <div className="day__container">
            <img className="day__current_icon" src={data.getCity.current.condition.icon} alt="src"/>
            <p className="day__current_temperature">{data.getCity.current.temperature}°</p>
          </div>
          <ul className="day__current_details">
            <li>{data.getCity.current.condition.title}</li>
            <li>{data.getCity.current.maxTemp.split('.')[0]}°/{data.getCity.current.minTemp.split('.')[0]}°</li>
            <li>Feels like {data.getCity.current.feelsLike.split('.')[0]}°</li>
          </ul>
        </div>
        <ul className="day__hours">
          {sliceHours(data.getCity.current.hours, data.getCity.location.localTime).map(el => (
            <Hour key={el.hour} data={el}/>
          ))}
        </ul>
      </div>
    );
  }

  return <p>Error!</p>;
};

export default Day;
