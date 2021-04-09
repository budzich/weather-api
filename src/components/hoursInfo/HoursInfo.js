import React from 'react';
import './hoursInfo.css'
import {currentHours, GetHoursWeather, settings, userLocation} from '../../helpers/constants';
import {useQuery} from '@apollo/client';
import {useContext} from 'react';
import {sliceHours} from '../../helpers/functions';
import Hour from '../hour';
import TinySlider from 'tiny-slider-react';

const HoursInfo = () => {
  const [currentLocation] = useContext(userLocation);

  const {data} = useQuery(GetHoursWeather, {
    variables: {
      name: currentLocation,
    }
  });

  return (
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
  );
};

export default HoursInfo;
