import React, {useContext} from 'react';
import './day.css';
import Hour from '../hour';
import {useQuery} from '@apollo/client';
import {formatDate, sliceHours} from '../../helpers/functions';
import {GetDayWeather, userLocation} from '../../helpers/constants';
import TinySlider from 'tiny-slider-react';

const settings = {
  items: 5,
  loop: false,
  nav: false,
  controls: false,
  swipeAngel: false,
  Edgepadding: 17
};

const currentHours = new Date().getHours();

const Day = () => {
  const [currentLocation] = useContext(userLocation);

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
        <p
          className="day__date">{formatDate(data.getCity.location.localTime, data.getCity.location.localTimeString)}</p>
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
        <TinySlider settings={settings} className="day__hours">
          {sliceHours(
            data.getCity.current.hours,
            data.getCity.current.moreHours,
            data.getCity.location.localTimeString
          ).map(el => (
            <Hour key={el.hour} data={el}
                  difference={data.getCity.location.localTimeString.split(':')[0] - currentHours}/>
          ))}
        </TinySlider>
      </div>
    );
  }

  return <p>Error!</p>;
};

export default Day;
