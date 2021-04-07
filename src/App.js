import './App.css';
import Header from './components/header';
import Body from './components/body';
import React, {useState} from 'react';
import {userLocation} from './helpers/constants';

const App = () => {
  const geo = navigator.geolocation;
  geo.getCurrentPosition(result => {
    setCurrentLocation(`${result.coords.latitude},${result.coords.longitude}`);
  }, err => {
    console.log(err);
  });

  const [currentLocation, setCurrentLocation] = useState('Novopolotsk');

  return (
    <userLocation.Provider value={currentLocation}>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </userLocation.Provider>
  );
};

export default App;
