import './body.css';
import React, {useContext} from 'react';
import Day from '../day';
import Week from '../week';
import {useQuery} from '@apollo/client';
import {GetWeather, userLocation} from '../../helpers/constants';

const Body = () => {
  const [currentLocation] = useContext(userLocation);

  const {data, loading} = useQuery(GetWeather, {
    variables: {
      name: currentLocation,
    }
  });

  if (loading) {
    return <p className="alert">Loading...</p>;
  }

  if (data?.getCity) {
    return (
      <div>
        <Day/>
        <Week/>
      </div>
    );
  }

  return <p className="alert">Error!</p>;
};

export default Body;
