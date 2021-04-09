import './App.css';
import Header from './components/header';
import Body from './components/body';
import React, {useState} from 'react';
import {userLocation} from './helpers/constants';
import LocationButton from './components/locationButton';
import {useEffect} from 'react';

const App = () => {
  const geo = navigator.geolocation;

  useEffect(() => {
    geo.getCurrentPosition(result => {
      setCurrentLocation(`${result.coords.latitude},${result.coords.longitude}`);
    }, err => {
      console.log(err);
    });
  }, [geo]);

  const [currentLocation, setCurrentLocation] = useState('Sri Jayewardenepura Kotte');

  return (
    <userLocation.Provider value={[currentLocation, setCurrentLocation]}>
      <div className="App">
        <LocationButton/>
        <Header/>
        <Body/>
      </div>
    </userLocation.Provider>
  );
};

export default App;
