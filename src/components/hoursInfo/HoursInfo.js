import React from 'react';
import './hoursInfo.css'
import {GetHoursWeather, settings, userLocation} from '../../helpers/constants';
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
        data.getCity.location.localTimeDifference
      ).map(el => (
        <Hour key={el.hour} data={el}
              difference={data.getCity.location.localTimeDifference}/>
      ))}
    </TinySlider>
  );
};

export default HoursInfo;
